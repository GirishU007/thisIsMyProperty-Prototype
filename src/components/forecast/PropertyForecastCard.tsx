import { Wrench, Building2, Shield, FileText, DollarSign, AlertTriangle } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { PropertyForecast, ForecastRiskLevel, ForecastCategory } from '@/types'

function formatCurrency(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`
  return `$${n.toLocaleString()}`
}

const RISK_STYLES: Record<ForecastRiskLevel, {
  badge: string
  bar: string
  text: string
  iconBg: string
}> = {
  low: {
    badge: 'bg-primary/10 text-primary border-primary/20',
    bar: 'bg-primary',
    text: 'text-primary',
    iconBg: 'bg-primary/10 text-primary',
  },
  medium: {
    badge: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
    bar: 'bg-amber-500',
    text: 'text-amber-600',
    iconBg: 'bg-amber-500/10 text-amber-600',
  },
  high: {
    badge: 'bg-orange-500/10 text-orange-600 border-orange-500/20',
    bar: 'bg-orange-500',
    text: 'text-orange-600',
    iconBg: 'bg-orange-500/10 text-orange-600',
  },
  critical: {
    badge: 'bg-destructive/10 text-destructive border-destructive/20',
    bar: 'bg-destructive',
    text: 'text-destructive',
    iconBg: 'bg-destructive/10 text-destructive',
  },
}

const CATEGORY_ICONS: Record<ForecastCategory, React.ComponentType<{ className?: string }>> = {
  maintenance: Wrench,
  structural: Building2,
  compliance: Shield,
  documentation: FileText,
  financial: DollarSign,
}

export function PropertyForecastCard({ forecast }: { forecast: PropertyForecast }) {
  const { property, riskLevel, riskScore, confidenceScore, documentCount, estimatedExposure, items, actions } = forecast
  const risk = RISK_STYLES[riskLevel]

  return (
    <Card className="flex flex-col">
      <CardHeader className="pb-4">
        {/* Address + risk badge */}
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-sm font-semibold truncate" title={property.address}>
              {property.address}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5 capitalize">
              {property.property_type}
              {property.year_built ? ` · Built ${property.year_built}` : ''}
            </p>
          </div>
          <span
            className={`shrink-0 inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold capitalize ${risk.badge}`}
          >
            {riskLevel}
          </span>
        </div>

        {/* Risk score bar */}
        <div className="mt-3 space-y-1.5">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Risk score</span>
            <span className={`font-semibold ${risk.text}`}>{riskScore}/100</span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
            <div
              className={`h-full rounded-full ${risk.bar}`}
              style={{ width: `${riskScore}%` }}
            />
          </div>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-3 gap-3 mt-4 pt-3 border-t border-border">
          <div className="text-center">
            <p className="text-xs text-muted-foreground">12-month est.</p>
            <p className="text-sm font-semibold mt-0.5">{formatCurrency(estimatedExposure)}</p>
          </div>
          <div className="text-center border-x border-border">
            <p className="text-xs text-muted-foreground">Confidence</p>
            <p className="text-sm font-semibold mt-0.5">{confidenceScore}%</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-muted-foreground">Documents</p>
            <p className="text-sm font-semibold mt-0.5">{documentCount}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0 flex-1 flex flex-col gap-4">
        {/* Forecast items */}
        <div className="space-y-2">
          {items.map(item => {
            const Icon = CATEGORY_ICONS[item.category] ?? AlertTriangle
            const itemRisk = RISK_STYLES[item.riskLevel]
            return (
              <div key={item.category} className="flex items-start gap-3 rounded-lg bg-muted/40 p-3">
                <div
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md ${itemRisk.iconBg}`}
                >
                  <Icon className="h-3.5 w-3.5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-xs font-medium">{item.label}</p>
                    {item.estimatedCost > 0 && (
                      <p className="text-xs font-semibold shrink-0 text-muted-foreground">
                        {formatCurrency(item.estimatedCost)}
                      </p>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Recommended actions */}
        {actions.length > 0 && (
          <div className="mt-auto pt-4 border-t border-border">
            <p className="text-xs font-medium text-muted-foreground mb-2">Recommended actions</p>
            <ul className="space-y-1.5">
              {actions.map(action => (
                <li key={action} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  {action}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
