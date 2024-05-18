var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello, world!');
});

router.post('/', (req, res) => {
    res.send('Got a POST request')
});

router.put('/', (req, res) => {
    res.send('Got a PUT request')
});

router.delete('/', (req, res) => {
    res.send('Got a DELETE request')
});

module.exports = router;