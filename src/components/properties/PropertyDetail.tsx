'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Pencil, Trash2 } from 'lucide-react'
import { toast } from 'sonner'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { PropertyModal } from './PropertyModal'
import { updateProperty, deleteProperty } from '@/services/properties'
import { formatCurrency, formatDate } from '@/lib/utils'
import { getPropertyImage } from '@/lib/propertyImages'
import type { Property } from '@/types'
import type { PropertyFormData } from '@/lib/validations/property'

const TYPE_LABELS: Record<string, string> = {
  residential: 'Residential',
  commercial: 'Commercial',
  land: 'Land',
}

interface PropertyDetailProps {
  property: Property
}

export function PropertyDetail({ property: initial }: PropertyDetailProps) {
  const router = useRouter()
  const [property, setProperty] = useState<Property>(initial)
  const [editOpen, setEditOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleEdit = async (data: PropertyFormData) => {
    setSubmitting(true)
    try {
      const updated = await updateProperty(property.id, data)
      setProperty(updated)
      setEditOpen(false)
      toast.success('Property updated')
    } catch {
      toast.error('Failed to update property')
    } finally {
      setSubmitting(false)
    }
  }

  const handleDelete = async () => {
    if (!confirm('Delete this property? This cannot be undone.')) return
    try {
      await deleteProperty(property.id)
      toast.success('Property deleted')
      router.push('/properties')
    } catch {
      toast.error('Failed to delete property')
    }
  }

  return (
    <div>
      <div className="relative mb-6 aspect-[2/1] max-h-64 sm:aspect-[3/1] w-full overflow-hidden rounded-xl border border-border bg-muted">
        <Image
          src={getPropertyImage(property.id)}
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 75vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-3 min-w-0">
          <Button variant="ghost" size="icon" className="h-8 w-8 mt-0.5 shrink-0" asChild>
            <Link href="/properties">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div className="min-w-0">
            <h1 className="text-xl font-bold tracking-tight break-words sm:text-2xl">{property.address}</h1>
            <Badge variant="secondary" className="mt-1.5 text-xs">
              {TYPE_LABELS[property.property_type] ?? property.property_type}
            </Badge>
          </div>
        </div>
        <div className="flex shrink-0 gap-2 pl-11 sm:pl-0">
          <Button variant="outline" size="sm" className="gap-2" onClick={() => setEditOpen(true)}>
            <Pencil className="h-4 w-4" />
            Edit
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="gap-2 text-destructive border-destructive/30 hover:bg-destructive/10"
            onClick={handleDelete}
          >
            <Trash2 className="h-4 w-4" />
            Delete
          </Button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Property Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <DetailRow label="Type" value={TYPE_LABELS[property.property_type] ?? property.property_type} />
            {property.year_built && (
              <DetailRow label="Year Built" value={String(property.year_built)} />
            )}
            {property.square_feet != null && (
              <DetailRow label="Square Feet" value={property.square_feet.toLocaleString()} />
            )}
            {property.bedrooms != null && (
              <DetailRow label="Bedrooms" value={String(property.bedrooms)} />
            )}
            {property.bathrooms != null && (
              <DetailRow label="Bathrooms" value={String(property.bathrooms)} />
            )}
            {!property.year_built && property.square_feet == null && property.bedrooms == null && property.bathrooms == null && (
              <p className="text-sm text-muted-foreground">No additional details added.</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Financial
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {property.purchase_price != null ? (
              <DetailRow label="Purchase Price" value={formatCurrency(property.purchase_price)} />
            ) : (
              <p className="text-sm text-muted-foreground">No financial data added.</p>
            )}
            <Separator className="my-3" />
            <DetailRow label="Added" value={formatDate(property.created_at)} />
          </CardContent>
        </Card>
      </div>

      {editOpen && (
        <PropertyModal
          title="Edit Property"
          defaultValues={{
            address: property.address,
            property_type: property.property_type,
            year_built: property.year_built,
            square_feet: property.square_feet,
            bedrooms: property.bedrooms,
            bathrooms: property.bathrooms,
            purchase_price: property.purchase_price,
          }}
          onSubmit={handleEdit}
          onClose={() => setEditOpen(false)}
          isLoading={submitting}
          submitLabel="Save Changes"
        />
      )}
    </div>
  )
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  )
}
