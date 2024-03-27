import connection from './connection.ts'
import { User } from '../../models/userModels.ts'

export async function getAllUsers(db = connection): Promise<User[]> {
  return db('users').select()
}
