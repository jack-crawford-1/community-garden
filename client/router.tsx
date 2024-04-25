/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from '../client/components/main/App'
import Home from './components/main/Home'
import About from '../client/components/main/About'
import MapPage from './components/map/MapPage'
import AllSites from './components/sites/AllSites'
import AddSite from './components/form/AddSite'
import Site from './components/sites/Site'
import CouncilById from './components/council/Council'
import AllCouncils from './components/council/AllCouncils'
import AddressFromLatLong from '../client/components/map/AddressFromLatLong'
import Profile from './components/auth/Profile'
import WellingtonNewsData from './components/council/WellingtonNewsData'
import UploadImages from './components/form/UploadImages'

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/about" element={<About />} />
      <Route path="/map/" element={<MapPage />} />
      <Route path="/sites/" element={<AllSites />} />
      <Route path="/sites/:id" element={<Site />} />
      <Route path="/addsite/" element={<AddSite />} />
      <Route path="/councils/" element={<AllCouncils />}>
        <Route path=":id" element={<CouncilById />} />
      </Route>
      <Route path="/address/" element={<AddressFromLatLong />} />
      <Route path="/news/" element={<WellingtonNewsData />} />
      <Route path="/UploadImages" element={<UploadImages />} />
    </Route>,
  ]),
)

export default router
