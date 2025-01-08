import { createBrowserRouter } from 'react-router-dom';
import { NotFoundPage } from './pages/error-page/404'
import { Home } from './pages/home/index'

export const routes: IRoutes = {
    root: {
        path: '/',
        display: 'Home'
    },
    notfound: {
        path: '*',
        display: 'Not found',
      },
    
}
export const router = createBrowserRouter([
    {
        path: routes.root.path,
        element: <Home />
    },
    {
        path: routes.notfound.path,
        element: <NotFoundPage />
    }
]);

export interface IRoute {
    path: string,
    display: string
}

export interface IRoutes {
    root: IRoute;
    notfound: IRoute;
}