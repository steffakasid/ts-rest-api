import Route from "./Route"
import Health from "../controllers/Health"
import Index from "../controllers/Index"
import Json from "../controllers/Json"
import HTTP_METHODS from "./HTTP_METHODS"


class Routes {

    private routes: Route[]

    constructor() {
        this.routes = [
            new Route({method: HTTP_METHODS.get, path: "/health", handler: new Health()}),
            new Route({method: HTTP_METHODS.get, path: "/", handler: new Index()}),
            new Route({method: HTTP_METHODS.get, path: "/json", handler: new Json()})
        ]
    }

    public getRoutes(): Route[] {
        return this.routes
    }
}

export default Routes