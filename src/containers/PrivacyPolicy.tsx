import { Container, Group, Title, Text } from '@mantine/core';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Layout } from '../Layout';

export const PrivacyPolicy: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Layout>
        <Container>
          <Title align='center' size='h1'>
            {t('privacyTitle')}
          </Title>
          <Group>
            <Text inline size='sm'></Text>
          </Group>
        </Container>
      </Layout>
    </>
  );
};
