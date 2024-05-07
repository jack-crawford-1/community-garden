import L from 'leaflet'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function MapPage() {
  const navigate = useNavigate()

  useEffect(() => {
    const map = L.map('map').setView([-41.279519, 174.780011], 12)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map)

    const baseLayers = {
      OpenStreetMap: L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          maxZoom: 20,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        },
      ),
    }

    L.control.layers(baseLayers).addTo(map)

    const popup = L.popup()

    function onMapClick(e: { latlng: L.LatLngExpression }) {
      const latlng = e.latlng as L.LatLng
      const content = `<button id="go-to-page">Add Garden</button>`

      popup.setLatLng(latlng).setContent(content).openOn(map)

      setTimeout(() => {
        const goToPageButton = document.getElementById('go-to-page')

        if (goToPageButton) {
          goToPageButton.addEventListener('click', () => {
            navigate(`/addsite/?lat=${latlng.lat}&lng=${latlng.lng}`)
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
    <>
      <div>
        <div id="map" style={{ height: '100vh' }}></div>
      </div>
    </>
  )
}

export default MapPage
