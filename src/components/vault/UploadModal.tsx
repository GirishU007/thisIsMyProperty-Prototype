'use client'

import { useState, useRef, type DragEvent } from 'react'
import { X, Upload, FileText, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import type { Property } from '@/types'

const CATEGORIES = ['deed', 'warranty', 'insurance', 'permit', 'receipt', 'invoice', 'other']
const MAX_SIZE = 20 * 1024 * 1024

interface UploadModalProps {
  properties: Property[]
  onUpload: (file: File, propertyId: string, category: string) => Promise<void>
  onClose: () => void
  isLoading: boolean
}

export function UploadModal({ properties, onUpload, onClose, isLoading }: UploadModalProps) {
  const [file, setFile] = useState<File | null>(null)
  const [propertyId, setPropertyId] = useState(properties[0]?.id ?? '')
  const [category, setCategory] = useState('deed')
  const [dragOver, setDragOver] = useState(false)
  const [fileError, setFileError] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const validateAndSet = (f: File) => {
    setFileError(null)
    if (f.size > MAX_SIZE) {
      setFileError('File must be under 20 MB')
      return
    }
    setFile(f)
  }

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragOver(false)
    const f = e.dataTransfer.files[0]
    if (f) validateAndSet(f)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file || !propertyId) return
    await onUpload(file, propertyId, category)
  }

  if (properties.length === 0) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} aria-hidden />
        <div className="relative z-50 w-full max-w-md rounded-xl border border-border bg-card shadow-xl p-6 text-center space-y-4">
          <p className="text-sm font-medium">No properties found</p>
          <p className="text-sm text-muted-foreground">Add a property before uploading documents.</p>
          <Button variant="outline" onClick={onClose}>Close</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={!isLoading ? onClose : undefined}
        aria-hidden
      />
      <div className="relative z-50 w-full max-w-lg rounded-xl border border-border bg-card shadow-xl">
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <h2 className="font-semibold text-base">Upload Document</h2>
          <Button variant="ghost" size="icon" className="h-7 w-7" onClick={onClose} disabled={isLoading}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="space-y-1.5">
            <Label>Property</Label>
            <select
              value={propertyId}
              onChange={e => setPropertyId(e.target.value)}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50"
              disabled={isLoading}
              required
            >
              {properties.map(p => (
                <option key={p.id} value={p.id}>{p.address}</option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <Label>Category</Label>
            <select
              value={category}
              onChange={e => setCategory(e.target.value)}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50"
              disabled={isLoading}
            >
              {CATEGORIES.map(c => (
                <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>
              ))}
            </select>
          </div>

          <div
            className={`rounded-lg border-2 border-dashed p-8 text-center transition-colors cursor-pointer select-none ${
              dragOver ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
            } ${isLoading ? 'pointer-events-none opacity-50' : ''}`}
            onDragOver={e => { e.preventDefault(); setDragOver(true) }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            onClick={() => inputRef.current?.click()}
          >
            <input
              ref={inputRef}
              type="file"
              className="hidden"
              onChange={e => { const f = e.target.files?.[0]; if (f) validateAndSet(f) }}
              disabled={isLoading}
            />
            {file ? (
              <div className="flex items-center justify-center gap-2 flex-wrap">
                <FileText className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm font-medium truncate max-w-xs">{file.name}</span>
                <span className="text-xs text-muted-foreground shrink-0">
                  ({(file.size / 1024).toFixed(0)} KB)
                </span>
              </div>
            ) : (
              <>
                <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm font-medium">Drop file here or click to browse</p>
                <p className="text-xs text-muted-foreground mt-1">Max 20 MB</p>
              </>
            )}
          </div>

          {fileError && (
            <div className="flex items-center gap-2 text-destructive text-sm">
              <AlertCircle className="h-4 w-4 shrink-0" />
              {fileError}
            </div>
          )}

          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={onClose}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1"
              disabled={!file || isLoading}
            >
              {isLoading ? 'Uploading...' : 'Upload'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
