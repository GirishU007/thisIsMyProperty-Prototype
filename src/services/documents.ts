import { createClient } from '@/lib/supabase/client'
import type { Document } from '@/types'

const BUCKET = 'property-documents'

export async function getDocuments(): Promise<Document[]> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('documents')
    .select('*')
    .order('created_at', { ascending: false })
  if (error) throw error
  return (data ?? []) as Document[]
}

export async function getDocumentsByProperty(propertyId: string): Promise<Document[]> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('documents')
    .select('*')
    .eq('property_id', propertyId)
    .order('created_at', { ascending: false })
  if (error) throw error
  return (data ?? []) as Document[]
}

export async function uploadDocument(
  file: File,
  propertyId: string,
  category: string
): Promise<Document> {
  const supabase = createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('Not authenticated')

  const filePath = `${user.id}/${propertyId}/${Date.now()}_${file.name}`

  const { error: uploadError } = await supabase.storage
    .from(BUCKET)
    .upload(filePath, file, { contentType: file.type, upsert: false })
  if (uploadError) throw uploadError

  const { data, error: insertError } = await supabase
    .from('documents')
    .insert({
      property_id: propertyId,
      user_id: user.id,
      category,
      file_name: file.name,
      file_path: filePath,
      file_url: null,
      mime_type: file.type || null,
      file_size: file.size,
    })
    .select()
    .single()
  if (insertError) throw insertError

  return data as Document
}

export async function getDocumentUrl(filePath: string): Promise<string> {
  const supabase = createClient()
  const { data, error } = await supabase.storage
    .from(BUCKET)
    .createSignedUrl(filePath, 60 * 60)
  if (error) throw error
  return data.signedUrl
}

export async function deleteDocument(id: string, filePath: string): Promise<void> {
  const supabase = createClient()

  const { error: storageError } = await supabase.storage.from(BUCKET).remove([filePath])
  if (storageError) throw storageError

  const { error: dbError } = await supabase.from('documents').delete().eq('id', id)
  if (dbError) throw dbError
}
