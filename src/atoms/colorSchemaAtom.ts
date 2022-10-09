import { ColorScheme } from '@mantine/styles';
import { atom } from 'recoil';
import { localStorageEffect } from './localStorageEffect';

export enum SchemaType {
  Light = 'light',
  Dark = 'dark'
}

const STATE_KEY = 'colorSchema';

export const atomColorSchema = atom<ColorScheme>({
  key: STATE_KEY,
  default: SchemaType.Light,
  effects_UNSTABLE: [localStorageEffect<ColorScheme>(STATE_KEY)]
});
