import { it, expect, describe, vi } from 'vitest'
import request from 'supertest'
import * as db from '../../db/db'
import server from '../../server'

vi.mock('../../db/db')

const dummyUserData = [
  {
    id: 1,
    name: 'James',
    userName: 'J44',
    email: 'jj@gmail.com',
    password: 'cschjhb',
    location: 'Wellington',
    createdAt: '12 Jan',
    updatedAt: '13 Jan',
  },
]

describe('GET api/v1/users/:id', async () => {
  it('should get a user from id', async () => {
    vi.mocked(db.getUserById).mockResolvedValue(dummyUserData[0])

    const res = await request(server).get('/api/v1/users/1')

    expect(res.statusCode).toBe(200)
  })
  it('should return an error if theres no user', async () => {
    vi.mocked(db.getUserById).mockRejectedValue(dummyUserData)

    const res = await request(server).get('/api/v1/users/1')

    expect(res.statusCode).toBe(500)
  })
})
