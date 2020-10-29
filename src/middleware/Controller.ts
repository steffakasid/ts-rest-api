import { Request, Response } from 'express'

import { ICallback } from './ICallback'
import { IHandler } from './IHandler'
import { EMethods } from '../router/EMethods'

export class Controller implements IHandler {

  method: EMethods
  callback: ICallback
  path: string

  constructor(method: EMethods, path: string, callback: ICallback) {
    this.method = method
    this.callback = callback
    this.path = path
  }

  getCallback = () => { return this.callback }
}

export const Health = new Controller(EMethods.get, '/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    time: new Date().toDateString()
  })
})

export const Index = new Controller(EMethods.get, '/', (req: Request, res: Response) => {
  res.json('Server is running!')
})

export const Json = new Controller(EMethods.get, '/json', (req: Request, res: Response) => {

  const users = [
    {
      id: 1,
      name: 'Ali'
    },
    {
      id: 2,
      name: 'Can'
    },
    {
      id: 3,
      name: 'Ahmet'
    }
  ]

  res.json(users)
})