
import { NextFunction, Request, Response } from 'express'
import IMiddleware from './IMiddleware'

class Logger implements IMiddleware {
    handleRequestAndForward = (req: Request, res: Response, next: NextFunction) => {
        console.log('Request logged:', req.method, req.path)
        next()
    }
}

export default Logger