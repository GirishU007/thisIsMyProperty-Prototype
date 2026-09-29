'use client'

import { FileText, Image as ImageIcon, File, Download, Trash2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import type { Document } from '@/types'

interface DocumentCardProps {
  document: Document
  propertyAddress: string
  onView: (doc: Document) => void
  onDownload: (doc: Document) => void
  onDelete: (doc: Document) => void
}

function FileIcon({ mimeType }: { mimeType: string | null }) {
  if (mimeType?.startsWith('image/')) return <ImageIcon className="h-5 w-5" />
  if (
    mimeType === 'application/pdf' ||
    mimeType?.includes('word') ||
    mimeType?.startsWith('text/')
  ) {
    return <FileText className="h-5 w-5" />
  }
  return <File className="h-5 w-5" />
}

function formatSize(bytes: number | null): string {
  if (!bytes) return '—'
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

const CATEGORY_ICON_STYLE: Record<string, string> = {
  deed: 'bg-blue-500/10 text-blue-600',
  warranty: 'bg-purple-500/10 text-purple-600',
  insurance: 'bg-amber-500/10 text-amber-600',
  permit: 'bg-orange-500/10 text-orange-600',
  receipt: 'bg-green-500/10 text-green-600',
  invoice: 'bg-cyan-500/10 text-cyan-600',
  other: 'bg-muted text-muted-foreground',
}

export function DocumentCard({ document, propertyAddress, onView, onDownload, onDelete }: DocumentCardProps) {
  const iconStyle = CATEGORY_ICON_STYLE[document.category] ?? CATEGORY_ICON_STYLE.other

  return (
    <Card
      className="group transition-colors hover:border-primary/30 cursor-pointer"
      onClick={() => onView(document)}
    >
      <CardContent className="p-4 flex items-start gap-3">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${iconStyle}`}
        >
          <FileIcon mimeType={document.mime_type} />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium truncate" title={document.file_name}>
            {document.file_name}
          </p>
          <p className="text-xs text-muted-foreground truncate mt-0.5">{propertyAddress}</p>
          <div className="flex items-center gap-2 mt-2 flex-wrap">
            <Badge variant="outline" className="capitalize text-xs py-0 h-5">
              {document.category}
            </Badge>
            <span className="text-xs text-muted-foreground">{formatSize(document.file_size)}</span>
            <span className="text-xs text-muted-foreground">·</span>
            <span className="text-xs text-muted-foreground">{formatDate(document.upload_date)}</span>
          </div>
        </div>

        <div className="flex gap-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7"
            onClick={e => { e.stopPropagation(); onDownload(document) }}
            title="Download"
          >
            <Download className="h-3.5 w-3.5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 hover:text-destructive"
            onClick={e => { e.stopPropagation(); onDelete(document) }}
            title="Delete"
          >
            <Trash2 className="h-3.5 w-3.5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
