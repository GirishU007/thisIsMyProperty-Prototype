'use client'

import Link from 'next/link'
import { Building2, MoreVertical, Pencil, Trash2 } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { formatCurrency } from '@/lib/utils'
import type { Property } from '@/types'

const TYPE_LABELS: Record<string, string> = {
  residential: 'Residential',
  commercial: 'Commercial',
  land: 'Land',
}

interface PropertyCardProps {
  property: Property
  onEdit: (property: Property) => void
  onDelete: (id: string) => void
}

export function PropertyCard({ property, onEdit, onDelete }: PropertyCardProps) {
  const hasBeds = property.bedrooms != null
  const hasBaths = property.bathrooms != null
  const hasSqft = property.square_feet != null
  const hasStats = hasBeds || hasBaths || hasSqft

  return (
    <Card className="group transition-colors hover:border-primary/30">
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-3">
          <Link href={`/properties/${property.id}`} className="flex items-start gap-3 flex-1 min-w-0">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Building2 className="h-5 w-5 text-primary" />
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-sm leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                {property.address}
              </p>
              <Badge variant="secondary" className="mt-1.5 text-xs">
                {TYPE_LABELS[property.property_type] ?? property.property_type}
              </Badge>
            </div>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => onEdit(property)}>
                <Pencil className="mr-2 h-4 w-4" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => onDelete(property.id)}
                className="text-destructive focus:text-destructive"
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {hasStats && (
          <div className="mt-4 flex gap-4 text-xs text-muted-foreground">
            {hasBeds && (
              <span>
                <span className="font-medium text-foreground">{property.bedrooms}</span> bd
              </span>
            )}
            {hasBaths && (
              <span>
                <span className="font-medium text-foreground">{property.bathrooms}</span> ba
              </span>
            )}
            {hasSqft && (
              <span>
                <span className="font-medium text-foreground">{property.square_feet!.toLocaleString()}</span> sqft
              </span>
            )}
          </div>
        )}

        {property.purchase_price != null && (
          <p className="mt-3 text-sm font-semibold text-primary">
            {formatCurrency(property.purchase_price)}
          </p>
        )}
      </CardContent>
    </Card>
  )
}
