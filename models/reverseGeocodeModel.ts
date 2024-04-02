interface ReverseGeocodeData {
  address: {
    house_number?: string
    road?: string
    suburb?: string
    city: string
    country: string
    country_code: string
  }
}

export default ReverseGeocodeData
