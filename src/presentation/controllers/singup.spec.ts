import { SingUpController } from './signup'

describe('#SignUp Controller', () => {
  test('Should return 400 when no name is provided', () => {
    const sut = new SingUpController()

    const httpRequest = {
      body: {
        email: '',
        password: '',
        passwordConfirmation: ''
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
