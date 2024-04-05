import { Link, useParams } from 'react-router-dom'
import { useUsers } from '../../hooks/useUsers'

function UserInfo() {
  const { id } = useParams<{ id: string }>()

  const { data: users, isLoading, isError, error } = useUsers()

  const user = users?.find((user) => user.id.toString() === id)

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {error.message}</div>
  if (!user) return <div>Site not found</div>

  return (
    <div className="user-card-container">
      <div className="user-detail">
        <span>ID:</span>
        {user.id}
      </div>
      <div className="user-detail">
        <span>Name:</span> {user.name}
      </div>
      <div className="user-detail">
        <span>Username:</span> {user.userName}
      </div>
      <div className="user-detail">
        <span>Email:</span> {user.email}
      </div>

      <div className="user-detail">
        <span>Password:</span> {user.password}
      </div>

      <div className="user-detail">
        <span>Location:</span> {user.location}
      </div>
      <div className="user-detail">
        <span>Created at:</span> {user.createdAt}
      </div>
      <div className="user-detail">
        <span>Updated at:</span> {user.updatedAt}
      </div>
    </div>
  )
}

export default UserInfo
