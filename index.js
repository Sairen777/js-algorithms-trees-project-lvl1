class Router {
    constructor(routes) {
        this.routes = routes;
    }

    serve(path) {
        const existingRoute = this.routes.find(route => route.path === path);

        if (!existingRoute) {
            throw new Error(`No route for path ${path}`);
        }

        return existingRoute.handler;
    }
}

export function makeRouter(routes) {
    return new Router(routes);
})
