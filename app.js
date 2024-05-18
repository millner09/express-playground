import 'dotenv/config'
import express from 'express';
import { errorMiddleware } from './middleware/errorMiddleware.js';
import { loggingMiddleware } from './middleware/loggingMiddleware.js';
import { requestTimeMiddleware } from './middleware/requestTimeMiddleware.js';
import mountRoutes from './routes/index.js'
const app = express();

app.use(requestTimeMiddleware);
app.use(loggingMiddleware);
mountRoutes(app)
app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});