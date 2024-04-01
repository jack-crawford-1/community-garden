import * as db from '../server/db/db.ts'
import connection from '../server/db/connection'

import { describe, it, expect, beforeAll, beforeEach, afterAll } from 'vitest'

beforeAll(() => {
  return connection.migrate.latest()
})

// TODO Foreign Key issue
//

beforeEach(async () => {
  await connection.seed.run()
  // await connection.seed.run({ specific: '01_councils.js' })
  // await connection.seed.run({ specific: '02_users.js' })
  // await connection.seed.run({ specific: '03_sites.js' })
})

describe('getAllUsers', () => {
  it('should return all users', async () => {
    const users = await db.getAllUsers()
    expect(users).toHaveLength(10)
  })
})

// Dont need the "specific" abve after adding num order to seed files but still failing deleteUser due to foreign key constraint - need to figure out how to remove dependencies
//

describe('deleteUser', () => {
  it('should delete a user', async () => {
    await db.deleteUser(1)
    const users = await db.getAllUsers()
    expect(users).toHaveLength(9)
  })
})

// tried destrying the connection after each and using "specific" didnt work
afterAll(() => {
  return connection.destroy()
})
