import express from 'express'
const router = express.Router();
export default router;
import * as db from '../model'
import * as server from '../server'
import { WorldNew, WorldUpdate } from '../types'

router.use(express.json())


// List worlds
router.get('/', (req, res) => {
    res.send(server.query())
})

// Add world
router.post('/', async (req, res) => {
    const world = req.body as WorldNew
    const worldObj = await db.add(world)
    res.send(server.update(worldObj))
})

// Update world
router.patch('/', async (req, res) => {
    const world = req.body as WorldUpdate
    const worldObj = await db.update(world)
    res.send(server.update(worldObj))
})

// Delete world
router.delete('/', (req, res) => {
    
})
