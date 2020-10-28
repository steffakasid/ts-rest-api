import * as express from 'express'
import { Application } from 'express'
import Routes from './Routes'
import HTTP_METHODS from './HTTP_METHODS'
import IMiddleware from '../middleware/IMiddleware'

class Router {
    public app: Application
    public port: number

    constructor(init: { port: number; middleWares: IMiddleware[]; routes: Routes; }) {
        this.app = express()
        this.port = init.port

        this.initMiddlewares(init.middleWares)
        this.initRoutes(init.routes)
        this.app.use(this.errorHandler)
    }

    private initMiddlewares(middleWares: IMiddleware[]) {
        middleWares.forEach(middleWare => {
            this.app.use(middleWare.handleRequestAndForward)
        })
    }

    private initRoutes(routes: Routes) {
        routes.getRoutes().forEach(route => {
            switch (route.method) {
                case HTTP_METHODS.post: this.app._router.post(route.path, route.handler.handleRequest); break;
                case HTTP_METHODS.get:
                default: case HTTP_METHODS.get: this.app._router.get(route.path, route.handler.handleRequest)
            }
        })
    }

    private errorHandler(err, req, res, next) {
        console.log("Handling Error!")
        if (res.headersSent) {
            return next(err)
        }
        res.status(500)
        res.json('error', { error: err })
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the http://localhost:${this.port}`)
        })
    }
}

export default Router