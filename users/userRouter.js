var express = require('express');
var router = express.Router();

const routeEndpoint = '/users'

// a middleware function with no mount path. This code is executed for every request to the router
router.use((req, res, next) => {
    console.log('Users endpoint being access')
    next()
})

router.get('/:userId', (req, res) => {
    const user = {
        id: req.params.userId,
        name: "Adam"
    }
    res.json(user);
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

module.exports = router;