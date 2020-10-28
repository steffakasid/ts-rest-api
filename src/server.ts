import Router from './router/Router'

import * as bodyParser from 'body-parser'
import Logger from './middleware/Logger'

import Routes from './router/Routes'

const router = new Router({
    port: process.env.PORT ? Number(process.env.PORT) : 8080,
    routes: new Routes(),
    middleWares: [
        {
            handleRequestAndForward: bodyParser.json()
        },
        {
            handleRequestAndForward: bodyParser.urlencoded({ extended: true })
        },
        new Logger()
    ]
})

router.listen()