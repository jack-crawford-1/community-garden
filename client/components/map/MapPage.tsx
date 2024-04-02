import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import L, { polygon } from 'leaflet'

function MapPage() {
  const navigate = useNavigate()

  // add new layer as const under below two and then call in OverLayers further down
  useEffect(() => {
    const map = L.map('map').setView([-41.279519, 174.780011], 15)

    const customIconProposedGarden = L.icon({
      iconUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjehet-5HTJwndzHzDbUgK15eYliTmlwJmPg&usqp=CAU',
      iconSize: [38, 38],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
    })
    const landmarkLayer = L.marker([-41.279519, 174.780011], {
      icon: customIconProposedGarden,
    }).bindPopup('Seasonal Public Garden')

    const customIcon = L.icon({
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/6593/6593775.png',
      iconSize: [38, 38],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
    })

    const compost1 = L.marker([-41.306229, 174.779469], {
      icon: customIcon,
    }).bindPopup('Compost Drop Off point')

    const compost2 = L.marker([-41.299014, 174.75938], {
      icon: customIcon,
    }).bindPopup('Compost Drop Off point')

    const compost3 = L.marker([-41.239762, 174.782642], {
      icon: customIcon,
    }).bindPopup('Compost Drop Off point')

    const compost4 = L.marker([-41.220487, 174.860075], {
      icon: customIcon,
    }).bindPopup('Compost Drop Off point')

    // Placeholder location to show polygon on the map
    // shows "const Wadestown" content onClick
    const WadestownLatlngs: L.LatLngExpression[] = [
      [-41.265575, 174.780329],
      [-41.265905, 174.779937],
      [-41.26571, 174.779892],
      [-41.265574, 174.780073],
    ]
    const Wadestown = L.polygon(WadestownLatlngs, { color: 'blue' }).addTo(map)
      .bindPopup(`ID: 1 <br/>
      LatLong: 40.7128,-74.0060 <br/>
      Address: 12 Barnard St, Wadestown <br/>
      Description: Community garden in Wadestown <br/>`)

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

    // created a compost layer so I could show all compost locations under one layer
    const compostLayer = L.layerGroup([compost1, compost2, compost3, compost4])

    // Can add more layers
    const overlayLayers = {
      ExistingSites: Wadestown,
      ProposedSites: landmarkLayer,
      CompostDrop: compostLayer,
    }

    L.control.layers(baseLayers, overlayLayers).addTo(map)

    const popup = L.popup()

    function onMapClick(e: { latlng: L.LatLngExpression }) {
      const latlng = e.latlng

      const content = `<div>You clicked ${e.latlng.toString()}</div><button id="go-to-page">Add Garden Site</button>`

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
    <div>
      <div id="map" style={{ height: '700px' }}></div>
    </div>
  )
}

export default MapPage
function getReverseGeocodingData(lat: any, lng: any) {
  throw new Error('Function not implemented.')
}
