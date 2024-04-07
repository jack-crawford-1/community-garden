export interface A {
  id: string
  type: AType
  name: string
  url: string
  date: Date
  description: string
  tags: HandTag[]
  handTags: HandTag[]
  owner: AcceptedByProfilename
  held: boolean
  publisherName: string
  publisherUrlWords: string
  accepted: Date
  lastScanned: Date
  actions: any[]
  headline: string
  webUrl: string
  author: string
  categories: string[]
  taggingStatus: TaggingStatus
  taggingsToShow: HandTag[]
  acceptedFromFeedName: string
  hangTags: HandTag[]
  acceptedByProfilename: AcceptedByProfilename
  label: string
  geocode?: Geocode
  featureName?: string
  latLong?: LatLong
  imageUrl?: string
  lastChanged?: Date
}

export enum AcceptedByProfilename {
  Feedreader = 'feedreader',
  Tonytw1 = 'tonytw1',
}

export interface Geocode {
  address: string
  latLong: LatLong
  osmId: OsmID
  osmPlaceId: string
  displayName: string
  valid: boolean
}

export interface LatLong {
  latitude: number
  longitude: number
}

export interface OsmID {
  id: number
  type: OsmIDType
}

export enum OsmIDType {
  Node = 'NODE',
  Way = 'WAY',
}

export interface HandTag {
  id: string
  name: string
  parent: Parent
  featured: boolean
  geocode: Geocode | null
  description: Description | null
  bsonid: string
  mainImage: MainImage | null
  secondaryImage: null | string
  displayName: string
}

export enum Description {
  Airport = 'Airport',
  Empty = '',
  LowerHutt = 'Lower Hutt',
  TagDescription = '$tag.description',
}

export enum MainImage {
  BusJpg = 'bus.jpg',
  CAR3Jpg = 'CAR3.jpg',
  IMG7326Jpg = 'IMG_7326.jpg',
  Tfair2Jpg = 'tfair2.jpg',
}

export interface Parent {
  empty: boolean
  defined: boolean
}

export enum TaggingStatus {
  AutomaticallyTaggedAs = 'Automatically tagged as: ',
  TaggedAs = 'Tagged as: ',
}

export enum AType {
  N = 'N',
}
