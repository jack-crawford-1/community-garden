import { useParams } from 'react-router-dom'
import { useCouncils } from '../../hooks/useCouncils'

function CouncilById() {
  const { id } = useParams<{ id: string }>()
  const { data: councils, isLoading, isError, error } = useCouncils()

  const council = councils?.find((council) => council.id.toString() === id)

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {error.message}</div>
  if (!council) return <div>Site not found</div>

  return (
    <div>
      <h2>Council by ID</h2>
      <div>
        <h3>{council.name}</h3>
        <p>ID: {council.id}</p>
        <p>Email: {council.email}</p>
        <p>Phone: {council.phone}</p>
        <p>Address: {council.address}</p>
        <p>Website: {council.website}</p>
        <p>Description: {council.description}</p>
      </div>
    </div>
  )
}

export default CouncilById
