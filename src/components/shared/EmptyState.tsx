import Image from 'next/image'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface EmptyStateProps {
  icon: LucideIcon
  title: string
  description: string
  action?: React.ReactNode
  /** Optional illustration shown instead of the icon (path under /public). */
  image?: string
  className?: string
}

export function EmptyState({ icon: Icon, title, description, action, image, className }: EmptyStateProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card/50 p-12 text-center',
        className
      )}
    >
      {image ? (
        <div className="relative mb-5 aspect-[16/10] w-full max-w-xs overflow-hidden rounded-lg">
          <Image src={image} alt="" fill sizes="320px" className="object-cover" />
        </div>
      ) : (
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 mb-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      )}
      <h3 className="text-base font-semibold mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground max-w-xs mb-6">{description}</p>
      {action}
    </div>
  )
}
