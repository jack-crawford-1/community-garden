import connection from './connection.ts'
import { NewUser, User } from '../../models/userModels.ts'
import { NewSite, Sites } from '../../models/sitesModels.ts'

const db = connection

export const getAllUsers = () => {
  const allUsers = db<User>('users').select('*')
  return allUsers
}

export async function addUser(newUser: NewUser): Promise<NewUser[]> {
  return await db('users').insert(newUser).returning('*')
}

export async function deleteUser(id: number): Promise<User> {
  return db('users').where('id', id).del()
}

export const getAllSites = (): Promise<Sites[]> => {
  return db<Sites>('sites').select('*')
}

export async function addSite(newSite: NewSite): Promise<Sites[]> {
  return await db('sites').insert(newSite).returning('*')
}

export const deleteSite = async (id: number): Promise<Sites> => {
  return db('sites').where('id', id).del()
}
