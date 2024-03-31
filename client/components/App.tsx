import { NavLink, Outlet } from 'react-router-dom'
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
              Sites List
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to={'/users'}>
              Users List
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to={'/councils'}>
              Councils
            </NavLink>
          </li>
          {/* Add additional links here if needed */}
        </ul>
      </div>
      <Outlet />
    </div>
  )
}

export default App
