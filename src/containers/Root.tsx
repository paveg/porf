import { Container } from '@mantine/core';
import React, { FC } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Links } from '../consts/HeaderLinks';

export const Root: FC = () => {
  return (
    <>
      <Header links={Links} />
      <Container>Home Page</Container>
      <Footer />
    </>
  );
};
