import * as db from '../server/db/db.ts'
import connection from '../server/db/connection'

import { describe, it, expect, beforeAll, beforeEach, afterAll } from 'vitest'

beforeAll(() => {
  return connection.migrate.latest()
})

beforeEach(async () => {
  await connection.seed.run({ specific: 'councils.js' })
  await connection.seed.run({ specific: 'users.js' })
  await connection.seed.run({ specific: 'sites.js' })
})

describe('getAllUsers', () => {
  it('should return all users', async () => {
    const users = await db.getAllUsers()
    expect(users).toHaveLength(10)
  })
})

afterAll(() => {
  return connection.destroy()
})
