import Router from 'express-promise-router'
import { getAllUsers, getUserById, createUser, deleteUser } from '../services/userService.js'

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

router.get('/', async (req, res) => {
    return res.json(await getAllUsers())
})

router.get('/:userId', async (req, res) => {
    const { userId } = req.params
    const user = await getUserById(userId);

    if (!user) {
        res.sendStatus(404);
    }

    res.json(await getUserById(userId))
});

router.post('/', async (req, res) => {
    console.log(req.body);
    const { name, email } = req.body;
    if (name == undefined || email == undefined) {
        throw new Error('Provided name or email was undefined');
    }

    const savedUser = await createUser({ name, email })
    res.json(savedUser);
});

router.put('/:userId', (req, res) => {
    res.send(`Got a PUT request to update user ${req.params.userId}`)
});

router.delete('/:userId', async (req, res) => {
    const { userId } = req.params

    await deleteUser(userId);
    res.send(`Got a DELETE request user ${req.params.userId}`)
});