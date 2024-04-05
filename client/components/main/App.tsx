import { Outlet } from 'react-router-dom'
import SignInNav from '../auth/SignInNav'
import Nav from './Nav'
function App() {
  return (
    <>
      <div className="app">
        <Nav />
        <SignInNav />
      </div>
      <Outlet />
    </>
  )
}

export default App
