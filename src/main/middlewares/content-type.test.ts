import request from 'supertest'

import app from '../config/app'

describe('Content Type Middlaware', () => {
  test('Should return default content type json', async () => {
    app.get('/content_type_json', (req, res) => {
      res.send('')
    })

    await request(app)
      .get('/content_type_json')
      .expect('content-type', /json/)
  })
})
