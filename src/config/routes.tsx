import { Navigate, type RouteObject } from "react-router";
import { routesMasks } from "./routesMasks";

import App from '../App';
import { LoginPage } from '../pages/LoginPage';
import { MainPage } from '../pages/MainPage';
import { SignUpPage } from "../pages/SignUpPage";
import { FavoritePage } from "../pages/FavoritePage";

export const routes: RouteObject[] = [
    {
        path: routesMasks.main.mask, // '/'
        element: <App />,
        children: [
            {
                index: true,
                element: <MainPage />
            },
            {
                path: routesMasks.login.mask.replace(/^\//, ''), // 'login'
                element: <LoginPage />
            },
            {
                path: routesMasks.signup.mask.replace(/^\//, ''), // 'signup'
                element: <SignUpPage />
            },
            {
                path: routesMasks.favorite.mask.replace(/^\//, ''), // 'favorite'
                element: <FavoritePage />
            },
            {
                path: '*',
                element: <Navigate to={routesMasks.main.mask} replace />
            }
        ]
    }
]
