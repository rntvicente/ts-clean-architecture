import validator from 'validator'

import EmailValidatorAdapter from './email-validator-adapter'

jest.mock('validator', () => ({
  isEmail () {
    return true
  }
}))

describe('EmailValidator Adapter', () => {
  test('Should return false when validator return false', () => {
    const sut = new EmailValidatorAdapter()

    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)

    const isValid = sut.isValid('invalid_email@mail.com')

    expect(isValid).toBeFalsy()
  })

  test('Should return true when validator return true', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('valid_email@mail.com')

    expect(isValid).toBeTruthy()
  })
})
