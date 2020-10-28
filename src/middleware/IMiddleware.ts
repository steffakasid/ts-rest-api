import { NextFunction, Request, Response } from "express";

interface IMiddleware {
    handleRequestAndForward(req: Request, res: Response, next: NextFunction)
}

export default IMiddleware