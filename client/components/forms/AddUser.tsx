import { useState } from 'react'
import { User } from '../../../models/userModels'
import { useCreateMutation } from '../../hooks/useUsers'
import { useQueryClient } from 'react-query'
import { Link } from 'react-router-dom'

function AddUser() {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [location, setLocation] = useState('')
  const createMutation = useCreateMutation()

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log('New user added')
    event.preventDefault()
    const newUserData: User = {
      name: name,
      userName: username,
      location: location,
      id: 0,
    }
    createMutation.mutate(newUserData)
    setName('')
    setUsername('')
    setLocation('')
  }

  return (
    <div>
      <div className="add-user-container">
        <h2>Add User</h2>
        <form onSubmit={handleSubmit} autoComplete="off">
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={handleNameChange}
            type="text"
            id="name"
            name="name"
          />
          <label htmlFor="username">Username</label>
          <input
            value={username}
            onChange={handleUsernameChange}
            type="text"
            id="username"
            name="username"
          />
          <label htmlFor="location">Location</label>
          <input
            value={location}
            onChange={handleLocationChange}
            type="text"
            id="location"
            name="location"
          />
          <button type="submit">Add User</button>
        </form>
      </div>
      <Link to={'/'}>Home</Link>
    </div>
  )
}

export default AddUser
