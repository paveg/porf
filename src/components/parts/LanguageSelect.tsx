import { Select } from '@mantine/core';
import { IconWorld } from '@tabler/icons';
import i18next, { changeLanguage } from 'i18next';
import React, { FC } from 'react';

export const LanguageSelect: FC = () => {
  type Language = 'ja' | 'en';

  return (
    <Select
      data={[
        { value: 'ja', label: '日本語' },
        { value: 'en', label: 'English' }
      ]}
      defaultValue={i18next.language}
      icon={<IconWorld />}
      onChange={(e: Language) => {
        changeLanguage(e);
      }}
      size='xs'
    />
  );
};
