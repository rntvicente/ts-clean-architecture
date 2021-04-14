import { MongoClient } from 'mongodb'

export const MongoHeper = {
  client: null as MongoClient,

  async connect () {
    this.client = await MongoClient.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  },

  async disconnect () {
    this.client.close()
  }
}
