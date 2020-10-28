import { Request, Response } from 'express'

interface IHandler {
    handleRequest(req: Request, res: Response): any
}

export default IHandler