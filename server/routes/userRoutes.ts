import { Router } from 'express'

import * as db from '../db/db.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const users = await db.getAllUsers()
    res.json({ users })
  } catch (err) {
    console.error(`No good! ${err}`)
    res.sendStatus(500)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const user = await db.getUserById(id)
    res.json({ user })
  } catch (error) {
    res.status(500).json({ message: 'there was a server error' })
  }
})

router.post('/', async (req, res) => {
  try {
    const { name, userName, email, password, location, updatedAt, createdAt } =
      req.body
    await db.addUser({
      name,
      userName,
      email,
      password,
      location,
      createdAt,
      updatedAt,
    })
    res.json(`Welcome ${name}`)
  } catch (error) {
    res.status(500).json({ message: 'there was a server error' })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await db.deleteUser(id)
    res.json(`User ${id} deleted`)
  } catch (error) {
    res.status(500).json({ message: 'there was a server error' })
  }
})

export default router
