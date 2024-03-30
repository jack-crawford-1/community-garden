import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import L, { polygon } from 'leaflet'

function MapPage() {
  const navigate = useNavigate()

  useEffect(() => {
    const map = L.map('map').setView([-41.28664, 174.77557], 13)

    const latlngs: L.LatLngExpression[] = [
      [-41.265575, 174.780329],
      [-41.265905, 174.779937],
      [-41.26571, 174.779892],
      [-41.265574, 174.780073],
    ]
    const polygon = L.polygon(latlngs, { color: 'blue' })
      .addTo(map)
      .bindPopup('Potential Site: Barnard St, Wadestown, Wellington 6012')
    map.fitBounds(polygon.getBounds())

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map)

    const popup = L.popup()

    function onMapClick(e: { latlng: L.LatLngExpression }) {
      const content = `<div>You clicked ${e.latlng.toString()}</div><button id="go-to-page">Add Garden Location</button>`

      popup.setLatLng(e.latlng).setContent(content).openOn(map)

      setTimeout(() => {
        const goToPageButton = document.getElementById('go-to-page')
        if (goToPageButton) {
          goToPageButton.addEventListener('click', () => {
            navigate('/addsite/')
          })
        }
      }, 0)
    }

    map.on('click', onMapClick)

    return () => {
      map.off('click', onMapClick)
      const goToPageButton = document.getElementById('go-to-page')
      if (goToPageButton) {
        goToPageButton.removeEventListener('click', () => {
          navigate('/addsite')
        })
      }
    }
  }, [navigate])

  return (
    <div>
      <div id="map" style={{ height: '600px' }}></div>
      <Link to={'/'}>Home</Link>
    </div>
  )
}

export default MapPage
