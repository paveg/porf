import { Container, Title, Group, Spoiler, List, Text } from '@mantine/core';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ProfileCard } from '../components/ProfileCard';
import { Layout } from '../Layout';

export const Profile: FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Layout>
        <Container>
          <Title mb='xl' size='h1'>
            About Me
          </Title>
          <Title mb='lg' order={2} size='h3'>
            {t('careerTitle')}
          </Title>
          <Group mb='xl'>
            <Spoiler hideLabel='Hide' maxHeight={120} showLabel='Show more'>
              <List>
                <List.Item>
                  <Title order={3} size='h5' underline>
                    Software Engineer@
                    <Text
                      component='a'
                      href='https://www.freee.co.jp/'
                      target='_blank'
                      variant='link'
                    >
                      Freee K.K.
                    </Text>{' '}
                    <Text component='span'>(Nov 2015 - Present)</Text>
                  </Title>
                  <List listStyleType='disc' withPadding>
                    <List.Item>{t('freeeDetail1')}</List.Item>
                    <List.Item>{t('freeeDetail2')}</List.Item>
                    <List.Item>{t('freeeDetail3')}</List.Item>
                    <List.Item>{t('freeeDetail4')}</List.Item>
                  </List>
                </List.Item>
                <List.Item>
                  <Title order={3} size='h5' underline>
                    Application Engineer@
                    <Text
                      component='a'
                      href='https://corp.acall.jp/'
                      target='_blank'
                      variant='link'
                    >
                      ACALL K.K.
                    </Text>{' '}
                    <Text component='span'>(Aug 2018 - Aug 2019)</Text>
                  </Title>
                  <List listStyleType='disc' withPadding>
                    <List.Item>{t('acallDetail1')}</List.Item>
                    <List.Item>{t('acallDetail2')}</List.Item>
                    <List.Item>{t('acallDetail3')}</List.Item>
                  </List>
                </List.Item>
                <List.Item>
                  <Title order={3} size='h5' underline>
                    Network Engineer@
                    <Text component='span'>XTOP technology.inc</Text>{' '}
                    <Text component='span'>(Apr 2015 - Oct 2015)</Text>
                  </Title>
                  <List listStyleType='disc' withPadding>
                    <List.Item>{t('xtopDetail1')}</List.Item>
                  </List>
                </List.Item>
              </List>
            </Spoiler>
          </Group>
          <Group mb='lg'>
            <ProfileCard
              avatar='profile.jpeg'
              email='pavegy+work@gmail.com'
              name='Ryota Ikezawa'
              phone='080-5538-9043'
              title='Software Engineer'
            />
          </Group>
        </Container>
      </Layout>
    </>
  );
};
