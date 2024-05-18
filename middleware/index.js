import { loggingMiddleware } from './loggingMiddleware.js';
import { requestTimeMiddleware } from './requestTimeMiddleware.js';
import { errorMiddleware } from './errorMiddleware.js';

const middleware = {
    addPreRouteMiddleware: (app) => {
        app.use(requestTimeMiddleware);
        app.use(loggingMiddleware);
    },
    addPostRouteMiddleware: (app) => {
        app.use(errorMiddleware);
    }
}

export default middleware;