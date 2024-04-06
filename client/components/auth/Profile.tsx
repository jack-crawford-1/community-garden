import { useAuth0 } from '@auth0/auth0-react'
import ProfileImage from './ProfileImage'
import ProfilePage from './ProfilePage'

function Profile() {
  const { user } = useAuth0()
  return (
    <div className="profile">
      <div className="profile-title">
        <h2>User Profile for {user?.given_name}</h2>
      </div>
      <div className="profile-main">
        <div className="profile-details">
          <ProfilePage />
        </div>
        <div className="profile-image">
          <ProfileImage />
        </div>
      </div>
    </div>
  )
}
export default Profile
