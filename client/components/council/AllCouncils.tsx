import { useQueryClient } from '@tanstack/react-query'
import { useCouncils } from '../../hooks/useCouncils.ts'
import { Link } from 'react-router-dom'

function AllCouncils() {
  const { data, isLoading, isError, error } = useCouncils()
  const queryClient = useQueryClient()

  // const delMutation = useMutation({
  //   mutationFn: (id: number) => api.deleteCouncil(id),
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ['councils'] })
  //   },
  // })

  // const handleDelete = (id: number) => {
  //   console.log('delete')
  //   delMutation.mutate(id)
  // }

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {error.message}</div>

  return (
    <div>
      <h2 className="ulh2">Show all councils</h2>
      <table className="user-list">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Website</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((council) => (
              <tr key={council.id}>
                <td>
                  <Link to={`/councils/${council.id}`}>{council.id}</Link>
                </td>
                <td>{council.name}</td>
                <td>{council.email}</td>
                <td>{council.phone}</td>
                <td>{council.address}</td>
                <td>{council.website}</td>
                <td>{council.description}</td>

                <td>
                  {/* <button
                    onClick={() => handleDelete(council.id)}
                    className="delete-button"
                  ></button> */}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
export default AllCouncils
