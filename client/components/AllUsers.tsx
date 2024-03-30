import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useUsers } from '../hooks/useUsers.ts'
import * as api from '../apis/users.ts'
import { Link } from 'react-router-dom'
import AddUser from './forms/AddUser.tsx'

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
            <th>Email</th>
            <th>Password</th>
            <th>Location</th>
            <th>Created At</th>
            <th>Updated At</th>
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
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.location}</td>
                <td>{user.createdAt}</td>
                <td>{user.updatedAt}</td>
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
