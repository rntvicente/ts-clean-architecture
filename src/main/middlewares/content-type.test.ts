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

  test('Should return xml content type when forced', async () => {
    app.get('/content_type_xml', (req, res) => {
      res.type('xml')
      res.send('')
    })

    await request(app)
      .get('/content_type_xml')
      .expect('content-type', /xml/)
  })
})
