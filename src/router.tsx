import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

export const Router = createBrowserRouter([
	{ path: '/', element: <>Welcome to Home!</> },
	{ path: '/test', element: <>Welcome to Test! </> }
]);
