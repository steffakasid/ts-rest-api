import IHandler from "../controllers/IHandler"
import HTTP_METHODS from "./HTTP_METHODS"

class Route {

    public method: HTTP_METHODS
    public path: string
    public handler: IHandler

    constructor(init: {method: HTTP_METHODS; path: string; handler: IHandler}) {
        this.method = init.method
        this.path = init.path
        this.handler = init.handler
    }

}

export default Route