const express = require('express');
const app = express();
const port = 3000;
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var requestTimeMiddleware = require('./middleware/requestTimeMiddleware');
var loggingMiddleware = require('./middleware/loggingMiddleware');

app.use(requestTimeMiddleware);
app.use(loggingMiddleware);
app.use('/', indexRouter);
app.use('/users', usersRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});