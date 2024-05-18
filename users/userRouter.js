import express from 'express';
import * as db from '../db/index.js'

export var userRouter = express.Router();

// a middleware function with no mount path. This code is executed for every request to the router
userRouter.use((req, res, next) => {
    console.log('Users endpoint being access')
    next()
})

userRouter.get('/:userId', async (req, res) => {
    const { userId } = req.params
    const { rows } = await db.query('SELECT * FROM etest.users WHERE id = $1', [userId])

    res.json(rows[0])
});

userRouter.post('/', (req, res) => {
    throw new Error('NOT IMPLEMENTED');
});

userRouter.put('/:userId', (req, res) => {
    res.send(`Got a PUT request to update user ${req.params.userId}`)
});

userRouter.delete('/:userId', (req, res) => {
    res.send(`Got a DELETE request user ${req.params.userId}`)
});