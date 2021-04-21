import request from 'supertest'

import app from '../config/app'

describe('Signup', () => {
  test('Should returns account success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Dominic Toretto',
        email: 'dom@gmail.com',
        password: 'fast',
        passwordConfirmation: 'fast'
      })
      .expect(200)
  })
})
