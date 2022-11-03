import { Group, Switch, useMantineTheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';
import React, { FC } from 'react';
import { useRecoilState } from 'recoil';
import { atomColorScheme, SchemeType } from '../../atoms/colorSchemeAtom';

export const ColorSchemeSwitch: FC = () => {
  const [colorScheme, setColorScheme] = useRecoilState(atomColorScheme);
  const theme = useMantineTheme();

  const toggleColorScheme = () => {
    colorScheme === SchemeType.Light
      ? setColorScheme(SchemeType.Dark)
      : setColorScheme(SchemeType.Light);
  };

  return (
    <Group my={30} position='center'>
      <Switch
        checked={colorScheme === SchemeType.Dark}
        mb={16}
        offLabel={<IconMoonStars color={theme.colors.gray[6]} size={20} stroke={1.5} />}
        onChange={() => toggleColorScheme()}
        onLabel={<IconSun color={theme.white} size={20} stroke={1.5} />}
        size='lg'
      />
    </Group>
  );
};
