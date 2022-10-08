import { ColorScheme } from '@mantine/styles';
import { atom } from 'recoil';

export enum SchemaType {
  Light = 'light',
  Dark = 'dark'
}

export const atomColorSchema = atom<ColorScheme>({
  key: 'colorSchema',
  default: SchemaType.Light
});
