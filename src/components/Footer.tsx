import { createStyles, Group, ActionIcon, Container, Anchor } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconBeer } from '@tabler/icons';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

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

type Props = {
  links: {
    link: string;
    label: string;
  }[];
};

export const Footer: FC<Props> = ({ links }: Props) => {
  const { classes } = useStyles();
  const navigate = useNavigate();

  const openExternalLink = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    link: string
  ) => {
    event.preventDefault();
    window.open(link);
  };

  const items = links.map((link) => (
    <Anchor<'a'>
      color='dimmed'
      href={link.link}
      key={link.label}
      onClick={(event) => {
        event.preventDefault();
        navigate(link.link);
      }}
      size='sm'
      sx={{ lineHeight: 1 }}
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <IconBeer size={28} />
        <Group className={classes.links}>{items}</Group>
        <Group className={classes.links} noWrap={true} position='right' spacing={0}>
          <ActionIcon
            mr='md'
            onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
              openExternalLink(event, 'https://twitter.com/_pavlog');
            }}
            radius='xl'
            size='lg'
            variant='default'
          >
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            mr='md'
            onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
              openExternalLink(event, 'https://www.youtube.com/channel/UCOzQFkpb0_XvHnC-wPh_h0g');
            }}
            radius='xl'
            size='lg'
            variant='default'
          >
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            mr='md'
            onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
              openExternalLink(event, 'https://www.instagram.com/_pavlog/');
            }}
            radius='xl'
            size='lg'
            variant='default'
          >
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
};
