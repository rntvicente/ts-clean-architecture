import EmailValidatorAdapter from './email-validator-adapter'

describe('EmailValidator Adapter', () => {
  test('Should return false when validator return false', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('invalid_email@mail.com')

    expect(isValid).toBeFalsy()
  })
})
