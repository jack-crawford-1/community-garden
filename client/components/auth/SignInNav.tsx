import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Auth'

function SignInNav() {
  const { user, logout, loginWithRedirect } = useAuth0()

  const handleSignOut = () => {
    logout()
  }

  const handleSignIn = () => {
    loginWithRedirect()
  }

  return (
    <>
      <div className="sign-in-container">
        <IfAuthenticated>
          <button className="sign-in" onClick={handleSignOut}>
            Sign out
          </button>
          {user && (
            <p className="user-greeting">Signed in as: {user?.given_name}</p>
          )}
        </IfAuthenticated>
        <IfNotAuthenticated>
          <button className="sign-in" onClick={handleSignIn}>
            Sign in
          </button>
        </IfNotAuthenticated>
      </div>
    </>
  )
}

export default SignInNav
