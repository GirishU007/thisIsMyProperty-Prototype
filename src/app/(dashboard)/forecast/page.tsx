import { TrendingUp } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata = { title: 'Forecast' }

export default function ForecastPage() {
  return (
    <div>
      <PageHeader
        title="Forecast"
        description="Financial projections and portfolio performance"
      />

      <Card className="mt-4">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <CardTitle>Portfolio Forecast</CardTitle>
                <Badge variant="secondary" className="text-xs">Coming Soon</Badge>
              </div>
              <CardDescription>Property value projections and financial intelligence</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            The Forecast module will provide intelligent projections based on your portfolio data including:
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              'Property value appreciation estimates',
              'Renovation ROI projections',
              'Maintenance cost forecasts',
              'Portfolio growth tracking',
              'Market comparison insights',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-xs text-muted-foreground border-t border-border pt-4">
            Add properties and documents to your portfolio to unlock forecasting features.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
