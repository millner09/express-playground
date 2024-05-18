// ./routes/index.js
import root from './root.js'
import users from './users.js'

const mountRoutes = (app) => {
    app.use('/', root)
    app.use('/users', users)
    // etc..
}

export default mountRoutes