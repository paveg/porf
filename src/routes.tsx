import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Profile, Root, NotFound } from './containers';

export const AppRoutes = createBrowserRouter([
  { path: '/', element: <Root /> },
  { path: '/profile', element: <Profile /> },
  { path: '*', element: <NotFound /> }
]);
