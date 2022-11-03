import { Container, Title, Group, Spoiler, List, Text } from '@mantine/core';
import React, { FC } from 'react';
import { ProfileCard } from '../components/ProfileCard';
import { Layout } from '../Layout';

export const Profile: FC = () => {
  return (
    <>
      <Layout>
        <Container>
          <Title mb='xl' size='h1'>
            About Me
          </Title>
          <Title mb='lg' order={2} size='h3'>
            Careers
          </Title>
          <Group mb='xl'>
            <Spoiler hideLabel='Hide' maxHeight={120} showLabel='Show more'>
              <List>
                <Title order={3} size='h5' underline>
                  <Text component='span'>XTOP technology.inc</Text>{' '}
                  <Text component='span'>(Apr 2015 - Oct 2015)</Text>
                </Title>
                <List.Item>Network Engineer</List.Item>
                <Title order={3} size='h5' underline>
                  <Text component='a' href='https://corp.acall.jp/' target='_blank' variant='link'>
                    ACALL K.K.
                  </Text>{' '}
                  <Text component='span'>(Aug 2018 - Aug 2019)</Text>
                </Title>
                <List.Item>Application Engineer as a side job</List.Item>
                <Title order={3} size='h5' underline>
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
                <List.Item>Software Engineer</List.Item>
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
