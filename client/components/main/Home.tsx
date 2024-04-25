import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className="home-outer-container">
        <div className="home-container">
          <h1>Community Gardens</h1>
          <p>
            A dynamic full-stack application designed to showcase an array of
            web development skills by facilitating the creation and management
            of urban gardens.
          </p>
          <p>
            It allows users to find, share, and manage green spaces, integrating
            geolocation and secure user interactions. The app&apos;s
            functionality will evolve over time, reflecting a commitment to
            continuous learning.
          </p>
          <Link to="/about">Read More</Link>
        </div>
      </div>
    </>
  )
}

export default Home
