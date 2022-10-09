import React, { FC, StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { NotFound } from './containers/NotFound';
import { AppRoutes } from './routes';

const App: FC = () => {
  return (
    <StrictMode>
      <RecoilRoot>
        <RouterProvider fallbackElement={<NotFound />} router={AppRoutes} />
      </RecoilRoot>
    </StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />);
