import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <div className="app">
        <h1>Community Gardens Hub</h1>
      </div>
      <Outlet />
    </>
  )
}

export default App
