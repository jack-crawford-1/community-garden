import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div className="home-container">
      <p>
        A web app to find and share potential locations and resources for
        community/ urban gardens.
      </p>
      <ul>
        <button className="nav-button">
          <li>
            <NavLink className="nav-link" to={'/users'}>
              All Users
            </NavLink>
          </li>
        </button>

        <button className="nav-button">
          <li>
            <NavLink className="nav-link" to={'/map'}>
              Map
            </NavLink>
          </li>
        </button>

        <button className="nav-button">
          <li>
            <NavLink className="nav-link" to={'/adduser'}>
              Add User
            </NavLink>
          </li>
        </button>
        <button className="nav-button">
          <li>
            <NavLink className="nav-link" to={'/sites'}>
              All Sites
            </NavLink>
          </li>
        </button>
      </ul>
    </div>
  )
}

export default Home
