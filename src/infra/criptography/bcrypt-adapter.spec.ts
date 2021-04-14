import Bcrypt from 'bcrypt'
import { BcryptAdapter } from './bcrypt-adapter'

jest.mock('bcrypt', () => ({
  async hash (): Promise<string> {
    return await new Promise(resolve => resolve('hash'))
  }
}))

describe('Bcrypt Adapter', () => {
  const salt = 12

  test('Should calls Bcrypt with correct value', async () => {
    const sut = new BcryptAdapter(salt)
    const hashSpy = jest.spyOn(Bcrypt, 'hash')

    await sut.encrypt('any_value')
    expect(hashSpy).toHaveBeenCalledWith('any_value', salt)
  })

  test('Should returns a hash on success', async () => {
    const sut = new BcryptAdapter(salt)

    const hash = await sut.encrypt('any_value')
    expect(hash).toBe('hash')
  })
})
