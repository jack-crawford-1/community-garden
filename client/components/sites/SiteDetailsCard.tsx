import { useParams, Link } from 'react-router-dom'
import { useSites } from '../../hooks/useSites'

function SiteDetailsCard() {
  const { id } = useParams<{ id: string }>()
  const { data: sites, isLoading, isError, error } = useSites()
  const site = sites?.find((site) => site.id.toString() === id)

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {error.message}</div>
  if (!site) return <div>Site details card not found</div>

  return (
    <>
      <div className="site-card-container">
        <div className="site-card-details">
          <span>ID:</span>
          {site.id}
        </div>
        <div className="site-card-details">
          <span>LatLong:</span> {site.latlong}
        </div>
        <div className="site-card-details">
          <span>Address:</span> {site.address}
        </div>
        <div className="site-card-details">
          <span>Description:</span> {site.description}
        </div>

        <div className="site-card-details">
          <span>Council ID:</span>{' '}
          <Link to={`/councils/${site.councilId}`}>{site.councilId}</Link>
        </div>

        <div className="site-card-details">
          <span>Added By User:</span>
          {site.userName}
        </div>

        <div className="site-card-details">
          <span>Public:</span> {site.isPublic ? 'Yes' : 'No'}
        </div>
        <div className="site-card-details">
          <span>Water Access:</span> {site.hasWaterAccess ? 'Yes' : 'No'}
        </div>
        <div className="site-card-details">
          <span>Available:</span> {site.isAvailable ? 'Yes' : 'No'}
        </div>
        <div className="site-card-details">
          <span>Shade:</span> {site.hasShade ? 'Yes' : 'No'}
        </div>
        <div className="site-card-details">
          <span>Soil Type:</span> {site.soilType}
        </div>
        <div className="site-card-details">
          <span>Size:</span> {site.size}
        </div>
        <div className="site-card-details">
          <span>Accessibility:</span> {site.accessibility}
        </div>
      </div>
    </>
  )
}

export default SiteDetailsCard
