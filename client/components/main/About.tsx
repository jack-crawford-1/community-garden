function About() {
  return (
    <div className="about-container">
      <div className="about-purpose">
        <h2>About</h2>
        <p>
          The Garden App is a dynamic full-stack application designed to
          showcase an array of web development skills by facilitating the
          creation and management of urban gardens. It allows users to find,
          share, and manage green spaces, integrating geolocation and secure
          user interactions. The app&apos;s functionality will evolve over time,
          reflecting a commitment to continuous learning.
        </p>
      </div>
      <div className="about-lower-section">
        <div className="about-tech">
          <h2>Technologies</h2>
          <ul>
            <li>React</li>
            <li>React Router DOM</li>
            <li>Leaflet</li>
            <li>React Dropzone</li>
            <li>React Query</li>
            <li>Vite</li>
            <li>Express.js</li>
            <li>Knex.js</li>
            <li>SQLite3</li>
            <li>Superagent</li>
            <li>Nock</li>
            <li>Vitest</li>
            <li>ESLint</li>
            <li>TypeScript</li>
          </ul>
        </div>
        <div className="about-features">
          <h2>Features</h2>
          <ul>
            <li>Secure user authentication via Auth0 with protected routes.</li>
            <li>
              CRUD functionality for managing garden locations and resources
              within a database.
            </li>
            <li>
              Utilisation of external APIs for geocoding, fetching news on
              Wellington, and converting latitude and longitude data to readable
              addresses to allow the forms to be pre-populated.
            </li>
            <li>
              Interactive mapping with Leaflet, enabling users to pinpoint and
              add new garden sites and see existing ones.
            </li>
            <li>
              File uploading capability with React Dropzone, allowing users to
              share images and documents related to garden spots.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
