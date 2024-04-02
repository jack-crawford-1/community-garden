import { useQuery } from '@tanstack/react-query'
import { FetchReverseGeocodeData } from '../../apis/reverseGeocodeData'
import { useState } from 'react'

export default function Addresses() {
  const [lat, setLat] = useState('1')
  const [lng, setLng] = useState('1')

  const {
    isLoading,
    isError,
    data: address,
    error,
  } = useQuery({
    queryKey: ['reverseGeocode', { lat, lng }],
    queryFn: () => FetchReverseGeocodeData(lat, lng),
  })

  if (isLoading) {
    return <p>Loading address details...</p>
  }

  if (isError) {
    return <p>Error: {error.message}</p>
  }

  const { road, suburb, city } = address.address || {}

  const handleLatChange = (e) => setLat(e.target.value)
  const handleLngChange = (e) => setLng(e.target.value)

  return (
    <div>
      <h2>Address Details - Nominatim Reverse Geocoding API</h2>
      <input value={lat} onChange={handleLatChange} placeholder="Latitude" />
      <input value={lng} onChange={handleLngChange} placeholder="Longitude" />
      <ul>
        <li>Road: {road}</li>
        <li>Suburb: {suburb}</li>
        <li>City: {city}</li>
      </ul>
    </div>
  )
}
