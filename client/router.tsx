/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from '../client/components/main/App'
import AllUsers from './components/users/AllUsers'
import Home from './components/main/Home'
import MapPage from './components/map/MapPage'
import AddUser from './components/form/AddUser'
import AllSites from './components/sites/AllSites'
import AddSite from './components/form/AddSite'
import Site from './components/sites/Site'
import User from './components/users/User'
import CouncilById from './components/council/Council'
import AllCouncils from './components/council/AllCouncils'
import AddressFromLatLong from '../client/components/map/AddressFromLatLong'

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/users/" element={<AllUsers />} />
      <Route path="/users/:id" element={<User />} />
      <Route path="/adduser/" element={<AddUser />} />
      <Route path="/map/" element={<MapPage />} />
      <Route path="/sites/" element={<AllSites />} />
      <Route path="/sites/:id" element={<Site />} />
      <Route path="/addsite/" element={<AddSite />} />
      <Route path="/councils/" element={<AllCouncils />} />
      <Route path="/councils/:id" element={<CouncilById />} />
      <Route path="/address/" element={<AddressFromLatLong />} />
    </Route>,
  ]),
)

export default router
