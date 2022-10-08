import { MantineProvider } from '@mantine/core';
import React, { FC, StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Router } from './Router';

const App: FC = () => {
  return (
    <StrictMode>
      <MantineProvider withGlobalStyles={true} withNormalizeCSS={true}>
        <RouterProvider router={Router} />
      </MantineProvider>
    </StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />);
