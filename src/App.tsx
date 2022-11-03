import { use } from 'i18next';
import React, { FC, StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { initReactI18next } from 'react-i18next';
import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { NotFound } from './containers/NotFound';
import { ja, en } from './locales/index';
import { AppRoutes } from './routes';

use(initReactI18next).init({
  lng: 'ja',
  debug: true,
  fallbackLng: 'en',
  resources: {
    ja: ja,
    en: en
  }
});

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
