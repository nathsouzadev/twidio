import { Request } from 'express'
import { Params } from 'express-serve-static-core'

export function makeMockRequest ({ params, query }:
    { params?: Params, query?: Params }): Request {
  const request = {
    params: params || {},
    query: query || {}
  } as unknown

  return request as Request
}
