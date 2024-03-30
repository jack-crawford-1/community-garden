import { useState } from 'react'
import { useCreateMutation } from '../../hooks/useSites'
import { useQueryClient } from 'react-query'
import { Link } from 'react-router-dom'
import { NewSite, Sites } from '../../../models/sitesModels'

function AddSite() {
  const [latlong, setLatlong] = useState('')
  const [address, setAddress] = useState('')
  const [description, setDescription] = useState('')
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const newSiteData: NewSite = {
      latlong: latlong,
      address: address,
      description: description,
    }
    createMutation.mutate(newSiteData)
    Promise<NewSite>
    setLatlong('')
    setAddress('')
    setDescription('')
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
          <button type="submit">Add New Location</button>
        </form>
      </div>
      <Link to={'/'}>Home</Link>
    </div>
  )
}

export default AddSite
