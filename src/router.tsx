import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Profile } from './containers/Profile';
import { Root } from './containers/Root';

export const Router = createBrowserRouter([
  { path: '/', element: <Root /> },
  { path: '/profile', element: <Profile /> }
]);
