require('dotenv').config()
const express = require('express');
const app = express();
const errorMiddleware = require('./middleware/errorMiddleware');
const loggingMiddleware = require('./middleware/loggingMiddleware');
const requestTimeMiddleware = require('./middleware/requestTimeMiddleware');
const rootRouter = require('./root/rootRouter');
const userRouter = require('./users/userRouter');

app.use(requestTimeMiddleware);
app.use(loggingMiddleware);
app.use('/', rootRouter);
app.use('/users', userRouter)
app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});