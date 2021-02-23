import express from 'express'
const router = express.Router();
export default router;

router.use(express.json())

type User = {
    name: String,
    state: 'allow' | 'ban' | 'admin'
}

type World = {
    name: String,
    port: Number,
    password: String,
    users: User[],
    enabled: Boolean,
}

type WorldOutput = World & {
    state: 'dead' | 'starting' | 'active' | 'error',
    message?: String
}


// List worlds
router.get('/', (req, res) => {
    
})

// Add world
router.post('/', (req, res) => {
    const world = req.body as World

})

// Update world
router.patch('/', (req, res) => {
    
})

// Delete world
router.delete('/', (req, res) => {

})
