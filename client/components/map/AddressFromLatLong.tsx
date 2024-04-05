import { useQuery } from '@tanstack/react-query'
import { FetchReverseGeocodeData } from '../../apis/reverseGeocodeData'
import { useState } from 'react'

export default function Addresses() {
  const [lat, setLat] = useState('')
  const [lng, setLng] = useState('')

  const {
    isLoading,
    isError,
    data: address,
    error,
  } = useQuery({
    queryKey: ['reverseGeocode', { lat, lng }],
    queryFn: () => FetchReverseGeocodeData(lat, lng),
    enabled: lat !== '' && lng !== '',
  })

  if (isLoading) {
    return <p>Loading address details...</p>
  }

  if (isError) {
    return <p>Error: {error.message}</p>
  }

  const { house_number, road, suburb, city, country } = address?.address || {}

  const handleLatChange = (e) => setLat(e.target.value)
  const handleLngChange = (e) => setLng(e.target.value)

  return (
    <div className="address-container">
      <h2>Nominatim Reverse Geocoding API</h2>
      <p>find street address from Latitude and Longitude</p>
      <input
        className="address-input"
        value={lat}
        onChange={handleLatChange}
        placeholder="Latitude"
      />
      <input
        className="address-input"
        value={lng}
        onChange={handleLngChange}
        placeholder="Longitude"
      />
      <p>Street Address:</p>
      <p className="address-result">
        {house_number} {road}, {suburb}, {city}, {country}
      </p>
    </div>
  )
}
