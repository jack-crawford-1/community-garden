import { useParams } from 'react-router-dom'
import { useUsers } from '../../hooks/useUsers'
import UserInfo from './UserInfo'
import UserImage from './UserImage'

function User() {
  const { id } = useParams<{ id: string }>()

  const { data: users, isLoading, isError, error } = useUsers()

  const user = users?.find((user) => user.id.toString() === id)

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {error.message}</div>
  if (!user) return <div>Site not found</div>

  return (
    <div className="single-user-page">
      <div className="user-title">
        <h2>User Profile</h2>
      </div>
      <div className="user-profile">
        <UserInfo />
        <UserImage />
      </div>
    </div>
  )
}

export default User
