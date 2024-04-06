import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Auth'
import { Link } from 'react-router-dom'

function SignInNav() {
  const { user, logout, loginWithRedirect } = useAuth0()

  const handleSignOut = () => {
    logout()
  }

  const handleSignIn = () => {
    loginWithRedirect()
  }

  return (
    <div className="sign-in-container">
      <IfAuthenticated>
        <div className="user-info">
          {user && (
            <>
              <img className="user-image" src={user.picture} alt="User" />
              <span className="user-greeting">
                <Link to={'/profile'}> Signed in as: {user?.given_name}</Link>
              </span>
            </>
          )}
          <button className="sign-in" onClick={handleSignOut}>
            Sign out
          </button>
        </div>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <button className="sign-in" onClick={handleSignIn}>
          Sign in
        </button>
      </IfNotAuthenticated>
    </div>
  )
}

export default SignInNav
