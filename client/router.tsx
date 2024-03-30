/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import AllUsers from './components/AllUsers'
import Home from './components/Home'
import MapPage from './components/map/MapPage'
import AddUser from './components/forms/AddUser'
import AllSites from './components/AllSites'
import AddSite from './components/forms/AddSite'
import Site from './components/Site'
import User from './components/User'

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
    </Route>,
  ]),
)

export default router
