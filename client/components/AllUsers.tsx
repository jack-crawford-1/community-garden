import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useUsers } from '../hooks/useUsers.ts'
import * as api from '../apis/users.ts'
import { Link } from 'react-router-dom'
import AddUser from './AddUser.tsx'

function AllUsers() {
  const { data, isLoading, isError, error } = useUsers()
  const queryClient = useQueryClient()

  const delMutation = useMutation({
    mutationFn: (id: number) => api.deleteUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
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
      <h2 className="ulh2">Admin Page: Show all users</h2>
      <table className="user-list">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Location</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.userName}</td>
                <td>{user.location}</td>
                <td>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="delete-button"
                  ></button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Link to={'/'}>Home</Link>
      <AddUser />
    </div>
  )
}
export default AllUsers
