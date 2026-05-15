'use client'

import { useEffect, useState } from 'react'
import {
  X, Download, ExternalLink, Trash2,
  AlertCircle, Loader2, FileX,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { getDocumentSignedUrl } from '@/services/documents'
import type { Document } from '@/types'

interface DocumentViewerProps {
  document: Document
  propertyAddress: string
  onClose: () => void
  onDelete: (doc: Document) => void
}

function formatSize(bytes: number | null): string {
  if (!bytes) return '—'
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-AU', {
    day: 'numeric', month: 'long', year: 'numeric',
  })
}

export function DocumentViewer({ document, propertyAddress, onClose, onDelete }: DocumentViewerProps) {
  const [signedUrl, setSignedUrl] = useState<string | null>(null)
  const [urlLoading, setUrlLoading] = useState(true)
  const [urlError, setUrlError] = useState<string | null>(null)
  const [previewLoaded, setPreviewLoaded] = useState(false)
  const [imgError, setImgError] = useState(false)

  const isPdf = document.mime_type === 'application/pdf'
  const isImage = document.mime_type?.startsWith('image/') ?? false
  const canPreview = isPdf || isImage

  useEffect(() => {
    let cancelled = false
    setUrlLoading(true)
    setUrlError(null)
    setSignedUrl(null)
    setPreviewLoaded(false)
    setImgError(false)

    getDocumentSignedUrl(document.file_path)
      .then(url => { if (!cancelled) { setSignedUrl(url); setUrlLoading(false) } })
      .catch(() => { if (!cancelled) { setUrlError('Could not load document. Please try again.'); setUrlLoading(false) } })

    return () => { cancelled = true }
  }, [document.file_path])

  const handleOpenNewTab = () => {
    if (signedUrl) window.open(signedUrl, '_blank')
  }

  const handleDownload = async () => {
    if (!signedUrl) return
    try {
      const res = await fetch(signedUrl)
      const blob = await res.blob()
      const objectUrl = URL.createObjectURL(blob)
      const a = window.document.createElement('a')
      a.href = objectUrl
      a.download = document.file_name
      a.click()
      URL.revokeObjectURL(objectUrl)
    } catch {
      window.open(signedUrl, '_blank')
    }
  }

  const metadata = [
    { label: 'Category', value: document.category },
    { label: 'Property', value: propertyAddress },
    { label: 'Uploaded', value: formatDate(document.upload_date) },
    { label: 'File size', value: formatSize(document.file_size) },
    { label: 'Type', value: document.mime_type ?? '—' },
  ]

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      <div className="fixed inset-y-0 right-0 z-50 flex w-full flex-col bg-card border-l border-border shadow-2xl sm:w-[480px] lg:w-[540px]">

        {/* Header */}
        <div className="flex items-start justify-between gap-3 border-b border-border px-5 py-4 shrink-0">
          <div className="min-w-0">
            <p className="text-sm font-semibold truncate" title={document.file_name}>
              {document.file_name}
            </p>
            <Badge variant="outline" className="capitalize mt-1.5 text-xs py-0 h-5">
              {document.category}
            </Badge>
          </div>
          <Button variant="ghost" size="icon" className="h-7 w-7 shrink-0 mt-0.5" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Metadata */}
        <div className="border-b border-border px-5 py-4 shrink-0">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-3">
            {metadata.map(({ label, value }) => (
              <div key={label}>
                <dt className="text-xs text-muted-foreground">{label}</dt>
                <dd className="text-xs font-medium mt-0.5 truncate capitalize" title={value}>
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Preview */}
        <div className="flex-1 min-h-0 p-4 overflow-hidden">
          {urlLoading ? (
            <div className="flex h-full items-center justify-center">
              <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
            </div>

          ) : urlError ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center px-6">
              <AlertCircle className="h-8 w-8 text-destructive" />
              <p className="text-sm text-muted-foreground">{urlError}</p>
              <Button variant="outline" size="sm" onClick={() => {
                setUrlLoading(true)
                setUrlError(null)
                getDocumentSignedUrl(document.file_path)
                  .then(url => { setSignedUrl(url); setUrlLoading(false) })
                  .catch(() => { setUrlError('Could not load document. Please try again.'); setUrlLoading(false) })
              }}>
                Retry
              </Button>
            </div>

          ) : !canPreview ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center px-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted">
                <FileX className="h-6 w-6 text-muted-foreground" />
              </div>
              <p className="text-sm font-medium">Preview not available</p>
              <p className="text-xs text-muted-foreground max-w-[220px]">
                This file type cannot be previewed in the browser.
              </p>
              <Button size="sm" className="gap-2 mt-1" onClick={handleOpenNewTab}>
                <ExternalLink className="h-3.5 w-3.5" />
                Open file
              </Button>
            </div>

          ) : isPdf ? (
            <div className="relative h-full rounded-lg overflow-hidden border border-border bg-muted/30">
              {!previewLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                </div>
              )}
              <iframe
                src={signedUrl!}
                className="w-full h-full"
                title={document.file_name}
                onLoad={() => setPreviewLoaded(true)}
              />
            </div>

          ) : (
            <div className="flex h-full items-center justify-center rounded-lg border border-border bg-muted/30 overflow-hidden">
              {!previewLoaded && !imgError && (
                <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
              )}
              {imgError ? (
                <div className="flex flex-col items-center gap-3 text-center px-6">
                  <AlertCircle className="h-6 w-6 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">Could not load image.</p>
                </div>
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={signedUrl!}
                  alt={document.file_name}
                  className={`max-w-full max-h-full object-contain transition-opacity duration-200 ${previewLoaded ? 'opacity-100' : 'opacity-0 absolute'}`}
                  onLoad={() => setPreviewLoaded(true)}
                  onError={() => setImgError(true)}
                />
              )}
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="border-t border-border px-5 py-4 shrink-0 flex items-center justify-between gap-3">
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="gap-1.5"
              onClick={handleOpenNewTab}
              disabled={!signedUrl}
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Open in new tab</span>
              <span className="sm:hidden">Open</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="gap-1.5"
              onClick={handleDownload}
              disabled={!signedUrl}
            >
              <Download className="h-3.5 w-3.5" />
              Download
            </Button>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="gap-1.5 text-destructive hover:text-destructive hover:bg-destructive/10"
            onClick={() => onDelete(document)}
          >
            <Trash2 className="h-3.5 w-3.5" />
            Delete
          </Button>
        </div>
      </div>
    </>
  )
}
