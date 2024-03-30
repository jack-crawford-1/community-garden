import request from 'superagent'
import { User } from '../../models/userModels'

const rootUrl = '/api/v1'

export const getUsers = async (): Promise<User[]> => {
  const res = await request.get(`${rootUrl}/users`)
  if (res.ok) {
    return res.body.users
  }
  throw new Error(res.text)
}

export const deleteUser = async (id: number) => {
  await request.delete(`${rootUrl}/users/${id}`)
}

export const addUser = async (newUser: User) => {
  await request.post(`${rootUrl}/users`).send(newUser)
}
