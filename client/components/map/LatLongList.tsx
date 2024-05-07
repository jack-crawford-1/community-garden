import { useSites } from '../../hooks/useSites.ts'

function LatLongList() {
  const { data, isLoading, isError, error } = useSites()

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {error.message}</div>

  return (
    <div className="all-sites">
      <table className="sites-list">
        <thead>
          <tr>
            <th>LatLong</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((site) => (
              <tr key={site.id}>
                <td>{Array.from(site.latlong).join('')}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default LatLongList
