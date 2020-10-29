import { EMethods } from '../router/EMethods'
import { ICallback, ICallbackErrorHandler } from './ICallback'

export interface IHandler {
  method: EMethods
  path?: string
  getCallback(): ICallback | ICallbackErrorHandler | ICallback[] | ICallbackErrorHandler[]
}
