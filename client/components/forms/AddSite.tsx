import { useState } from 'react'
import { useCreateMutation } from '../../hooks/useSites'
import { useQueryClient } from 'react-query'
import { Link } from 'react-router-dom'
import { NewSite, Sites } from '../../../models/sitesModels'

function AddSite() {
  const [latlong, setLatlong] = useState('')
  const [address, setAddress] = useState('')
  const [description, setDescription] = useState('')
  const [councilId, setCouncilId] = useState('')
  const [userId, setUserId] = useState('')
  const [isPublic, setIsPublic] = useState('')
  const [hasWaterAccess, setHasWaterAccess] = useState('')
  const [isAvailable, setIsAvailable] = useState('')
  const [hasShade, setHasShade] = useState('')
  const [soilType, setSoilType] = useState('')
  const [size, setSize] = useState('')
  const [accessibility, setAccessibility] = useState('')
  console.log('New site added')

  const createMutation = useCreateMutation()

  const handleLatlongChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLatlong(event.target.value)
  }

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value)
  }

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setDescription(event.target.value)
  }

  const handleIsCouncilIdChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCouncilId(event.target.value)
  }

  const handleUserIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(event.target.value)
  }

  const handleIsPublicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsPublic(event.target.value)
  }

  const handleHasWaterAccessChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setHasWaterAccess(event.target.value)
  }

  const handleIsAvailableChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setIsAvailable(event.target.value)
  }

  const handleHasShadeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHasShade(event.target.value)
  }

  const handleSoilTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSoilType(event.target.value)
  }

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSize(event.target.value)
  }

  const handleAccessibilityChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setAccessibility(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const newSiteData: NewSite = {
      latlong: latlong,
      address: address,
      description: description,
      councilId: parseInt(councilId),
      userId: 0,
      isPublic: isPublic === 'true',
      hasWaterAccess: hasWaterAccess === 'true',
      isAvailable: isAvailable === 'true',
      hasShade: Boolean(hasShade),
      soilType: soilType,
      size: parseInt(size),
      accessibility: accessibility,
    }
    createMutation.mutate(newSiteData)
    Promise<NewSite>
    setLatlong('')
    setAddress('')
    setDescription('')
    setCouncilId('')
    setUserId('')
    setIsPublic('')
    setHasWaterAccess('')
    setIsAvailable('')
    setHasShade('')
    setSoilType('')
    setSize('')
    setAccessibility('')
  }

  return (
    <div>
      <div className="add-user-container">
        <h2>Add Location</h2>
        <form onSubmit={handleSubmit} autoComplete="off">
          <label htmlFor="latlong">LatLong</label>
          <input
            value={latlong}
            onChange={handleLatlongChange}
            type="text"
            id="latlong"
            name="latlong"
          />
          <label htmlFor="address">Address</label>
          <input
            value={address}
            onChange={handleAddressChange}
            type="text"
            id="address"
            name="address"
          />
          <label htmlFor="description">Description</label>
          <input
            value={description}
            onChange={handleDescriptionChange}
            type="text"
            id="description"
            name="description"
          />
          <label htmlFor="councilId">Council ID</label>
          <input
            value={councilId}
            onChange={handleIsCouncilIdChange}
            type="text"
            id="councilId"
            name="councilId"
          />

          <label htmlFor="userId">User ID</label>
          <input
            value={councilId}
            onChange={handleUserIdChange}
            type="text"
            id="userID"
            name="userID"
          />

          <label htmlFor="IsPubluc">Is Public</label>
          <input
            value={isPublic}
            onChange={handleIsPublicChange}
            type="text"
            id="isPublic"
            name="isPublic"
          />
          <label htmlFor="hasWaterAccess">Has Water Access</label>
          <input
            value={hasWaterAccess}
            onChange={handleHasWaterAccessChange}
            type="text"
            id="hasWaterAccess"
            name="hasWaterAccess"
          />
          <label htmlFor="isAvailable">Is Available</label>
          <input
            value={isAvailable}
            onChange={handleIsAvailableChange}
            type="text"
            id="isAvailable"
            name="isAvailable"
          />
          <label htmlFor="hasShade">Has Shade</label>
          <input
            value={hasShade}
            onChange={handleHasShadeChange}
            type="text"
            id="hasShade"
            name="hasShade"
          />
          <label htmlFor="soilType">Soil Type</label>
          <input
            value={soilType}
            onChange={handleSoilTypeChange}
            type="text"
            id="soilType"
            name="soilType"
          />
          <label htmlFor="size">Size</label>
          <input
            value={size}
            onChange={handleSizeChange}
            type="text"
            id="size"
            name="size"
          />
          <label htmlFor="accessibility">Accessibility</label>
          <input
            value={accessibility}
            onChange={handleAccessibilityChange}
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
