import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import * as api from '../apis/sites.ts'
import { Sites } from '../../models/sitesModels.ts'
import { getSites } from '../apis/sites.ts'

export function useSites() {
  const query = useQuery({
    queryKey: ['sites'],
    queryFn: () => getSites(),
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
    mutationFn: (newSite: Sites) => api.addSite(newSite),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['sites'] })
    },
  })

  return createMutation
}
