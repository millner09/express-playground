var express = require('express');
var router = express.Router();

const routeEndpoint = '/users'

router.get('/:userId', (req, res) => {
    res.send(req.params);
});

router.post('/', (req, res) => {
    res.send('Got a POST request, creating new user')
});

router.put('/:userId', (req, res) => {
    res.send(`Got a PUT request to update user ${req.params.userId}`)
});

router.delete('/:userId', (req, res) => {
    res.send(`Got a DELETE request user ${req.params.userId}`)
});

module.exports = router;