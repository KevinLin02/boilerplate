import React from 'react';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import MainLayout from '../component';
import UserPage from '../pages/Users';
import LoginPage from '../pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/users',
        element: <UserPage />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

export default function Routes() {
  return (
    <RouterProvider router={router} />
  );
}
