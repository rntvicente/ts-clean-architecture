import { SingUpController } from './signup'

describe('#SignUp Controller', () => {
  test('Should return 400 when no name is provided', () => {
    const sut = new SingUpController()
    const expectedBody = new Error('Missing param: name')

    const httpRequest = {
      body: {
        email: 'any_email',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(expectedBody)
  })
})
