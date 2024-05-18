import 'dotenv/config'
import express from 'express';
import mountRoutes from './routes/index.js'
import middleware from './middleware/index.js';

const app = express();

// Add middleware and routes
middleware.addPreRouteMiddleware(app);
mountRoutes(app)
middleware.addPostRouteMiddleware(app);

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});