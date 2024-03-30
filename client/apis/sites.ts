import request from 'superagent'
import { Sites } from '../../models/sitesModels'

const rootUrl = '/api/v1'

export const getSites = async (): Promise<Sites[]> => {
  const res = await request.get(`${rootUrl}/sites`)
  if (res.ok) {
    return res.body.sites
  }
  throw new Error(res.text)
}

export const deleteSite = async (id: number) => {
  await request.delete(`${rootUrl}/sites/${id}`)
}

export const addSite = async (newSite: Sites) => {
  await request.post(`${rootUrl}/sites`).send(newSite)
}
