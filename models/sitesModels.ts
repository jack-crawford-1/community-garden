export interface Sites {
  id: number
  latlong: string
  address: string
  description: string
  councilId: number
  userId: string
  isPublic: boolean
  hasWaterAccess: boolean
  isAvailable: boolean
  hasShade: boolean
  soilType: string
  size: number
  accessibility: string
  email: string
  userName: string
}

export interface NewSite {
  latlong: string
  address: string
  description: string
  councilId: number
  userId: string
  isPublic: boolean
  hasWaterAccess: boolean
  isAvailable: boolean
  hasShade: boolean
  soilType: string
  size: number
  accessibility: string
  email: string
  userName: string
}
