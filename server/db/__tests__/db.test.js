import * as db from '../db.ts'
import connection from '../connection.ts'

const newSite = {
  latlong: '40.30202, 74.003',
  address: '123 Main St',
  description: 'A new garden in the community',
  councilId: 1,
  userId: 1,
  isPublic: true,
  hasWaterAccess: true,
  isAvailable: true,
  hasShade: true,
  soilType: 'Sandy',
  size: 'Large',
  accessibility: 'lots of access',
}

const newUser = {
  name: 'John Jacob Jingleheiner Smith',
  userName: 'jjjs',
  email: 'jjjs@gmail.com',
  password: 'secretwords',
  location: 'Mars',
  createdAt: 'random date',
  updatedAt: 'random date',
}

import {
  describe,
  it,
  expect,
  beforeAll,
  beforeEach,
  afterEach,
  afterAll,
} from 'vitest'

beforeAll(() => {
  return connection.migrate.latest()
})

beforeEach(async () => {
  await connection.seed.run()
})

describe('getAllUsers', () => {
  it('should return all users', async () => {
    const users = await db.getAllUsers()
    expect(users).toHaveLength(10)
    expect(users).toBeInstanceOf(Array)
  })
})

describe('getUserById', () => {
  it('should show a single user by ID', async () => {
    const user = await db.getUserById(1)
    expect(user).toBeDefined()
    expect(user.id).toBe(1)
    expect(user).toHaveProperty('name')
  })
})

describe('addUser', async () => {
  it('should add a user', async () => {
    const addedUser = await db.addUser(newUser)
    expect(addedUser).toBeInstanceOf(Array)
    expect(addedUser).toHaveLength(1)
  })
})

describe('deleteUser', () => {
  it('should delete a user', async () => {
    await connection.table('sites').where('userId', 1).delete()
    await db.deleteUser(1)
    const users = await db.getAllUsers()
    expect(users).toHaveLength(9)
  })
})

describe('getCouncils', async () => {
  it('should get all councils', async () => {
    const councils = await db.getCouncils()
    expect(councils).toHaveLength(3)
    expect(councils).toBeInstanceOf(Array)
  })
})

describe('getCouncilById', async () => {
  it('should get a single council', async () => {
    const council = await db.getCouncilById(1)
    expect(council.id).toBe(1)
    expect(council).toHaveProperty('id')
  })
})

describe('getSites', async () => {
  it('should get all sites', async () => {
    const sites = await db.getAllSites()
    expect(sites).toHaveLength(7)
    expect(sites).toBeInstanceOf(Array)
  })
})

describe('getSiteById', async () => {
  it('should get a single site', async () => {
    const site = await db.getSiteById(1)
    expect(site.id).toBe(1)
    expect(site).toHaveProperty('id')
    expect(site).toHaveProperty('description')
  })
})

describe('addSite', async () => {
  it('should add a site', async () => {
    const addedSites = await db.addSite(newSite)
    expect(addedSites).toBeInstanceOf(Array)
    expect(addedSites).toHaveLength(1)
  })
})

describe('deleteSite', () => {
  it('should delete a site', async () => {
    const siteIdToDelete = 1
    await db.deleteSite(siteIdToDelete)
    const sitesAfterDelete = await db.getAllSites()
    expect(sitesAfterDelete).toHaveLength(6)
  })
})

afterEach(async () => {
  await connection.table('sites').delete()
  await connection.table('users').delete()
  await connection.table('councils').delete()
})

afterAll(() => {
  return connection.destroy()
})
