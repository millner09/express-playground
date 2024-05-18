import express from 'express';
export var rootRouter = express.Router();

rootRouter.get('/', (req, res) => {
    res.send('Hello, world!');
});

rootRouter.post('/', (req, res) => {
    res.send('Got a POST request')
});

rootRouter.put('/', (req, res) => {
    res.send('Got a PUT request')
});

rootRouter.delete('/', (req, res) => {
    res.send('Got a DELETE request')
});