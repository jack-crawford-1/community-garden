import { Link } from 'react-router-dom'
import { useSites } from '../../hooks/useSites'
import './sitesLanding.css'

function SitesLanding() {
  const { data, isLoading, isError, error } = useSites()

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {error.message}</div>

  return (
    <div className="sites-outer-container">
      <div className="sites-heading">
        <h1>Sites Landing</h1>
      </div>

      <div className="sites-inner-container">
        <div className="sites-inner-content">
          {data &&
            data.map((site) => (
              <ul key={site.id}>
                <li>{site.address}</li>
                <li>{site.description}</li>
                <Link to={`/sites/${site.id}`}>See Site details</Link>
              </ul>
            ))}
        </div>
      </div>
    </div>
  )
}

export default SitesLanding
