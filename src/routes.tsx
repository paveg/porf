import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Profile, Root, NotFound, PrivacyPolicy, Room } from './containers';

export const AppRoutes = createBrowserRouter([
  { path: '/', element: <Root /> },
  { path: '/profile', element: <Profile /> },
  { path: '/room', element: <Room /> },
  { path: '/privacy', element: <PrivacyPolicy /> },
  { path: '*', element: <NotFound /> }
]);
