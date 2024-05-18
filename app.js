import 'dotenv/config'
import express from 'express';
import { errorMiddleware } from './middleware/errorMiddleware.js';
import { loggingMiddleware } from './middleware/loggingMiddleware.js';
import { requestTimeMiddleware } from './middleware/requestTimeMiddleware.js';
import { rootRouter } from './root/rootRouter.js';
import { userRouter } from './users/userRouter.js';

const app = express();

app.use(requestTimeMiddleware);
app.use(loggingMiddleware);
app.use('/', rootRouter);
app.use('/users', userRouter)
app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});