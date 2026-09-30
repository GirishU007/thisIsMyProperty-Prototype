import { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PageHeader } from '@/components/shared/PageHeader'
import { StatCardSkeleton, LoadingState } from '@/components/shared/LoadingState'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { DashboardStats } from '@/components/dashboard/DashboardStats'
import { RecentActivity } from '@/components/dashboard/RecentActivity'

export const metadata = { title: 'Dashboard' }

const quickActions = [
  { href: '/properties', label: 'Add Property', description: 'Register a new property to your portfolio' },
  { href: '/vault', label: 'Upload Document', description: 'Store a document in your secure vault' },
  { href: '/forecast', label: 'View Forecast', description: 'See projected portfolio performance' },
]

export default function DashboardPage() {
  return (
    <div>
      <PageHeader
        title="Dashboard"
        description="Your property portfolio at a glance"
      />

      <div className="relative mb-8 aspect-[760/135] w-full overflow-hidden rounded-xl border border-border bg-muted">
        <Image
          src="/images/dashboard-banner.jpg"
          alt="Knowledge today. A healthier home tomorrow."
          fill
          priority
          sizes="(min-width: 1024px) 75vw, 100vw"
          className="object-cover"
        />
      </div>

      <Suspense fallback={<StatCardSkeleton />}>
        <DashboardStats />
      </Suspense>

      <div className="mb-8">
        <h2 className="text-base font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {quickActions.map(({ href, label, description }) => (
            <Card
              key={href}
              className="transition-colors hover:border-primary/30 group cursor-pointer"
            >
              <CardContent className="p-6">
                <CardTitle className="text-sm font-semibold mb-1 group-hover:text-primary transition-colors">
                  {label}
                </CardTitle>
                <CardDescription className="text-xs">{description}</CardDescription>
                <Button size="sm" variant="ghost" className="mt-4 px-0 text-primary h-auto" asChild>
                  <Link href={href}>Get started →</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Suspense fallback={<RecentActivitySkeleton />}>
        <RecentActivity />
      </Suspense>
    </div>
  )
}

function RecentActivitySkeleton() {
  return (
    <div>
      <h2 className="text-base font-semibold mb-4">Recent Activity</h2>
      <LoadingState rows={4} />
    </div>
  )
}
