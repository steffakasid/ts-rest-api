import { Request, Response } from 'express'
import IHandler from './IHandler'

class Index implements IHandler {
    public path = '/'

    handleRequest = (req: Request, res: Response) => {
        res.json('Server is running!')
    }
}

export default Index