import { ColorScheme } from '@mantine/styles';
import { atom } from 'recoil';
import { localStorageEffect } from './localStorageEffect';

export enum SchemeType {
  Light = 'light',
  Dark = 'dark'
}

const STATE_KEY = 'colorScheme';

export const atomColorScheme = atom<ColorScheme>({
  key: STATE_KEY,
  default: SchemeType.Light,
  effects_UNSTABLE: [localStorageEffect<ColorScheme>(STATE_KEY)]
});
