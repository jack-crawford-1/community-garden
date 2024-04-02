import { useState } from 'react'
import { User } from '../../../models/userModels'
import { useCreateMutation } from '../../hooks/useUsers'
import { useQueryClient } from 'react-query'
import { Link } from 'react-router-dom'

function AddUser() {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [location, setLocation] = useState('')
  const [createdAt, setCreatedAt] = useState('')
  const [updatedAt, setUpdatedAt] = useState('')
  const createMutation = useCreateMutation()

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value)
  }

  const handleCreatedAtChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCreatedAt(event.target.value)
  }

  const handleUpdatedAtChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setUpdatedAt(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log('New user added')
    event.preventDefault()
    const newUserData: User = {
      name: name,
      userName: username,
      email: email,
      password: password,
      location: location,
      createdAt: createdAt,
      updatedAt: updatedAt,
      id: 0,
    }
    createMutation.mutate(newUserData)
    setName('')
    setUsername('')
    setEmail('')
    setPassword('')
    setLocation('')
    setCreatedAt('')
    setUpdatedAt('')
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
          <label htmlFor="username">Email</label>
          <input
            value={email}
            onChange={handleEmailChange}
            type="text"
            id="email"
            name="email"
          />

          <label htmlFor="username">Password</label>
          <input
            value={password}
            onChange={handlePasswordChange}
            type="text"
            id="password"
            name="password"
          />
          <label htmlFor="location">Location</label>
          <input
            value={location}
            onChange={handleLocationChange}
            type="text"
            id="location"
            name="location"
          />
          <label htmlFor="username">Created at</label>
          <input
            value={createdAt}
            onChange={handleCreatedAtChange}
            type="text"
            id="createdAt"
            name="createdAt"
          />

          <label htmlFor="username">Updated At</label>
          <input
            value={updatedAt}
            onChange={handleUpdatedAtChange}
            type="text"
            id="updatedAt"
            name="updatedAt"
          />
          <button type="submit">Add User</button>
        </form>
      </div>
    </div>
  )
}

export default AddUser
