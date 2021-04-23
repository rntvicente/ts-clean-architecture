import request from 'supertest'

import app from '../config/app'
import { MongoHelper } from '../../infra/db/helpers/mongo-helper'

describe('Signup', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  beforeEach(async () => {
    const collection = await MongoHelper.getCollection('accounts')
    await collection.deleteMany({})
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  test('Should returns account success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Dominic Toretto',
        email: 'dom@gmail.com',
        password: 'fast',
        passwordConfirmation: 'fast'
      })
      .expect(201)
  })
})
