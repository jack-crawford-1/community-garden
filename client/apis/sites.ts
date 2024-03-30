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

export const addSites = async (newSite: Sites) => {
  await request.post(`${rootUrl}/sites`).send(newSite)
}
