/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import AllUsers from './components/AllUsers'
import Home from './components/Home'
import MapPage from './components/MapPage'
import Location from './components/Location'
import AddUser from './components/AddUser'
import AllSites from './components/AllSites'

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/users/" element={<AllUsers />} />
      <Route path="/adduser/" element={<AddUser />} />
      <Route path="/map/" element={<MapPage />} />
      <Route path="/location/" element={<Location />} />
      <Route path="/sites/" element={<AllSites />} />
    </Route>,
  ]),
)

export default router
