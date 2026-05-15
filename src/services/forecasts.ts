import { createClient } from '@/lib/supabase/client'
import type {
  Property, Document,
  ForecastRiskLevel, ForecastItem,
  PropertyForecast, ForecastSummary,
} from '@/types'

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function toRiskLevel(score: number): ForecastRiskLevel {
  if (score < 30) return 'low'
  if (score < 55) return 'medium'
  if (score < 75) return 'high'
  return 'critical'
}

function clamp(n: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, n))
}

// ---------------------------------------------------------------------------
// Per-property calculation
// ---------------------------------------------------------------------------

function calculatePropertyForecast(
  property: Property,
  documents: Document[]
): PropertyForecast {
  const currentYear = new Date().getFullYear()
  const age = property.year_built ? currentYear - property.year_built : null
  const docCount = documents.length
  const docCategories = new Set(documents.map(d => d.category))

  // --- Risk score (0–100, higher = more risk) ---
  let riskScore = 35

  if (age !== null) {
    if (age <= 5) riskScore -= 15
    else if (age <= 15) riskScore += 0
    else if (age <= 30) riskScore += 15
    else if (age <= 50) riskScore += 25
    else riskScore += 35
  } else {
    riskScore += 10 // unknown age = slight penalty
  }

  if (property.property_type === 'commercial') riskScore += 10
  if (property.property_type === 'land') riskScore -= 10

  if (docCount === 0) riskScore += 20
  else if (docCount <= 2) riskScore += 10
  else if (docCount >= 6) riskScore -= 10

  riskScore = clamp(riskScore, 0, 100)
  const riskLevel = toRiskLevel(riskScore)

  // --- Confidence score (0–100) ---
  let confidence = 25
  if (property.purchase_price) confidence += 25
  if (property.year_built) confidence += 20
  if (property.square_feet) confidence += 10
  confidence += clamp(docCount * 4, 0, 20)
  confidence = clamp(confidence, 0, 100)

  // --- Estimated 12-month maintenance exposure ---
  let maintenanceRate = 0.01
  if (age !== null) {
    if (age > 50) maintenanceRate = 0.025
    else if (age > 30) maintenanceRate = 0.018
    else if (age > 15) maintenanceRate = 0.012
  }

  const fallbackByType: Record<string, number> = {
    residential: 4500,
    commercial: 12000,
    land: 800,
  }
  const estimatedExposure = property.purchase_price
    ? Math.round(property.purchase_price * maintenanceRate)
    : (fallbackByType[property.property_type] ?? 4500)

  // --- Forecast items ---
  const items: ForecastItem[] = []

  // Maintenance — always present
  items.push({
    category: 'maintenance',
    label: 'Routine Maintenance',
    riskLevel: toRiskLevel(clamp(riskScore - 10, 0, 100)),
    estimatedCost: Math.round(estimatedExposure * 0.55),
    description:
      age !== null && age > 30
        ? 'Older property — elevated maintenance costs expected'
        : 'Annual maintenance budget estimate',
  })

  // Structural — for properties over 20 years old
  if (age !== null && age > 20) {
    items.push({
      category: 'structural',
      label: 'Structural & Systems',
      riskLevel: age > 50 ? 'critical' : age > 35 ? 'high' : 'medium',
      estimatedCost: Math.round(estimatedExposure * 0.25),
      description:
        age > 50
          ? 'Major systems may need replacement — plumbing, electrical, roofing'
          : 'Key systems approaching age thresholds — inspect for wear',
    })
  }

  // Documentation gap
  if (docCount < 3) {
    items.push({
      category: 'documentation',
      label: 'Documentation Gap',
      riskLevel: docCount === 0 ? 'high' : 'medium',
      estimatedCost: 0,
      description:
        docCount === 0
          ? 'No documents uploaded — coverage blind spots exist'
          : 'Incomplete document set — upload key property records',
    })
  }

  // Financial exposure — always present
  items.push({
    category: 'financial',
    label: 'Financial Exposure',
    riskLevel: !property.purchase_price ? 'medium' : toRiskLevel(clamp(riskScore - 15, 0, 100)),
    estimatedCost: Math.round(estimatedExposure * 0.15),
    description: !property.purchase_price
      ? 'Add purchase price for accurate financial modelling'
      : 'Estimated holding, insurance, and management costs',
  })

  // Compliance — commercial or very old properties
  if (property.property_type === 'commercial' || (age !== null && age > 40)) {
    items.push({
      category: 'compliance',
      label: 'Compliance & Permits',
      riskLevel: property.property_type === 'commercial' ? 'medium' : 'low',
      estimatedCost: Math.round(estimatedExposure * 0.05),
      description:
        property.property_type === 'commercial'
          ? 'Commercial properties require regular compliance and safety review'
          : 'Older property may need permit history verification',
    })
  }

  // --- Recommended actions ---
  const actions: string[] = []
  if (!docCategories.has('deed')) actions.push('Upload property deed')
  if (!docCategories.has('insurance')) actions.push('Upload insurance policy')
  if (!property.purchase_price) actions.push('Add purchase price for accurate forecasting')
  if (!property.year_built) actions.push('Add year built to improve risk assessment')
  if (age !== null && age > 30 && !docCategories.has('permit')) {
    actions.push('Upload permit history for this older property')
  }
  if (docCount === 0) actions.push('Upload at least one document to reduce risk score')
  if (age !== null && age > 30) actions.push('Schedule a structural inspection')

  return {
    property,
    riskLevel,
    riskScore,
    confidenceScore: confidence,
    documentCount: docCount,
    estimatedExposure,
    items,
    actions: actions.slice(0, 4),
  }
}

// ---------------------------------------------------------------------------
// Portfolio-level calculation (pure — no DB calls)
// ---------------------------------------------------------------------------

export function calculateForecastSummary(
  properties: Property[],
  documentsByPropertyId: Record<string, Document[]>
): ForecastSummary {
  if (properties.length === 0) {
    return {
      totalProperties: 0,
      totalEstimatedExposure: 0,
      averageRiskScore: 0,
      averageConfidenceScore: 0,
      overallRiskLevel: 'low',
      propertyForecasts: [],
      portfolioActions: [],
      generatedAt: new Date().toISOString(),
    }
  }

  const propertyForecasts = properties.map(p =>
    calculatePropertyForecast(p, documentsByPropertyId[p.id] ?? [])
  )

  const totalEstimatedExposure = propertyForecasts.reduce(
    (sum, f) => sum + f.estimatedExposure, 0
  )
  const averageRiskScore = Math.round(
    propertyForecasts.reduce((sum, f) => sum + f.riskScore, 0) / propertyForecasts.length
  )
  const averageConfidenceScore = Math.round(
    propertyForecasts.reduce((sum, f) => sum + f.confidenceScore, 0) / propertyForecasts.length
  )

  // Deduplicate actions across properties, cap at 5
  const seen = new Set<string>()
  const portfolioActions: string[] = []
  for (const forecast of propertyForecasts) {
    for (const action of forecast.actions) {
      if (!seen.has(action) && portfolioActions.length < 5) {
        seen.add(action)
        portfolioActions.push(action)
      }
    }
  }

  return {
    totalProperties: properties.length,
    totalEstimatedExposure,
    averageRiskScore,
    averageConfidenceScore,
    overallRiskLevel: toRiskLevel(averageRiskScore),
    propertyForecasts,
    portfolioActions,
    generatedAt: new Date().toISOString(),
  }
}

// ---------------------------------------------------------------------------
// Client-side fetch + calculate (for use in client components)
// ---------------------------------------------------------------------------

export async function getForecastSummary(): Promise<ForecastSummary> {
  const supabase = createClient()

  const [{ data: propertiesData }, { data: documentsData }] = await Promise.all([
    supabase.from('properties').select('*').order('created_at', { ascending: false }),
    supabase.from('documents').select('*'),
  ])

  const properties = (propertiesData ?? []) as Property[]
  const documents = (documentsData ?? []) as Document[]

  const documentsByPropertyId: Record<string, Document[]> = {}
  for (const doc of documents) {
    if (!documentsByPropertyId[doc.property_id]) {
      documentsByPropertyId[doc.property_id] = []
    }
    documentsByPropertyId[doc.property_id].push(doc)
  }

  return calculateForecastSummary(properties, documentsByPropertyId)
}
