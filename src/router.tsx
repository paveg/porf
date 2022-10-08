import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Profile, Root } from './containers';

export const Router = createBrowserRouter([
  { path: '/', element: <Root /> },
  { path: '/profile', element: <Profile /> }
]);
