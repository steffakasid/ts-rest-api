import { ICallback, ICallbackErrorHandler } from './ICallback'
import { IHandler } from './IHandler'
import { EMethods } from '../router/EMethods'
import { HttpError } from './HttpError'

import { NextFunction, Request, Response } from 'express'


export class Middleware implements IHandler {

  method: EMethods = EMethods.any
  callback: ICallback | ICallbackErrorHandler
  path: string

  constructor(callback: ICallback | ICallbackErrorHandler, path?: string) {
    this.callback = callback
    this.path = path
  }

  getCallback = () => { return this.callback }
}

export const Logger = new Middleware((req: Request, res: Response, next: NextFunction) => {
  console.log('Request logged:', req.method, req.path)
  next()
})

export const NotFoundErrorHandler = new Middleware((req: Request, res: Response, next: NextFunction) => {
  const err = new HttpError('Not Found')
  err.status = 404
  next(err)
})