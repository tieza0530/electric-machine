import { createBrowserRouter } from 'react-router-dom';
import { NotFoundPage } from '../pages/error-page/404'

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
        element: <NotFoundPage />
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