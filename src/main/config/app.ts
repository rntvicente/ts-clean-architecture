import Express from 'express'

import setupMiddleware from './middlewares'

const app = Express()
setupMiddleware(app)

export default app
