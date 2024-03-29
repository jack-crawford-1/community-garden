import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import L, { polygon } from 'leaflet'

function MapPage() {
  const navigate = useNavigate()

  useEffect(() => {
    const map = L.map('map').setView([-41.28664, 174.77557], 13)

    const latlngs = [
      [-41.265575, 174.780329],
      [-41.265905, 174.779937],
      [-41.26571, 174.779892],
      [-41.265574, 174.780073],
    ]

    // Example area for potential garden site on map using polygon
    // Create a polygon on the map to represent the potential garden site
    const polygon = L.polygon(latlngs, { color: 'blue' })
      .addTo(map)
      .bindPopup('Potential Site: Barnard St, Wadestown, Wellington 6012')
    map.fitBounds(polygon.getBounds())

    // Add a tile layer to the map using OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map)

    // Create a popup that appears when the map is clicked
    const popup = L.popup()

    // Handle the map click event
    function onMapClick(e: { latlng: L.LatLngExpression }) {
      // Create the content for the popup
      const content = `<div>You clicked ${e.latlng.toString()}</div><button id="go-to-page">Add Garden Location</button>`

      // Set the popup's position and content, and open it on the map
      popup.setLatLng(e.latlng).setContent(content).openOn(map)

      // Add a click event listener to the "Add Garden Location" button in the popup
      setTimeout(() => {
        const goToPageButton = document.getElementById('go-to-page')
        if (goToPageButton) {
          goToPageButton.addEventListener('click', () => {
            navigate('/Location')
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
          navigate('/Location')
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
