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
                <List.Item>Apr, 2015 - Started my career as a Network Engineer</List.Item>
                <List.Item>Nov, 2015 - Joined freee K.K. as a Software Engineer</List.Item>
                <List listStyleType='disc' withPadding={true}>
                  <List.Item>
                    Nov, 2015 - At first, engaged account aggregation development and maintained it.
                    <br />
                    And I managed small operation team.
                  </List.Item>
                  <List.Item>
                    Jul, 2018 - Secondly, was assigned to API team with the Bank. <br />I engaged
                    development of the bank API integration and its PjM
                  </List.Item>
                </List>
                <List.Item>
                  <Text component='span'>
                    Aug, 2018 - Joined{' '}
                    <Text
                      component='a'
                      href='https://corp.acall.jp/'
                      target='_blank'
                      variant='link'
                    >
                      ACALL K.K.
                    </Text>{' '}
                    as a side business
                  </Text>
                </List.Item>
                <List.Item>Jun, 2019 - Was assigned to the funding development team</List.Item>
                <List listStyleType='disc' withPadding={true}>
                  <List.Item>
                    <Text component='span'>
                      Jun, 2019 - Developed{' '}
                      <Text
                        component='a'
                        href='https://www.freee.co.jp/financing/'
                        target='_blank'
                        variant='link'
                      >
                        資金調達freee β版
                      </Text>{' '}
                      from scratch
                    </Text>
                  </List.Item>
                  <List.Item>
                    Jun, 2020 - Released 資金調達freee β版 and developed and maintained growth phase
                  </List.Item>
                </List>
                <List.Item>Jul, 2022 - Was assigned to Global development team</List.Item>
              </List>
            </Spoiler>
          </Group>
          <Title mb='lg' order={2} size='h3'>
            Personal Background
          </Title>
          <Group mb='xl'>
            <Spoiler hideLabel='Hide' maxHeight={120} showLabel='Show more'>
              <List>
                <List.Item>Dec, 1991 - Born in Tokyo, Japan and raised in Saitama</List.Item>
                <List.Item>May, 2004 - Graduated from Sunahara elementary school</List.Item>
                <List.Item>May, 2007 - Graduated from Washinomiya junior high school</List.Item>
                <List.Item>May, 2010 - Graduated from Shohei high school</List.Item>
                <List.Item>
                  May, 2015 - Graduated from Senshu University (Major in political science)
                </List.Item>
                <List.Item>Jul, 2016 - Moved to Tokyo</List.Item>
                <List.Item>Aug, 2021 - Moved to Saitama again from Tokyo</List.Item>
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
