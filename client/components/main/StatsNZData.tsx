import { useState, useEffect } from 'react'

interface Dataset {
  title: string
  description: string
  identifier: string
  issued: string
  modified: string
  publisher: {
    name: string
    mbox: string
  }
  landingPage: string
}

function StatsNZData() {
  const [datasets, setDatasets] = useState<Dataset[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('https://api.stats.govt.nz/opendata/v1/data.json', {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache',
        'Ocp-Apim-Subscription-Key': '4a6a208016944479be44a5afde41573b',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.json()
      })
      .then((data) => {
        setDatasets(data.dataset)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setError('Failed to fetch data')
        setLoading(false)
      })
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className="stats-nz-container">
      <h2>Stats NZ Datasets</h2>
      <h3>Directory for official statistical data from StatsNZ</h3>
      <h3>
        Plan to access and build out data from 2018 Census of Population and
        Dwellings
      </h3>
      {datasets && (
        <ul className="stats-nz-dataset">
          {datasets.map((dataset, index) => (
            <li key={index}>
              <h4>{dataset.title}</h4>
              <p>{dataset.description}</p>
              <p>
                Identifier:{' '}
                <a
                  href={dataset.identifier}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {dataset.identifier}
                </a>
              </p>
              <p className="author">Published by: {dataset.publisher.name}</p>
              <p className="date">
                Issue Date: {new Date(dataset.issued).toLocaleDateString()}
              </p>
              <p className="date">
                Last Modified: {new Date(dataset.modified).toLocaleDateString()}
              </p>
              <p>
                More Information:{' '}
                <a
                  href={dataset.landingPage}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {dataset.landingPage}
                </a>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default StatsNZData
