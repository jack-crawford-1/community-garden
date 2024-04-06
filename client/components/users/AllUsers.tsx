import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useUsers } from '../../hooks/useUsers.ts'
import * as api from '../../apis/users.ts'
import { Link } from 'react-router-dom'
import { deleteUser } from '../../apis/users.ts'
import { useAuth0 } from '@auth0/auth0-react'

function AllUsers() {
  const { data, isLoading, isError, error } = useUsers()
  const queryClient = useQueryClient()
  const { getAccessTokenSilently } = useAuth0()

  const delMutation = useMutation({
    mutationFn: async (id: number) => {
      const token: string = await getAccessTokenSilently()
      return deleteUser(id, token)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
  })

  const handleDelete = (id: number) => {
    delMutation.mutate(id)
  }

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {error.message}</div>

  return (
    <div>
      <table className="user-list">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  <Link to={`/users/${user.id}`}>{user.name}</Link>
                </td>
                <td>{user.userName}</td>

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
    </div>
  )
}
export default AllUsers
