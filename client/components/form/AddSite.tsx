import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NewSite, Sites } from '../../../models/sitesModels'
import { useSearchParams } from 'react-router-dom'
import FetchReverseGeocodeData from '../../apis/reverseGeocodeData'
import { useCreateMutation } from '../../hooks/useSites'

function useQueryParams() {
  const { search } = useLocation()
  return new URLSearchParams(search)
}

function AddSite() {
  const [form, setForm] = useState({
    latlong: '',
    address: ' ',
    description: '',
    councilId: '',
    userId: '',
    isPublic: '',
    hasWaterAccess: '',
    isAvailable: '',
    hasShade: '',
    soilType: '',
    size: '',
    accessibility: '',
  })

  const searchParams = useQueryParams()
  const defaultLat = searchParams.get('lat')
  const defaultLng = searchParams.get('lng')

  useEffect(() => {
    if (defaultLat && defaultLng) {
      const latlong = `${defaultLat},${defaultLng}`
      setForm((currentForm) => ({ ...currentForm, latlong }))
      FetchReverseGeocodeData(defaultLat, defaultLng)
        .then((data) => {
          const { house_number, road, suburb, city, country } = data.address
          const address = `${house_number} ${road}, ${suburb}, ${city}, ${country}`
          setForm((currentForm) => ({
            ...currentForm,
            address: data.address
              ? `${house_number} ${road}, ${suburb}, ${city}, ${country}`
              : '',
          }))
        })
        .catch((error) => {
          console.error('Error fetching address:', error)
        })
    }
  }, [defaultLat, defaultLng])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setForm((currentForm) => ({ ...currentForm, [name]: value }))
  }

  const createMutation = useCreateMutation()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const newSiteData: NewSite = {
      latlong: form.latlong,
      address: form.address,
      description: form.description,
      councilId: parseInt(form.councilId, 10),
      userId: parseInt(form.userId, 10),
      isPublic: form.isPublic === 'true',
      hasWaterAccess: form.hasWaterAccess === 'true',
      isAvailable: form.isAvailable === 'true',
      hasShade: form.hasShade === 'true',
      soilType: form.soilType,
      size: parseInt(form.size, 10),
      accessibility: form.accessibility,
    }
    createMutation.mutate(newSiteData as Sites, {
      onSuccess: () => {
        console.log('New site added successfully')
      },
      onError: (error) => {
        console.error('Error adding new site:', error)
      },
    })
  }

  return (
    <div>
      <div className="add-user-container">
        <h2>Add Location</h2>
        <form onSubmit={handleSubmit} autoComplete="off">
          <label htmlFor="latlong">LatLong</label>

          <input
            onChange={handleInputChange}
            type="text"
            id="latlong"
            name="latlong"
            value={`${defaultLat},${defaultLng}`}
            readOnly
          />

          <label htmlFor="address">Address</label>
          <input
            value={form.address}
            onChange={handleInputChange}
            type="text"
            id="address"
            name="address"
          />
          <label htmlFor="description">Description</label>
          <input
            value={form.description}
            onChange={handleInputChange}
            type="text"
            id="description"
            name="description"
          />
          <label htmlFor="councilId">Council ID</label>
          <input
            value={form.councilId}
            onChange={handleInputChange}
            type="number"
            id="councilId"
            name="councilId"
          />

          <label htmlFor="userId">User ID</label>
          <input
            value={form.userId}
            onChange={handleInputChange}
            type="number"
            id="userId"
            name="userId"
          />

          <label htmlFor="IsPubluc">Is Public</label>
          <input
            value={form.isPublic}
            onChange={handleInputChange}
            type="text"
            id="isPublic"
            name="isPublic"
          />
          <label htmlFor="hasWaterAccess">Has Water Access</label>
          <input
            value={form.hasWaterAccess}
            onChange={handleInputChange}
            type="text"
            id="hasWaterAccess"
            name="hasWaterAccess"
          />
          <label htmlFor="isAvailable">Is Available</label>
          <input
            value={form.isAvailable}
            onChange={handleInputChange}
            type="text"
            id="isAvailable"
            name="isAvailable"
          />
          <label htmlFor="hasShade">Has Shade</label>
          <input
            value={form.hasShade}
            onChange={handleInputChange}
            type="text"
            id="hasShade"
            name="hasShade"
          />
          <label htmlFor="soilType">Soil Type</label>
          <input
            value={form.soilType}
            onChange={handleInputChange}
            type="text"
            id="soilType"
            name="soilType"
          />
          <label htmlFor="size">Size</label>
          <input
            value={form.size}
            onChange={handleInputChange}
            type="text"
            id="size"
            name="size"
          />
          <label htmlFor="accessibility">Accessibility</label>
          <input
            value={form.accessibility}
            onChange={handleInputChange}
            type="text"
            id="accessibility"
            name="accessibility"
          />
          <button type="submit">Add New Location</button>
        </form>
      </div>
      <Link to={'/'}>Home</Link>
    </div>
  )
}

export default AddSite
