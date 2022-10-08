import { Container } from '@mantine/core';
import React, { FC } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Links as headerLinks } from '../consts/HeaderLinks';

export const Profile: FC = () => {
  return (
    <>
      <Header links={headerLinks} />
      <Container>Profile Page</Container>
      <Footer />
    </>
  );
};
