import { Container, Title } from '@mantine/core';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Layout } from '../Layout';

export const Root: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Layout>
        <Container>
          <Title size='h1'>Home</Title>
          {t('key')}
        </Container>
      </Layout>
    </>
  );
};
