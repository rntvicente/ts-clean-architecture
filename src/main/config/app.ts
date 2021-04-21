import Express from 'express'

import setupMiddleware from './middlewares'
import setupRoutes from './routes'

const app = Express()
setupMiddleware(app)
setupRoutes(app)

export default app
