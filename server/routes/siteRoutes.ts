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

export default router
