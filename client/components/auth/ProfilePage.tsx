import { useAuth0 } from '@auth0/auth0-react'

const ProfilePage = () => {
  const { user } = useAuth0()

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div className="profile-page-container">
      <div className="profile-page">
        <p>
          <span>Name: </span>
          {user.name}
        </p>
        <p>
          <span>Email: </span>
          {user.email}
        </p>
        <p>
          <span>Username: </span>
          {user.nickname}
        </p>
        <p>
          <span>Location: </span>
          {user.location}
        </p>
        <p>
          <span>Created at:</span> {user.created_at}
        </p>
        <p>
          <span>Updated at: </span>
          {user.updated_at}
        </p>
        <p>Sub: {user.sub}</p>
      </div>
    </div>
  )
}

export default ProfilePage
