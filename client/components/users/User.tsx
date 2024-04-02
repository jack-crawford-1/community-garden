import { useParams, Link } from 'react-router-dom'
import { useQueryClient } from '@tanstack/react-query'
import { useUsers } from '../../hooks/useUsers'

function User() {
  const { id } = useParams<{ id: string }>()
  const queryClient = useQueryClient()

  const { data: users, isLoading, isError, error } = useUsers()

  const user = users?.find((user) => user.id.toString() === id)

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {error.message}</div>
  if (!user) return <div>Site not found</div>

  return (
    <div className="site-card">
      <h2>Show One User</h2>
      <div className="site-details">
        <div className="site-detail">
          <strong>ID:</strong> <Link to={`/sites/${user.id}`}>{user.id}</Link>
        </div>
        <div className="site-detail">
          <strong>Name:</strong> {user.name}
        </div>
        <div className="site-detail">
          <strong>Username:</strong> {user.userName}
        </div>
        <div className="site-detail">
          <strong>Email:</strong> {user.email}
        </div>

        <div className="site-detail">
          <strong>Password:</strong> {user.password}
        </div>

        <div className="site-detail">
          <strong>Location:</strong> {user.location}
        </div>
        <div className="site-detail">
          <strong>Created at:</strong> {user.createdAt}
        </div>
        <div className="site-detail">
          <strong>Updated at:</strong> {user.updatedAt}
        </div>
      </div>
    </div>
  )
}

export default User
