import { useUsers } from '../hooks/useUsers.ts'

function Users() {
  const { data } = useUsers()

  return (
    <>
      <div>
        <h2>Show all users Page</h2>
        <ul>
          {data &&
            data.map((user, index) => (
              <li key={index}>
                Name: {user.name}, Username: {user.userName}, Location:
                {user.location}
              </li>
            ))}
        </ul>
      </div>
    </>
  )
}

export default Users
