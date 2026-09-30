// Placeholder house photos until properties support uploaded photos.
const HOUSE_IMAGES = [
  '/images/houses/house-1.jpg',
  '/images/houses/house-2.jpg',
  '/images/houses/house-3.jpg',
  '/images/houses/house-4.jpg',
  '/images/houses/house-5.jpg',
]

/** Picks a stable placeholder photo for a property based on its id. */
export function getPropertyImage(propertyId: string): string {
  let hash = 0
  for (let i = 0; i < propertyId.length; i++) {
    hash = (hash * 31 + propertyId.charCodeAt(i)) >>> 0
  }
  return HOUSE_IMAGES[hash % HOUSE_IMAGES.length]
}
