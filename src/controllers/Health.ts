import { Request, Response } from 'express'
import IHandler from './IHandler'

class Health implements IHandler {

    handleRequest = (req: Request, res: Response) => {
        res.json({
            status: "Everything ok",
            time: new Date().toDateString()
        })
    }
}

export default Health