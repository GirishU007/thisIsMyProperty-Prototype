import { createClient } from '@/lib/supabase/server'
import { VaultList } from '@/components/vault/VaultList'
import type { Document, Property } from '@/types'

export const metadata = { title: 'Vault' }

export default async function VaultPage() {
  try {
    const supabase = await createClient()
    const [{ data: documents }, { data: properties }] = await Promise.all([
      supabase.from('documents').select('*').order('created_at', { ascending: false }),
      supabase.from('properties').select('*').order('address', { ascending: true }),
    ])
    return (
      <VaultList
        initialDocuments={(documents ?? []) as Document[]}
        properties={(properties ?? []) as Property[]}
      />
    )
  } catch {
    return <VaultList initialDocuments={[]} properties={[]} />
  }
}
