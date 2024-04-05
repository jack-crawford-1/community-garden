import { useSites } from '../../hooks/useSites'
import SiteImage from './SiteImage'
import SiteDetailsCard from './SiteDetailsCard'

function Site() {
  const { isLoading, isError, error } = useSites()

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {error.message}</div>

  return (
    <>
      <div className="single-site-page">
        <div className="image-container">
          <SiteImage />
        </div>
        <div className="site-details-card">
          <SiteDetailsCard />
        </div>
      </div>
    </>
  )
}

export default Site
