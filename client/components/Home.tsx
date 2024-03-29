import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <>
      <div>
        <h1>Home page</h1>
        <ul>
          <li>
            <NavLink to={'/users'}>All Users</NavLink>
          </li>

          <li>
            {' '}
            <NavLink to={'/map'}>Map</NavLink>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Home
