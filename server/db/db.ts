import connection from './connection.ts'
import { NewSite, Sites } from '../../models/sitesModels.ts'
import { Councils } from '../../models/councilsModels.ts'

const db = connection

export const getAllSites = (): Promise<Sites[]> => {
  return db<Sites>('sites').select('*')
}

export const getSiteById = async (id: number): Promise<Sites | undefined> => {
  return db<Sites>('sites').where('id', id).first()
}

export async function addSite(newSite: NewSite): Promise<Sites[]> {
  return await db('sites').insert(newSite).returning('*')
}

export const deleteSite = async (id: number): Promise<Sites> => {
  return db('sites').where('id', id).del()
}

export const getCouncils = async (): Promise<Councils[]> => {
  return db<Councils>('councils').select('*')
}

export const getCouncilById = async (
  id: number,
): Promise<Councils | undefined> => {
  return db<Councils>('councils').where('id', id).first()
}
