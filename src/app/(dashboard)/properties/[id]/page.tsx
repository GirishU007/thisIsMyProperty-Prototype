import { notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { PropertyDetail } from '@/components/properties/PropertyDetail'
import type { Property } from '@/types'

type Props = { params: Promise<{ id: string }> }

export default async function PropertyDetailPage({ params }: Props) {
  const { id } = await params

  try {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from('properties')
      .select('*')
      .eq('id', id)
      .single()

    if (error || !data) return notFound()
    return <PropertyDetail property={data as Property} />
  } catch {
    return notFound()
  }
}
