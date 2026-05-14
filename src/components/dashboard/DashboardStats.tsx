import { Building2, DollarSign, FileText, AlertTriangle } from 'lucide-react'
import { createClient } from '@/lib/supabase/server'
import { StatCard } from '@/components/shared/StatCard'

function formatPortfolioValue(n: number): string {
  if (n === 0) return '$0'
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`
  return `$${n.toLocaleString()}`
}

export async function DashboardStats() {
  const supabase = await createClient()

  const [
    { count: propertyCount },
    { count: documentCount },
    { data: priceData },
  ] = await Promise.all([
    supabase.from('properties').select('*', { count: 'exact', head: true }),
    supabase.from('documents').select('*', { count: 'exact', head: true }),
    supabase.from('properties').select('purchase_price'),
  ])

  const properties = propertyCount ?? 0
  const documents = documentCount ?? 0
  const portfolioValue = (priceData ?? []).reduce(
    (sum, p) => sum + (p.purchase_price ?? 0),
    0
  )

  const stats = [
    {
      title: 'Total Properties',
      value: String(properties),
      description: properties > 0
        ? `${properties} propert${properties === 1 ? 'y' : 'ies'} tracked`
        : 'Add your first property',
      icon: Building2,
    },
    {
      title: 'Est. Portfolio Value',
      value: formatPortfolioValue(portfolioValue),
      description: portfolioValue > 0
        ? 'Based on purchase prices'
        : 'Add purchase prices to track value',
      icon: DollarSign,
    },
    {
      title: 'Stored Documents',
      value: String(documents),
      description: documents > 0
        ? `${documents} document${documents === 1 ? '' : 's'} in vault`
        : 'No documents uploaded yet',
      icon: FileText,
    },
    {
      title: 'Maintenance Alerts',
      value: '0',
      description: 'No upcoming maintenance',
      icon: AlertTriangle,
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
      {stats.map(stat => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </div>
  )
}
