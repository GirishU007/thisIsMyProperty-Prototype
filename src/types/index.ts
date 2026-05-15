export interface UserProfile {
  id: string
  email: string
  full_name: string | null
  avatar_url: string | null
  role: 'homeowner' | 'realtor' | 'admin'
  created_at: string
  updated_at: string
}

export type PropertyType = 'residential' | 'commercial' | 'land'

export interface Property {
  id: string
  user_id: string
  address: string
  property_type: PropertyType
  year_built: number | null
  square_feet: number | null
  bedrooms: number | null
  bathrooms: number | null
  purchase_price: number | null
  created_at: string
  updated_at: string
}

export interface Document {
  id: string
  property_id: string
  user_id: string
  category: string
  file_name: string
  file_path: string
  file_url: string | null
  mime_type: string | null
  file_size: number | null
  upload_date: string
  created_at: string
}

export type ForecastRiskLevel = 'low' | 'medium' | 'high' | 'critical'

export type ForecastCategory =
  | 'maintenance'
  | 'structural'
  | 'compliance'
  | 'documentation'
  | 'financial'

export interface ForecastItem {
  category: ForecastCategory
  label: string
  riskLevel: ForecastRiskLevel
  estimatedCost: number
  description: string
}

export interface PropertyForecast {
  property: Property
  riskLevel: ForecastRiskLevel
  riskScore: number
  confidenceScore: number
  documentCount: number
  estimatedExposure: number
  items: ForecastItem[]
  actions: string[]
}

export interface ForecastSummary {
  totalProperties: number
  totalEstimatedExposure: number
  averageRiskScore: number
  averageConfidenceScore: number
  overallRiskLevel: ForecastRiskLevel
  propertyForecasts: PropertyForecast[]
  portfolioActions: string[]
  generatedAt: string
}

export interface NavItem {
  href: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}
