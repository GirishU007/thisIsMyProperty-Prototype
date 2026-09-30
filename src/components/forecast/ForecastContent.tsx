import Link from 'next/link'
import { TrendingUp, AlertTriangle, Shield, Building2 } from 'lucide-react'
import { createClient } from '@/lib/supabase/server'
import { PageHeader } from '@/components/shared/PageHeader'
import { StatCard } from '@/components/shared/StatCard'
import { EmptyState } from '@/components/shared/EmptyState'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PropertyForecastCard } from './PropertyForecastCard'
import { ForecastChart } from './ForecastChart'
import { calculateForecastSummary } from '@/services/forecasts'
import type { Property, Document, ForecastRiskLevel } from '@/types'

function formatCurrency(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`
  return `$${n.toLocaleString()}`
}

const RISK_LABEL: Record<ForecastRiskLevel, string> = {
  low: 'Low risk',
  medium: 'Medium risk',
  high: 'High risk',
  critical: 'Critical',
}

const RISK_DESCRIPTION: Record<ForecastRiskLevel, string> = {
  low: 'Portfolio is well maintained',
  medium: 'Some attention areas identified',
  high: 'Action recommended on several properties',
  critical: 'Immediate attention required',
}

export async function ForecastContent() {
  const supabase = await createClient()

  const [{ data: propertiesData }, { data: documentsData }] = await Promise.all([
    supabase.from('properties').select('*').order('created_at', { ascending: false }),
    supabase.from('documents').select('*'),
  ])

  const properties = (propertiesData ?? []) as Property[]
  const documents = (documentsData ?? []) as Document[]

  if (properties.length === 0) {
    return (
      <EmptyState
        icon={TrendingUp}
        image="/images/house-cutaway.jpg"
        title="No properties to forecast"
        description="Add at least one property to generate your portfolio risk forecast and maintenance estimates."
        action={
          <Button asChild>
            <Link href="/properties">Add Property</Link>
          </Button>
        }
        className="mt-4"
      />
    )
  }

  const documentsByPropertyId: Record<string, Document[]> = {}
  for (const doc of documents) {
    if (!documentsByPropertyId[doc.property_id]) {
      documentsByPropertyId[doc.property_id] = []
    }
    documentsByPropertyId[doc.property_id].push(doc)
  }

  const summary = calculateForecastSummary(properties, documentsByPropertyId)

  const summaryStats = [
    {
      title: '12-Month Exposure',
      value: formatCurrency(summary.totalEstimatedExposure),
      description: 'Estimated portfolio maintenance costs',
      icon: TrendingUp,
    },
    {
      title: 'Avg Risk Score',
      value: `${summary.averageRiskScore}/100`,
      description: RISK_DESCRIPTION[summary.overallRiskLevel],
      icon: AlertTriangle,
    },
    {
      title: 'Confidence',
      value: `${summary.averageConfidenceScore}%`,
      description: 'Based on data completeness',
      icon: Shield,
    },
    {
      title: 'Properties',
      value: String(summary.totalProperties),
      description: `${RISK_LABEL[summary.overallRiskLevel]} overall`,
      icon: Building2,
    },
  ]

  return (
    <div className="space-y-8">
      {/* Summary stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {summaryStats.map(stat => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* Chart */}
      <ForecastChart summary={summary} />

      {/* Portfolio recommendations */}
      {summary.portfolioActions.length > 0 && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Portfolio Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {summary.portfolioActions.map(action => (
                <li key={action} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  {action}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Per-property breakdown */}
      <div>
        <h2 className="text-base font-semibold mb-4">Property Breakdown</h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {summary.propertyForecasts.map(forecast => (
            <PropertyForecastCard key={forecast.property.id} forecast={forecast} />
          ))}
        </div>
      </div>

      <p className="text-xs text-muted-foreground text-right pb-2">
        Forecast generated {new Date(summary.generatedAt).toLocaleString('en-AU')}
        {' · '}Based on portfolio data only · Not financial advice
      </p>
    </div>
  )
}
