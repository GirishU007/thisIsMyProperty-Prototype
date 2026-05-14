import { z } from 'zod'

const currentYear = new Date().getFullYear()

function toOptionalInt(val: unknown): number | null {
  if (val === '' || val === null || val === undefined) return null
  const n = parseInt(String(val), 10)
  return isNaN(n) ? null : n
}

function toOptionalFloat(val: unknown): number | null {
  if (val === '' || val === null || val === undefined) return null
  const n = parseFloat(String(val))
  return isNaN(n) ? null : n
}

export const propertySchema = z.object({
  address: z.string().min(5, 'Address must be at least 5 characters'),
  property_type: z.enum(['residential', 'commercial', 'land'], {
    required_error: 'Select a property type',
  }),
  year_built: z.preprocess(
    toOptionalInt,
    z.number().int().min(1800, 'Year must be 1800 or later').max(currentYear, `Year cannot exceed ${currentYear}`).nullable()
  ),
  square_feet: z.preprocess(
    toOptionalInt,
    z.number().int().positive('Must be a positive number').nullable()
  ),
  bedrooms: z.preprocess(
    toOptionalInt,
    z.number().int().min(0).max(50).nullable()
  ),
  bathrooms: z.preprocess(
    toOptionalFloat,
    z.number().min(0).max(50).nullable()
  ),
  purchase_price: z.preprocess(
    toOptionalFloat,
    z.number().positive('Must be a positive number').nullable()
  ),
})

export type PropertyFormData = z.infer<typeof propertySchema>
