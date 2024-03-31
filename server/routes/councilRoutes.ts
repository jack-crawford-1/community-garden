import { Router } from 'express'

import * as db from '../db/db.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const councils = await db.getCouncils()
    res.json({ councils })
  } catch (err) {
    console.error(`No good! ${err}`)
    res.sendStatus(500)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const council = await db.getCouncilById(id)
    res.json({ council })
  } catch (err) {
    console.error(`No good! ${err}`)
    res.sendStatus(500)
  }
})

export default router
