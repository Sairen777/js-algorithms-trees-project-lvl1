const routes = [
    {
      // Роутеры используется как часть на конкретном сайте, поэтому роутеру нужно знать лишь про сами маршруты на сайте
      // не учитываем протокол, хост и т. д.
      path: '/courses', // маршрут
      handler: () => 'courses!', // обработчик
    },
    {
      path: '/courses/basics',
      handler: () => 'basics',
    },
];

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

function makeRouter(routes) {
    return new Router(routes);
})

const router = makeRouter(routеs);

const path = '/courses';
const handler = router.serve(path);
handler(); // courses!

// здесь выбросится исключение
router.serve('/no_such_way'); // Error