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
      <h3>Using the API from wellington.gen.nz/geotagged to fetch news data</h3>
      <div>
        <h2>News for Wellington</h2>

        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <strong>{item.headline}</strong>
              <p>Author: {item.author}</p>
              <p>Date: {String(item.date)}</p>
              <p>Description: {item.description}</p>
              <p>URL: {item.webUrl}</p>
              <p>Tags: {item.categories.join(', ')}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default WellingtonNewsData
