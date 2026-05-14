import { createClient } from '@/lib/supabase/server'
import { PropertiesList } from '@/components/properties/PropertiesList'
import type { Property } from '@/types'

export const metadata = { title: 'Properties' }

export default async function PropertiesPage() {
  try {
    const supabase = await createClient()
    const { data } = await supabase
      .from('properties')
      .select('*')
      .order('created_at', { ascending: false })
    return <PropertiesList initialProperties={(data ?? []) as Property[]} />
  } catch {
    return <PropertiesList initialProperties={[]} />
  }
}
