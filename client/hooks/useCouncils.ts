import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import * as api from '../apis/councils'
import { Councils } from '../../models/councilsModels.ts'
import { getCouncils } from '../apis/councils'

export function useCouncils() {
  const query = useQuery({
    queryKey: ['councils'],
    queryFn: () => getCouncils(),
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
    mutationFn: (newCouncil: Councils) => api.addCouncil(newCouncil),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['councils'] })
    },
  })

  return createMutation
}
