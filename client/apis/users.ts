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

export const deleteUser = async (id: number, token: string) => {
  const response = await fetch(`${rootUrl}/users/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })

  if (!response.ok) {
    throw new Error('Error deleting user')
  }
}

export const addUser = async (newUser: User) => {
  await request.post(`${rootUrl}/users`).send(newUser)
}

export const getUserById = async (id: number): Promise<User> => {
  const res = await request.get(`${rootUrl}/users/${id}`)
  if (res.ok) {
    return res.body.user
  }
  throw new Error(res.text)
}
