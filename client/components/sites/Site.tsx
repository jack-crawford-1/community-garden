import { useParams, Link } from 'react-router-dom'
import { useSites } from '../../hooks/useSites'
import { useQueryClient } from '@tanstack/react-query'

function Site() {
  const { id } = useParams<{ id: string }>()
  const queryClient = useQueryClient()

  const { data: sites, isLoading, isError, error } = useSites()

  const site = sites?.find((site) => site.id.toString() === id)

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {error.message}</div>
  if (!site) return <div>Site not found</div>

  return (
    <div className="site-card">
      <h2>Show One Site</h2>
      <div className="site-details">
        <div className="site-detail">
          <strong>ID:</strong> <Link to={`/sites/${site.id}`}>{site.id}</Link>
        </div>
        <div className="site-detail">
          <strong>LatLong:</strong> {site.latlong}
        </div>
        <div className="site-detail">
          <strong>Address:</strong> {site.address}
        </div>
        <div className="site-detail">
          <strong>Description:</strong> {site.description}
        </div>

        <div className="site-detail">
          <strong>Council ID:</strong>{' '}
          <Link to={`/councils/${site.councilId}`}>{site.councilId}</Link>
        </div>

        <div className="site-detail">
          <strong>User ID:</strong>
          <Link to={`/users/${site.userId}`}>{site.userId}</Link>
        </div>

        <div className="site-detail">
          <strong>Public:</strong> {site.isPublic ? 'Yes' : 'No'}
        </div>
        <div className="site-detail">
          <strong>Water Access:</strong> {site.hasWaterAccess ? 'Yes' : 'No'}
        </div>
        <div className="site-detail">
          <strong>Available:</strong> {site.isAvailable ? 'Yes' : 'No'}
        </div>
        <div className="site-detail">
          <strong>Shade:</strong> {site.hasShade ? 'Yes' : 'No'}
        </div>
        <div className="site-detail">
          <strong>Soil Type:</strong> {site.soilType}
        </div>
        <div className="site-detail">
          <strong>Size:</strong> {site.size}
        </div>
        <div className="site-detail">
          <strong>Accessibility:</strong> {site.accessibility}
        </div>
      </div>
    </div>
  )
}

export default Site
