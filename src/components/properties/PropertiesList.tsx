'use client'

import { useState } from 'react'
import { Plus, Building2 } from 'lucide-react'
import { toast } from 'sonner'
import { PageHeader } from '@/components/shared/PageHeader'
import { EmptyState } from '@/components/shared/EmptyState'
import { Button } from '@/components/ui/button'
import { PropertyCard } from './PropertyCard'
import { PropertyModal } from './PropertyModal'
import { createProperty, updateProperty, deleteProperty } from '@/services/properties'
import type { Property } from '@/types'
import type { PropertyFormData } from '@/lib/validations/property'

interface PropertiesListProps {
  initialProperties: Property[]
}

export function PropertiesList({ initialProperties }: PropertiesListProps) {
  const [properties, setProperties] = useState<Property[]>(initialProperties)
  const [addOpen, setAddOpen] = useState(false)
  const [editTarget, setEditTarget] = useState<Property | null>(null)
  const [submitting, setSubmitting] = useState(false)

  const handleAdd = async (data: PropertyFormData) => {
    setSubmitting(true)
    try {
      const created = await createProperty(data)
      setProperties(prev => [created, ...prev])
      setAddOpen(false)
      toast.success('Property added')
    } catch {
      toast.error('Failed to add property')
    } finally {
      setSubmitting(false)
    }
  }

  const handleEdit = async (data: PropertyFormData) => {
    if (!editTarget) return
    setSubmitting(true)
    try {
      const updated = await updateProperty(editTarget.id, data)
      setProperties(prev => prev.map(p => (p.id === updated.id ? updated : p)))
      setEditTarget(null)
      toast.success('Property updated')
    } catch {
      toast.error('Failed to update property')
    } finally {
      setSubmitting(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this property? This cannot be undone.')) return
    try {
      await deleteProperty(id)
      setProperties(prev => prev.filter(p => p.id !== id))
      toast.success('Property deleted')
    } catch {
      toast.error('Failed to delete property')
    }
  }

  return (
    <div>
      <PageHeader
        title="Properties"
        description="Manage your property portfolio"
        action={
          <Button size="sm" className="gap-2" onClick={() => setAddOpen(true)}>
            <Plus className="h-4 w-4" />
            Add Property
          </Button>
        }
      />

      {properties.length === 0 ? (
        <EmptyState
          icon={Building2}
          title="No properties yet"
          description="Add your first property to start tracking your portfolio. You can add residential, commercial, or land properties."
          action={
            <Button className="gap-2" onClick={() => setAddOpen(true)}>
              <Plus className="h-4 w-4" />
              Add Your First Property
            </Button>
          }
          className="mt-4"
        />
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map(property => (
            <PropertyCard
              key={property.id}
              property={property}
              onEdit={setEditTarget}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}

      {addOpen && (
        <PropertyModal
          title="Add Property"
          onSubmit={handleAdd}
          onClose={() => setAddOpen(false)}
          isLoading={submitting}
          submitLabel="Add Property"
        />
      )}

      {editTarget && (
        <PropertyModal
          title="Edit Property"
          defaultValues={{
            address: editTarget.address,
            property_type: editTarget.property_type,
            year_built: editTarget.year_built,
            square_feet: editTarget.square_feet,
            bedrooms: editTarget.bedrooms,
            bathrooms: editTarget.bathrooms,
            purchase_price: editTarget.purchase_price,
          }}
          onSubmit={handleEdit}
          onClose={() => setEditTarget(null)}
          isLoading={submitting}
          submitLabel="Save Changes"
        />
      )}
    </div>
  )
}
