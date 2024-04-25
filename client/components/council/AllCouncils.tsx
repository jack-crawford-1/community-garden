import { useQueryClient } from '@tanstack/react-query'
import { useCouncils } from '../../hooks/useCouncils.ts'
import { Link, Outlet } from 'react-router-dom'

function AllCouncils() {
  const { data, isLoading, isError, error } = useCouncils()
  const queryClient = useQueryClient()

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {error.message}</div>

  return (
    <div className="councils-page-container">
      <h1>Councils</h1>
      <div className="all-council">
        {data &&
          data.map((council) => (
            <Link to={`/councils/${council.id}`} key={council.id}>
              <ul className="all-council-each">
                <li>{council.name}</li>
              </ul>
            </Link>
          ))}
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default AllCouncils
