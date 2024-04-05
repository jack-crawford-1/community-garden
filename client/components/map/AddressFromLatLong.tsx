import { useQuery } from '@tanstack/react-query'
import { FetchReverseGeocodeData } from '../../apis/reverseGeocodeData'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function useQueryParams() {
  return new URLSearchParams(useLocation().search)
}

export default function Addresses() {
  const queryParams = useQueryParams()
  const lat = queryParams.get('lat')
  const lng = queryParams.get('lng')
  const [address, setAddress] = useState('')

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['reverseGeocode', { lat, lng }],
    queryFn: () => FetchReverseGeocodeData(lat ?? '', lng ?? ''),
    enabled: !!lat && !!lng,
  })

  useEffect(() => {
    if (data?.address) {
      const fullAddress = `${data.address.house_number} ${data.address.road}, ${data.address.suburb}, ${data.address.city}, ${data.address.country}`
      setAddress(fullAddress)
    } else {
      setAddress('')
    }
  }, [data])
  if (isLoading) {
    return <p>Loading address details...</p>
  }

  if (isError) {
    return <p>Error: {error.message}</p>
  }

  const { house_number, road, suburb, city, country } =
    (
      address as {
        address?: {
          house_number?: string
          road?: string
          suburb?: string
          city?: string
          country?: string
        }
      }
    )?.address || {}

  return (
    <div className="address-container">
      <h2>Nominatim Reverse Geocoding API</h2>
      <p>find street address from Latitude and Longitude</p>
      <input className="address-input" value={lat} placeholder="Latitude" />
      <input className="address-input" value={lng} placeholder="Longitude" />
      <p>Street Address:</p>
      <p className="address-result">
        {house_number} {road}, {suburb}, {city}, {country}
      </p>
    </div>
  )
}
