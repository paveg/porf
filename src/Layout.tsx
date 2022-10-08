import { MantineProvider } from '@mantine/core';
import React, { FC, ReactNode } from 'react';
import { useRecoilValue } from 'recoil';
import { atomColorSchema } from './atoms/colorSchemaAtom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Links } from './consts/HeaderLinks';

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const colorSchema = useRecoilValue(atomColorSchema);

  return (
    <>
      <MantineProvider
        theme={{ colorScheme: colorSchema }}
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
