import { notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { PropertyDetail } from '@/components/properties/PropertyDetail'
import { PropertyForecastInsight } from '@/components/properties/PropertyForecastInsight'
import { calculateForecastSummary } from '@/services/forecasts'
import type { Property, Document } from '@/types'

type Props = { params: Promise<{ id: string }> }

export default async function PropertyDetailPage({ params }: Props) {
  const { id } = await params

  try {
    const supabase = await createClient()

    const [{ data: propertyData, error }, { data: documentsData }] = await Promise.all([
      supabase.from('properties').select('*').eq('id', id).single(),
      supabase.from('documents').select('*').eq('property_id', id),
    ])

    if (error || !propertyData) return notFound()

    const property = propertyData as Property
    const documents = (documentsData ?? []) as Document[]

    const summary = calculateForecastSummary([property], { [property.id]: documents })
    const forecast = summary.propertyForecasts[0]

    return (
      <div className="space-y-6">
        <PropertyDetail property={property} />
        <PropertyForecastInsight forecast={forecast} />
      </div>
    )
  } catch {
    return notFound()
  }
}
