import { NavLink, Outlet } from 'react-router-dom'
import Nav from './auth/Nav'
function App() {
  return (
    <div className="app">
      <div className="title-and-nav">
        <NavLink className="nav-link home" to={'/'}>
          <h1>Community Gardens Hub</h1>
        </NavLink>
        <ul className="navigation">
          <li>
            <NavLink className="nav-link" to={'/map'}>
              Map
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to={'/sites'}>
              Sites
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to={'/users'}>
              Users
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to={'/councils'}>
              Councils
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to={'/adduser'}>
              Register
            </NavLink>
          </li>
          <Nav />
        </ul>
      </div>

      <Outlet />
    </div>
  )
}

export default App
