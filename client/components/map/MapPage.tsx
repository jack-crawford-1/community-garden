import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import L, { polygon } from 'leaflet'

function MapPage() {
  const navigate = useNavigate()

  useEffect(() => {
    const map = L.map('map').setView([-41.28664, 174.77557], 15)

    const latlngs: L.LatLngExpression[] = [
      [-41.265575, 174.780329],
      [-41.265905, 174.779937],
      [-41.26571, 174.779892],
      [-41.265574, 174.780073],
    ]
    const polygon = L.polygon(latlngs, { color: 'blue' }).addTo(map)
      .bindPopup(`ID: 1 <br/>
      LatLong: 40.7128,-74.0060 <br/>
      Address: 12 Barnard St, Wadestown <br/>
      Description: Community garden in Wadestown <br/>
      Council ID: 1 <br/>
      User ID: 1 <br/>
      Public:Yes <br/>
      Water Access:Yes <br/>
      Available:Yes <br/>
      Shade:No <br/>
      Soil Type: Loamy <br/>
      Size: Medium <br/>
      Accessibility:Public transit`)
    // map.fitBounds(polygon.getBounds())

    const mtVicWellingtonSquare = [
      [-41.2964, 174.7943],
      [-41.2965, 174.7948],
      [-41.2976, 174.7942],
      [-41.2965, 174.7943],
    ]
    const square = L.polygon(mtVicWellingtonSquare, { color: 'red' }).addTo(map)
      .bindPopup(`
        latlong: '51.5074,-0.1278',<br/>
        address: '456 Park Ln, Mt Vic',<br/>
        description: 'Private garden space near Mt Vic Park',<br/>
        councilId: 1,<br/>
        userId: 2,<br/>
        isPublic: false,<br/>
        hasWaterAccess: true,<br/>
        isAvailable: true,<br/>
        hasShade: true,<br/>
        soilType: 'Sandy',<br/>
        size: 'Large',<br/>
        accessibility: 'Street parking',
      ,`)
    // map.fitBounds(square.getBounds())

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
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
      <div id="map" style={{ height: '700px' }}></div>
      <Link to={'/'}>Home</Link>
    </div>
  )
}

export default MapPage
