import Router from 'express-promise-router'
import * as db from '../db/index.js'

// create a new express-promise-router
// this has the same API as the normal express router except
// it allows you to use async functions as route handlers
const router = new Router()

// export our router to be mounted by the parent application
export default router

// a middleware function with no mount path. This code is executed for every request to the router
router.use((req, res, next) => {
    console.log('Users endpoint being access')
    next()
})

router.get('/:userId', async (req, res) => {
    const { userId } = req.params
    const { rows } = await db.query('SELECT * FROM etest.users WHERE id = $1', [userId])

    res.json(rows[0])
});

router.post('/', (req, res) => {
    throw new Error('NOT IMPLEMENTED');
});

router.put('/:userId', (req, res) => {
    res.send(`Got a PUT request to update user ${req.params.userId}`)
});

router.delete('/:userId', (req, res) => {
    res.send(`Got a DELETE request user ${req.params.userId}`)
});