import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getUsers } from '../apis/users.ts'
import * as api from '../apis/users.ts'
import { User } from '../../models/userModels.ts'

export function useUsers() {
  const query = useQuery({
    queryKey: ['users'],
    queryFn: () => getUsers(),
  })
  return {
    ...query,
  }
}

export function useCustomQueryClient() {
  const queryClient = useQueryClient()
  return queryClient
}

export function useCreateMutation() {
  const queryClient = useCustomQueryClient()
  const createMutation = useMutation({
    mutationFn: (newUser: User) => api.addUser(newUser),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
  })

  return createMutation
}
