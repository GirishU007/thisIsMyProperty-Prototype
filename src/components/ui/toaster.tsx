'use client'

import { Toaster as SonnerToaster } from 'sonner'

export function Toaster() {
  return (
    <SonnerToaster
      theme="light"
      position="bottom-right"
      toastOptions={{
        classNames: {
          toast:
            'bg-card text-foreground border border-border shadow-lg rounded-lg',
          description: 'text-muted-foreground',
          actionButton: 'bg-primary text-primary-foreground',
          cancelButton: 'bg-muted text-muted-foreground',
          error: 'bg-destructive text-destructive-foreground border-destructive',
          success: 'border-primary/30',
        },
      }}
    />
  )
}
