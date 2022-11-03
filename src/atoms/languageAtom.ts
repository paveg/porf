import { atom } from 'recoil';
import { localStorageEffect } from './localStorageEffect';

export enum LanguageType {
  En = 'en',
  Ja = 'ja'
}

const STATE_KEY = 'languageType';

export const atomColorScheme = atom<LanguageType>({
  key: STATE_KEY,
  default: LanguageType.Ja,
  effects_UNSTABLE: [localStorageEffect<LanguageType>(STATE_KEY)]
});
