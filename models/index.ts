export interface Coordinates {
  latitude: string
  longitude: string
}

export interface Street {
  number: number
  name: string
}

export interface Location {
  street: Street
  city: string
  state: string
  postcode: string
  coordinates: Coordinates
}

export interface Deal {
  id: string
  location: Location
  name: string
}

export interface Document {
  id: number
  fileName: string
  insertedAt: Date
  type?: string
}

export interface Placement {
  id: number
  lender: string
  description?: string | null
  termSheetCounter: number
}
