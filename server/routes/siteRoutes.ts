import { Router } from 'express'

import * as db from '../db/db.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const sites = await db.getAllSites()
    res.json({ sites })
  } catch (err) {
    console.error(`No good! ${err}`)
    res.sendStatus(500)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const site = await db.getSiteById(id)
    res.json({ site })
  } catch (err) {
    console.error(`No good! ${err}`)
    res.sendStatus(500)
  }
})

router.post('/', async (req, res) => {
  try {
    const newSiteData = req.body

    const newSite = await db.addSite(newSiteData)
    res.json(newSite)
  } catch (error) {
    console.error('Error when adding a site:', error.message)
    res.status(500).json({
      message: 'There was a server error',
      error: error.message,
    })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await db.deleteSite(id)
    res.json(`site ${id} deleted`)
  } catch (error) {
    res.status(500).json({ message: 'there was a server error' })
  }
})

export default router
