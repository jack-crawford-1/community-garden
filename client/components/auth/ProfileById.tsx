import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function ProfileById() {
  const { id } = useParams()
  const [userProfile, setUserProfile] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // Placeholder for fetching user profile from backend
        // Still need to change the URL to match actual API endpoint
        const response = await fetch(`/api/users/${id}`)
        if (!response.ok) throw new Error('Profile fetch failed')
        const data = await response.json()
        setUserProfile(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchUserProfile()
  }, [id]) //

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!userProfile) return <div>Profile not found.</div>

  return (
    <div>
      <h1>{userProfile.name}'s Profile</h1>
      <p>{userProfile.location}</p>
      <ul>
        <Link to={`/sites/${id}`}>
          <li>site</li>
        </Link>
      </ul>
    </div>
  )
}

export default ProfileById
