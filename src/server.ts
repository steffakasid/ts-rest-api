import { Router } from './router/Router'

import * as bodyParser from 'body-parser'
import { Middleware , Logger, NotFoundErrorHandler } from './middleware/Middleware'
import { Health, Index, Json} from './middleware/Controller'
import { DefaultErrorHandler } from './middleware/ErrorHandler'

export const router = new Router({
  port: process.env.PORT ? Number(process.env.PORT) : 8080,
  handlers: [
    new Middleware(bodyParser.json()),
    new Middleware(bodyParser.urlencoded({ extended: true })),
    Logger,
    Health,
    Index,
    Json,
    NotFoundErrorHandler,
    DefaultErrorHandler
  ]
})

export const server = router.listen()