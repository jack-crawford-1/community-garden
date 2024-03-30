export interface Sites {
  id: number
  latlong: string
  address: string
  description: string
  councilId: number
  userId: number
  isPublic: boolean
  hasWaterAccess: boolean
  isAvailable: boolean
  hasShade: boolean
  soilType: string
  size: number
  accessibility: string
}

export interface NewSite {
  latlong: string
  address: string
  description: string
  councilId: number
  userId: number
  isPublic: boolean
  hasWaterAccess: boolean
  isAvailable: boolean
  hasShade: boolean
  soilType: string
  size: number
  accessibility: string
}
