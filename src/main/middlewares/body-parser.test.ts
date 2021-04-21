import request from 'supertest'

import app from '../config/app'

describe('Body Parser Middlaware', () => {
  test('Should parse body as json', async () => {
    app.post('/post_body_request', (req, res) => {
      res.send(req.body)
    })

    const expected = { name: 'post_body_request' }

    await request(app)
      .post('/post_body_request')
      .send(expected)
      .expect(expected)
  })
})
