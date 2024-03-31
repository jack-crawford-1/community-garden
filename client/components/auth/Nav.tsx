import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Auth'

function Nav() {
  const { user, logout, loginWithRedirect } = useAuth0()

  const handleSignOut = () => {
    logout()
  }

  const handleSignIn = () => {
    loginWithRedirect()
  }

  return (
    <>
      <div>
        <IfAuthenticated>
          <button className="sign-in" onClick={handleSignOut}>
            Sign out
          </button>
          {user && <p>Signed in as: {user?.given_name}</p>}
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

export default Nav
