import { HttpResponse } from '../protocols/http'

export const badRequest = (error): HttpResponse => ({
  statusCode: 400,
  body: error
})
