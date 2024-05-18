import express from 'express';
import Router from 'express-promise-router'


// create a new express-promise-router
// this has the same API as the normal express router except
// it allows you to use async functions as route handlers
const router = new Router()

// export our router to be mounted by the parent application
export default router

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