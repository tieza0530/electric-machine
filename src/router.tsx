import { createBrowserRouter } from 'react-router-dom';
import { NotFoundPage } from './pages/error-page/404'
import { Home } from './pages/home/index'
import { WarrantyProcess } from './pages/warranty-process';

export const routes: IRoutes = {
    root: {
        path: '/',
        display: 'Home'
    },    
    warrantyProcess: {
        path: '/warranty-process',
        display: 'Warranty Process'
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
        path: routes.warrantyProcess.path,
        element: <WarrantyProcess/>
    },
    {
        path: routes.notfound.path,
        element: <NotFoundPage />
    },
]);

export interface IRoute {
    path: string,
    display: string
}

export interface IRoutes {
    root: IRoute;
    notfound: IRoute;
    warrantyProcess: IRoute;
}