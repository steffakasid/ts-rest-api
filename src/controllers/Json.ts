import { Request, Response } from 'express'
import IHandler from './IHandler'

class Json implements IHandler {

    handleRequest = (req: Request, res: Response) => {

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
    }
}

export default Json