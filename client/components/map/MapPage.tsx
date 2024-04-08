import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function MapPage() {
  const navigate = useNavigate()

  useEffect(() => {
    const map = L.map('map').setView([-41.279519, 174.780011], 15)

    const ProposedGardenIcon = L.icon({
      iconUrl:
        'https://e7.pngegg.com/pngimages/371/179/png-clipart-gardening-computer-icons-landscaping-garden-design-written-miscellaneous-leaf.png',
      iconSize: [38, 38],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
    })

    // Hardcoding location markers - want to add automatically when a user adds a site

    const proposed1 = L.marker([-41.265706, 174.780039], {
      icon: ProposedGardenIcon,
    }).bindPopup('Wadestown site')

    proposed1.on('click', () => {
      navigate('/sites/1')
    })

    const proposed2 = L.marker([-41.266945, 174.911542], {
      icon: ProposedGardenIcon,
    }).bindPopup('Seasonal Public Garden')

    const proposed3 = L.marker([-41.251501, 174.912802], {
      icon: ProposedGardenIcon,
    }).bindPopup('Seasonal Public Garden')

    const proposed4 = L.marker([-41.238656, 174.787022], {
      icon: ProposedGardenIcon,
    }).bindPopup('Seasonal Public Garden')

    const compostIcon = L.icon({
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/6593/6593775.png',
      iconSize: [38, 38],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
    })

    const compost1 = L.marker([-41.306229, 174.779469], {
      icon: compostIcon,
    }).bindPopup('Compost Drop Off point')

    const compost2 = L.marker([-41.299014, 174.75938], {
      icon: compostIcon,
    }).bindPopup('Compost Drop Off point')

    const compost3 = L.marker([-41.239762, 174.782642], {
      icon: compostIcon,
    }).bindPopup('Compost Drop Off point')

    const compost4 = L.marker([-41.220487, 174.860075], {
      icon: compostIcon,
    }).bindPopup('Compost Drop Off point')

    const ExistingGardenIcon = L.icon({
      iconUrl:
        'https://seewhatgrows.org/wp-content/uploads/2017/10/icon-garden.png',
      iconSize: [38, 38],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
    })

    const existing1 = L.marker([-41.306229, 174.779469], {
      icon: ExistingGardenIcon,
    }).bindPopup('existing1')

    const existing2 = L.marker([-41.298846, 174.790866], {
      icon: ExistingGardenIcon,
    }).bindPopup('existing2')

    const existing3 = L.marker([-41.32403, 174.755631], {
      icon: ExistingGardenIcon,
    }).bindPopup('existing3')

    const existing4 = L.marker([-41.273493, 174.785527], {
      icon: ExistingGardenIcon,
    }).bindPopup('existing4')

    // Base layer map

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

    const compostLayer = L.layerGroup([compost1, compost2, compost3, compost4])
    const proposedLayer = L.layerGroup([
      proposed1,
      proposed2,
      proposed3,
      proposed4,
    ])
    const existingLayer = L.layerGroup([
      existing1,
      existing2,
      existing3,
      existing4,
    ])

    const overlayLayers = {
      ExistingSites: existingLayer,
      ProposedSites: proposedLayer,
      CompostDrop: compostLayer,
    }

    L.control.layers(baseLayers, overlayLayers).addTo(map)

    const popup = L.popup()

    function onMapClick(e: { latlng: L.LatLngExpression }) {
      const latlng = e.latlng

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
        <div id="map" style={{ height: '850px' }}></div>
      </div>
    </>
  )
}

export default MapPage
