import { createStyles, Group, ActionIcon, Container } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconBeer } from '@tabler/icons';
import React from 'react';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column'
    }
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md
    }
  }
}));

export function Footer() {
  const { classes } = useStyles();

  const openExternalLink = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    link: string
  ) => {
    event.preventDefault();
    window.open(link);
  };

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <IconBeer size={28} />
        <Group spacing={0} className={classes.links} position='right' noWrap={true}>
          <ActionIcon
            mr='md'
            onClick={(event) => {
              openExternalLink(event, 'https://twitter.com/_pavlog');
            }}
            size='lg'
            variant='default'
            radius='xl'
          >
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            mr='md'
            onClick={(event) => {
              openExternalLink(event, 'https://www.youtube.com/channel/UCOzQFkpb0_XvHnC-wPh_h0g');
            }}
            size='lg'
            variant='default'
            radius='xl'
          >
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            mr='md'
            onClick={(event) => {
              openExternalLink(event, 'https://www.instagram.com/_pavlog/');
            }}
            size='lg'
            variant='default'
            radius='xl'
          >
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
