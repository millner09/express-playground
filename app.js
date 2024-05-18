require('dotenv').config()
const express = require('express');
const app = express();
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const requestTimeMiddleware = require('./middleware/requestTimeMiddleware');
const loggingMiddleware = require('./middleware/loggingMiddleware');

app.use(requestTimeMiddleware);
app.use(loggingMiddleware);
app.use('/', indexRouter);
app.use('/users', usersRouter)

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});