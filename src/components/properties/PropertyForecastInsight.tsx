import Link from 'next/link'
import { ArrowRight, FileWarning } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import type { PropertyForecast, ForecastRiskLevel } from '@/types'

function fmtExposure(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`
  return `$${n}`
}

const RISK_STYLES: Record<ForecastRiskLevel, { badge: string; bar: string; text: string }> = {
  low: {
    badge: 'bg-primary/10 text-primary border-primary/20',
    bar:   'bg-primary',
    text:  'text-primary',
  },
  medium: {
    badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    bar:   'bg-amber-500',
    text:  'text-amber-400',
  },
  high: {
    badge: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    bar:   'bg-orange-500',
    text:  'text-orange-400',
  },
  critical: {
    badge: 'bg-destructive/10 text-destructive border-destructive/20',
    bar:   'bg-destructive',
    text:  'text-destructive',
  },
}

interface PropertyForecastInsightProps {
  forecast: PropertyForecast
}

export function PropertyForecastInsight({ forecast }: PropertyForecastInsightProps) {
  const { riskLevel, riskScore, confidenceScore, estimatedExposure, items, actions } = forecast
  const risk = RISK_STYLES[riskLevel]

  const docWarning = items.find(item => item.category === 'documentation')
  const topActions = actions.slice(0, 2)

  return (
    <Card className="max-w-2xl">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <CardTitle className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Property Forecast
            </CardTitle>
            <span
              className={`inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold capitalize ${risk.badge}`}
            >
              {riskLevel}
            </span>
          </div>
          <Button variant="ghost" size="sm" className="gap-1 h-7 text-xs shrink-0" asChild>
            <Link href="/forecast">
              View Full Forecast
              <ArrowRight className="h-3 w-3" />
            </Link>
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-xs text-muted-foreground">12-month est.</p>
            <p className="text-sm font-semibold mt-0.5">{fmtExposure(estimatedExposure)}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Risk score</p>
            <p className={`text-sm font-semibold mt-0.5 ${risk.text}`}>{riskScore}/100</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Confidence</p>
            <p className="text-sm font-semibold mt-0.5">{confidenceScore}%</p>
          </div>
        </div>

        {/* Risk bar */}
        <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
          <div
            className={`h-full rounded-full ${risk.bar}`}
            style={{ width: `${riskScore}%` }}
          />
        </div>

        {/* Missing document warning */}
        {docWarning && (
          <div className="flex items-start gap-2.5 rounded-lg border border-amber-500/20 bg-amber-500/5 px-3 py-2.5">
            <FileWarning className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-medium text-amber-400">Missing Documents</p>
              <p className="text-xs text-muted-foreground mt-0.5">{docWarning.description}</p>
            </div>
          </div>
        )}

        {/* Recommended actions */}
        {topActions.length > 0 && (
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-1.5">Recommended actions</p>
            <ul className="space-y-1.5">
              {topActions.map(action => (
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
