import { createStyles, Avatar, Text, Group } from '@mantine/core';
import { IconPhoneCall, IconAt } from '@tabler/icons';
import React, { FC } from 'react';

const useStyles = createStyles((theme) => ({
  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5]
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`
  }
}));

interface ProfileCardProps {
  avatar: string;
  name: string;
  title: string;
  phone: string;
  email: string;
}

export const ProfileCard: FC<ProfileCardProps> = ({
  avatar,
  name,
  title,
  phone,
  email
}: ProfileCardProps) => {
  const { classes } = useStyles();
  return (
    <div>
      <Group noWrap={true}>
        <Avatar radius='md' size={94} src={avatar} />
        <div>
          <Text color='dimmed' size='xs' sx={{ textTransform: 'capitalize' }} weight={700}>
            {title}
          </Text>

          <Text
            className={classes.name}
            size='lg'
            sx={{ textTransform: 'capitalize' }}
            weight={500}
          >
            {name}
          </Text>

          <Group mt={3} noWrap={true} spacing={10}>
            <IconAt className={classes.icon} size={16} stroke={1.5} />
            <Text color='dimmed' size='xs'>
              {email}
            </Text>
          </Group>

          <Group mt={5} noWrap={true} spacing={10}>
            <IconPhoneCall className={classes.icon} size={16} stroke={1.5} />
            <Text color='dimmed' size='xs'>
              {phone}
            </Text>
          </Group>
        </div>
      </Group>
    </div>
  );
};
