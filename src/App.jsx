import React, { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import { AdminLayout, BaseLayout } from './layouts';
import Home from './pages/home/Home';
import Drinks from './pages/drinks/Drinks';
import Login from './pages/login/Login';
import AuthLayout from './layouts/auth-layout/AuthLayout';
import Register from './pages/register/Register';
import ForgotPassword from './pages/forgot-password/ForgotPassword';
import Information from './pages/information/Information';
import ChangePassword from './pages/change-password/ChangePassword';

// General

// Admin
const Dashboard = lazy(() => import('./pages/admin/dashboard/Dashboard'));

const App = () => {
    const routes = useRoutes([
        {
            path: '/admin',
            element: <AdminLayout />,
            children: [
                {
                    index: true,
                    element: <Dashboard />,
                },
            ],
        },
        {
            path: '',
            element: <BaseLayout />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: '/drinks',
                    element: <Drinks />,
                },

            ],
        },
        {
            path: '',
            element: <AuthLayout />,
            children: [
                {
                    path: '/login',
                    element: <Login />,
                },
                {
                    path: '/register',
                    element: <Register />,
                },
                {
                    path: '/forgot-password',
                    element: <ForgotPassword />,
                },
                {
                    path: '/information',
                    element: <Information />,
                },
                {
                    path: '/change-password',
                    element: <ChangePassword />,
                },
            ],
        },

    ]);
    return <>{routes}</>;
};

export default App;
