import express from 'express'
import os from 'os'
const router = express.Router();
export default router;

router.use(express.json())

router.get('/', (req, res) => {
    const obj = {
        cpu: os.cpus().map(it => {
            const t = it.times;
            return (t.user + t.sys + t.irq) / (t.idle + t.irq + t.nice + t.sys + t.user)
        }),
        memory: os.freemem() / os.totalmem()
    }
    res.send(obj)
})
