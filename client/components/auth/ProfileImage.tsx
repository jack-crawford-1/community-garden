import { useAuth0 } from '@auth0/auth0-react'

function ProfileImage() {
  const { user } = useAuth0()
  console.log(user?.picture)

  if (!user) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <div className="profile-image-container">
        <img src={user.picture} alt="User" />
      </div>
    </div>
  )
}

export default ProfileImage
