import * as express from 'express'
import { Server } from 'http'

import { EMethods } from './EMethods'
import { IHandler } from '../middleware/IHandler'

export class Router {
  public app: express.Application
  public port: number

  constructor(init: { port: number; handlers: IHandler[]}) {
    this.app = express()
    this.port = init.port

    this.initHandlers(init.handlers)
  }

  private initHandlers(handlers: IHandler[]) {
    handlers.forEach(handler => {
      switch (handler.method) {
        case EMethods.any: {
          if (handler.path) {
            this.app.use(handler.path, handler.getCallback())
          } else {
            this.app.use(handler.getCallback())
          }
          break
        }
        case EMethods.delete: this.app.delete(handler.path, handler.getCallback()); break
        case EMethods.patch: this.app.patch(handler.path, handler.getCallback()); break
        case EMethods.post: this.app.post(handler.path, handler.getCallback()); break
        case EMethods.put: this.app.put(handler.path, handler.getCallback()); break
        case EMethods.get:
        default: this.app.get(handler.path, handler.getCallback())
      }
    })
  }

  public listen(): Server {
    return this.app.listen(this.port, () => {
      console.log(`App listening on the http://localhost:${this.port}`)
    })
  }
}