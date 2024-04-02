import { useQuery } from '@tanstack/react-query'
import { FetchReverseGeocodeData } from '../../apis/reverseGeocodeData'

export default function Addresses() {
  const lat = '-41.2238442479912'
  const lng = '174.82278328785492'

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

  return (
    <div>
      <h2>Address Details</h2>
      <ul>
        <li>Road: {road}</li>
        <li>Suburb: {suburb}</li>
        <li>City: {city}</li>
      </ul>
    </div>
  )
}
