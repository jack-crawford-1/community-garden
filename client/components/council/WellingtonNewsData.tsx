import { useState, useEffect } from 'react'
import { A } from '../../../models/wellingtonNewsModels'

function WellingtonNewsData() {
  const [data, setData] = useState<A[] | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://wellington.gen.nz/wellington/json',
        )
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const jsonData = await response.json()
        setData(jsonData)
      } catch (error) {
        console.error('Could not fetch the data:', error)
      }
    }

    fetchData()
  }, [])

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div className="news-container">
        <div>
          <h2>News for Wellington</h2>
          <h3>
            Using the API from{' '}
            <a
              href={'https://wellington.gen.nz/api'}
              target="_blank"
              rel="noopener noreferrer"
              className="news-api-link"
            >
              wellington.gen.nz/api
            </a>{' '}
            to fetch news headlines for Wellington.
          </h3>

          <ul>
            {data.map((item) => (
              <li key={item.id} className="news-tile">
                <p className="news-title">{item.headline}</p>
                <p className="author">{item.author}</p>
                <p className="date">{String(item.date)}</p>
                <p className="description">{item.description}</p>
                <p className="url">
                  <a
                    href={item.webUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.webUrl}
                  </a>
                </p>
                <p className="tags">Tags: {item.categories.join(', ')}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default WellingtonNewsData
