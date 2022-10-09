import { MantineProvider } from '@mantine/core';
import React, { FC, ReactNode } from 'react';
import { useRecoilValue } from 'recoil';
import { atomColorScheme } from './atoms/colorSchemeAtom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Links } from './consts/HeaderLinks';

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const colorScheme = useRecoilValue(atomColorScheme);

  return (
    <>
      <MantineProvider
        theme={{ colorScheme: colorScheme }}
        withGlobalStyles={true}
        withNormalizeCSS={true}
      >
        <Header links={Links} />
        {children}
        <Footer />
      </MantineProvider>
    </>
  );
};
