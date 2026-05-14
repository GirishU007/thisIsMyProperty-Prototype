import { createClient } from '@/lib/supabase/client'
import type { Property } from '@/types'

export type PropertyInput = {
  address: string
  property_type: string
  year_built: number | null
  square_feet: number | null
  bedrooms: number | null
  bathrooms: number | null
  purchase_price: number | null
}

export async function getProperties(): Promise<Property[]> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('properties')
    .select('*')
    .order('created_at', { ascending: false })
  if (error) throw error
  return (data ?? []) as Property[]
}

export async function getPropertyById(id: string): Promise<Property> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('properties')
    .select('*')
    .eq('id', id)
    .single()
  if (error) throw error
  return data as Property
}

export async function createProperty(input: PropertyInput): Promise<Property> {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('Not authenticated')
  const { data, error } = await supabase
    .from('properties')
    .insert({ ...input, user_id: user.id })
    .select()
    .single()
  if (error) throw error
  return data as Property
}

export async function updateProperty(id: string, input: Partial<PropertyInput>): Promise<Property> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('properties')
    .update(input)
    .eq('id', id)
    .select()
    .single()
  if (error) throw error
  return data as Property
}

export async function deleteProperty(id: string): Promise<void> {
  const supabase = createClient()
  const { error } = await supabase
    .from('properties')
    .delete()
    .eq('id', id)
  if (error) throw error
}
