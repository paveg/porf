import { Container, Title } from '@mantine/core';
import React, { FC } from 'react';
import { RoomInformation } from '../components/parts/RoomInformation';

import { Layout } from '../Layout';

export const Room: FC = () => {
  return (
    <>
      <Layout>
        <Container>
          <Title size='h1'>My Room Information</Title>
          <RoomInformation />
        </Container>
      </Layout>
    </>
  );
};
