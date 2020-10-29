import { Request, Response, NextFunction } from 'express'

export interface ICallback {
  (req: Request, res: Response, next?: NextFunction)
}

export interface ICallbackErrorHandler {
  (err: Error, req: Request, res: Response, next?: NextFunction)
}