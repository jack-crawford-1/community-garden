import connection from './connection.ts'
import { NewUser, User } from '../../models/userModels.ts'

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
