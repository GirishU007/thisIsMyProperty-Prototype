'use client'

import { useState } from 'react'
import { Upload, Archive } from 'lucide-react'
import { toast } from 'sonner'
import { PageHeader } from '@/components/shared/PageHeader'
import { EmptyState } from '@/components/shared/EmptyState'
import { Button } from '@/components/ui/button'
import { DocumentCard } from './DocumentCard'
import { UploadModal } from './UploadModal'
import { uploadDocument, deleteDocument, getDocumentUrl } from '@/services/documents'
import type { Document, Property } from '@/types'

const CATEGORIES = ['deed', 'warranty', 'insurance', 'permit', 'receipt', 'invoice', 'other']

interface VaultListProps {
  initialDocuments: Document[]
  properties: Property[]
}

export function VaultList({ initialDocuments, properties }: VaultListProps) {
  const [documents, setDocuments] = useState<Document[]>(initialDocuments)
  const [uploadOpen, setUploadOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)

  const propertyMap = Object.fromEntries(properties.map(p => [p.id, p.address]))

  const usedCategories = CATEGORIES.filter(c => documents.some(d => d.category === c))

  const filtered = activeCategory
    ? documents.filter(d => d.category === activeCategory)
    : documents

  const handleUpload = async (file: File, propertyId: string, category: string) => {
    setUploading(true)
    try {
      const doc = await uploadDocument(file, propertyId, category)
      setDocuments(prev => [doc, ...prev])
      setUploadOpen(false)
      toast.success('Document uploaded')
    } catch {
      toast.error('Upload failed')
    } finally {
      setUploading(false)
    }
  }

  const handleDelete = async (doc: Document) => {
    if (!confirm(`Delete "${doc.file_name}"? This cannot be undone.`)) return
    try {
      await deleteDocument(doc.id, doc.file_path)
      setDocuments(prev => prev.filter(d => d.id !== doc.id))
      toast.success('Document deleted')
    } catch {
      toast.error('Failed to delete document')
    }
  }

  const handleDownload = async (doc: Document) => {
    try {
      const url = await getDocumentUrl(doc.file_path)
      window.open(url, '_blank')
    } catch {
      toast.error('Failed to generate download link')
    }
  }

  return (
    <div>
      <PageHeader
        title="Vault"
        description="Secure storage for all your property documents"
        action={
          <Button size="sm" className="gap-2" onClick={() => setUploadOpen(true)}>
            <Upload className="h-4 w-4" />
            Upload Document
          </Button>
        }
      />

      {documents.length > 0 && (
        <div className="flex gap-2 flex-wrap mb-6">
          <button
            onClick={() => setActiveCategory(null)}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              activeCategory === null
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:text-foreground'
            }`}
          >
            All ({documents.length})
          </button>
          {usedCategories.map(c => (
            <button
              key={c}
              onClick={() => setActiveCategory(prev => (prev === c ? null : c))}
              className={`rounded-full px-3 py-1 text-xs font-medium capitalize transition-colors ${
                activeCategory === c
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:text-foreground'
              }`}
            >
              {c} ({documents.filter(d => d.category === c).length})
            </button>
          ))}
        </div>
      )}

      {documents.length === 0 ? (
        <EmptyState
          icon={Archive}
          title="Your vault is empty"
          description="Upload deeds, warranties, insurance policies, permits, and receipts. All documents are securely stored."
          action={
            <Button className="gap-2" onClick={() => setUploadOpen(true)}>
              <Upload className="h-4 w-4" />
              Upload Your First Document
            </Button>
          }
          className="mt-4"
        />
      ) : filtered.length === 0 ? (
        <EmptyState
          icon={Archive}
          title={`No ${activeCategory} documents`}
          description="No documents in this category yet."
          className="mt-4"
        />
      ) : (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map(doc => (
            <DocumentCard
              key={doc.id}
              document={doc}
              propertyAddress={propertyMap[doc.property_id] ?? 'Unknown property'}
              onDownload={handleDownload}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}

      {uploadOpen && (
        <UploadModal
          properties={properties}
          onUpload={handleUpload}
          onClose={() => setUploadOpen(false)}
          isLoading={uploading}
        />
      )}
    </div>
  )
}
