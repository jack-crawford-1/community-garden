// import { useQueryClient } from '@tanstack/react-query'
// import { useCouncils } from '../../hooks/useCouncils.ts'
// import { Link } from 'react-router-dom'

// function AllCouncils() {
//   const { data, isLoading, isError, error } = useCouncils()
//   const queryClient = useQueryClient()

//   if (isLoading) return <div>Loading...</div>
//   if (isError) return <div>Error: {error.message}</div>

//   return (
//     <div>
//       <table className="user-list">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data &&
//             data.map((council) => (
//               <tr key={council.id}>
//                 <div className='all-council'>
//                   <td>{council.id}</td>
//                   <td>
//                     <Link to={`/councils/${council.id}`}>{council.name}</Link>
//                   </td>
//                   <td>{council.email}</td>
//                   <td>{council.phone}</td>
//                 </div>
//               </tr>
//             ))}
//         </tbody>
//       </table>
//     </div>
//   )
// }
// export default AllCouncils

import { useQueryClient } from '@tanstack/react-query'
import { useCouncils } from '../../hooks/useCouncils.ts'
import { Link } from 'react-router-dom'

function AllCouncils() {
  const { data, isLoading, isError, error } = useCouncils()
  const queryClient = useQueryClient()

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {error.message}</div>

  return (
    <div className="all-council">
      {data &&
        data.map((council) => (
          <Link to={`/councils/${council.id}`} key={council.id}>
            <ul className="all-council-each">
              <li>
                <Link to={`/councils/${council.id}`}>{council.name}</Link>
              </li>
              <li>ID: {council.id}</li>
              <li>Email: {council.email}</li>
              <li>Phone: {council.phone}</li>
            </ul>
          </Link>
        ))}
    </div>
  )
}

export default AllCouncils
