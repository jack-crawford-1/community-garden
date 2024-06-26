import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NewSite, Sites } from '../../../models/sitesModels'
import FetchReverseGeocodeData from '../../apis/reverseGeocodeData'
import { useCreateMutation } from '../../hooks/useSites'
import { useAuth0 } from '@auth0/auth0-react'
import UploadImages from './UploadImages'

function useQueryParams() {
  const { search } = useLocation()
  return new URLSearchParams(search)
}

function AddSite() {
  const initialFormState = {
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
    email: '',
    userName: '',
  }
  const [successMessage, setSuccessMessage] = useState('')
  const [form, setForm] = useState(initialFormState)
  const { user } = useAuth0()
  const searchParams = useQueryParams()
  const defaultLat = searchParams.get('lat')
  const defaultLng = searchParams.get('lng')

  useEffect(() => {
    const updateAddress = (lat: string, lng: string) => {
      FetchReverseGeocodeData(lat, lng)
        .then((data) => {
          const { house_number, road, suburb, city, country } = data.address
          const address = `${house_number} ${road}, ${suburb}, ${city}, ${country}`
          setForm((currentForm) => ({
            ...currentForm,
            address: address,
          }))
        })
        .catch((error) => {
          console.error('Error fetching address:', error)
        })
    }
    if (user) {
      setForm((currentForm) => ({
        ...currentForm,
        userId: user.sub || '',
        email: user.email || '',
        userName: user.name || '',
      }))
    }

    if (defaultLat && defaultLng) {
      const latlong = `${defaultLat},${defaultLng}`
      setForm((currentForm) => ({ ...currentForm, latlong }))
      updateAddress(defaultLat, defaultLng)
    }
  }, [user, defaultLat, defaultLng])

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
      userId: form.userId,
      isPublic: form.isPublic === 'true',
      hasWaterAccess: form.hasWaterAccess === 'true',
      isAvailable: form.isAvailable === 'true',
      hasShade: form.hasShade === 'true',
      soilType: form.soilType,
      size: parseInt(form.size, 10),
      accessibility: form.accessibility,
      email: form.email,
      userName: form.userName,
    }
    createMutation.mutate(newSiteData as Sites, {
      onSuccess: () => {
        console.log('New site added successfully')
        setSuccessMessage('New Site added')
        setForm(initialFormState)
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
            type="text"
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

          <UploadImages />

          <button type="submit">Add New Location</button>
        </form>
      </div>
      {successMessage && <p>{successMessage}</p>}
      <Link to={'/'}>Home</Link>
    </div>
  )
}

export default AddSite
