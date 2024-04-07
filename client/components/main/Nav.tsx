import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <>
      <div className="nav-container">
        <ul>
          <li>
            <NavLink className="nav-link" to={'/'}>
              Home
            </NavLink>
          </li>

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
          <li>
            <NavLink className="nav-link" to={'/news'}>
              News
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Nav
