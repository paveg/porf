import { Container, Title } from '@mantine/core';
import React, { FC } from 'react';

import { Layout } from '../Layout';

export const Root: FC = () => {
  return (
    <>
      <Layout>
        <Container>
          <Title size='h1'>Home</Title>
        </Container>
      </Layout>
    </>
  );
};
