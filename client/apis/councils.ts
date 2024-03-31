import request from 'superagent'
import { Councils } from '../../models/councilsModels'

const rootUrl = '/api/v1'

export const getCouncils = async (): Promise<Councils[]> => {
  const res = await request.get(`${rootUrl}/councils`)
  if (res.ok) {
    return res.body.councils
  }
  throw new Error(res.text)
}

export const getCouncilById = async (id: number): Promise<Councils> => {
  const res = await request.get(`${rootUrl}/councils/${id}`)
  if (res.ok) {
    return res.body.councils
  }
  throw new Error(res.text)
}

export const addCouncil = async (newCouncil: Councils) => {
  await request.post(`${rootUrl}/councils/`).send(newCouncil)
}
