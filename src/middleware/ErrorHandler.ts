import { ICallbackErrorHandler } from './ICallback'
import { IHandler } from './IHandler'
import { EMethods } from '../router/EMethods'

export class ErrorHandler implements IHandler {

  method: EMethods = EMethods.any
  callback: ICallbackErrorHandler

  constructor(callback: ICallbackErrorHandler) {
    this.callback = callback
  }

  getCallback = () => { return this.callback }
}

export const DefaultErrorHandler = new ErrorHandler((err, req, res, next) => {
  console.log('Handling Error!')
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.json({ error: err })
})