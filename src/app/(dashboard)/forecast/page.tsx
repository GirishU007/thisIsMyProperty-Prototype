import { Suspense } from 'react'
import { TrendingUp } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { StatCardSkeleton, LoadingState } from '@/components/shared/LoadingState'
import { ForecastContent } from '@/components/forecast/ForecastContent'

export const metadata = { title: 'Forecast' }

export default function ForecastPage() {
  return (
    <div>
      <PageHeader
        title="Forecast"
        description="Portfolio risk assessment and 12-month maintenance estimates"
      />
      <Suspense fallback={<ForecastSkeleton />}>
        <ForecastContent />
      </Suspense>
    </div>
  )
}

function ForecastSkeleton() {
  return (
    <div className="space-y-8">
      <StatCardSkeleton />
      <div>
        <div className="h-5 w-40 rounded-md bg-muted animate-pulse mb-4" />
        <LoadingState rows={2} />
      </div>
    </div>
  )
}
