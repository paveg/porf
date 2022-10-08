import { atom } from 'recoil';

type SchemaTypes = 'light' | 'dark';
export enum SchemaType {
  Light = 'light',
  Dark = 'dark'
}

export const atomColorSchema = atom<SchemaTypes>({
  key: 'colorSchema',
  default: SchemaType.Light
});
