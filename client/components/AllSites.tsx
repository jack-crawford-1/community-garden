import { useMutation, useQueryClient } from '@tanstack/react-query'

import * as api from '../apis/sites.ts'
import { Link } from 'react-router-dom'
import { useSites } from '../hooks/useSites.ts'
import AddSite from './forms/AddSite.tsx'

function AllSites() {
  const { data, isLoading, isError, error } = useSites()
  const queryClient = useQueryClient()

  const delMutation = useMutation({
    mutationFn: (id: number) => api.deleteSite(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['sites'] })
    },
  })

  const handleDelete = (id: number) => {
    console.log('delete')
    delMutation.mutate(id)
  }

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {error.message}</div>

  return (
    <div>
      <h2 className="ulh2">Show all Sites</h2>
      <table className="user-list">
        <thead>
          <tr>
            <th>ID</th>
            <th>Address</th>
            <th>Description</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((site) => (
              <tr key={site.id}>
                <td>
                  <Link to={`/sites/${site.id}`}>{site.id}</Link>
                </td>
                <td>{site.address}</td>
                <td>{site.description}</td>
                <td>
                  <button
                    onClick={() => handleDelete(site.id!)}
                    className="delete-button"
                  ></button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* <AddSite /> */}
    </div>
  )
}
export default AllSites
