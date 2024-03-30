import request from 'superagent'
import { NewSite, Sites } from '../../models/sitesModels'

const rootUrl = '/api/v1'

export const getSites = async (): Promise<Sites[]> => {
  const res = await request.get(`${rootUrl}/sites`)
  if (res.ok) {
    return res.body.sites
  }
  throw new Error(res.text)
}

export const getSiteById = async (id: number): Promise<Sites> => {
  const res = await request.get(`${rootUrl}/sites/${id}`)
  if (res.ok) {
    return res.body.site
  }
  throw new Error(res.text)
}

export const deleteSite = async (id: number) => {
  await request.delete(`${rootUrl}/sites/${id}`)
}

export const addSite = async (newSite: NewSite) => {
  await request.post(`${rootUrl}/sites/`).send(newSite)
}
