import config from './config/env'
import { MongoHelper } from '../infra/db/mongodb/mongo-helper'

MongoHelper.connect(config.mongoUrl)
  .then(async () => {
    const app = (await import('./config/app')).default
    app.listen(config.port, () => console.log(`Server running at port: ${config.port}`))
  })
  .catch(console.error)
