'use client'

import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PropertyForm } from './PropertyForm'
import type { PropertyFormData } from '@/lib/validations/property'

interface PropertyModalProps {
  title: string
  defaultValues?: Partial<PropertyFormData>
  onSubmit: (data: PropertyFormData) => Promise<void>
  onClose: () => void
  isLoading: boolean
  submitLabel?: string
}

export function PropertyModal({
  title,
  defaultValues,
  onSubmit,
  onClose,
  isLoading,
  submitLabel,
}: PropertyModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <div className="relative z-50 w-full max-w-lg rounded-xl border border-border bg-card shadow-xl max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between border-b border-border px-6 py-4 shrink-0">
          <h2 className="font-semibold text-base">{title}</h2>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7"
            onClick={onClose}
            disabled={isLoading}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="overflow-y-auto p-6">
          <PropertyForm
            defaultValues={defaultValues}
            onSubmit={onSubmit}
            onCancel={onClose}
            isLoading={isLoading}
            submitLabel={submitLabel}
          />
        </div>
      </div>
    </div>
  )
}
