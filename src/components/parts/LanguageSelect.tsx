import { Select } from '@mantine/core';
import { IconWorld } from '@tabler/icons';
import i18next, { changeLanguage } from 'i18next';
import React, { FC, useCallback } from 'react';

export const LanguageSelect: FC = () => {
  type Language = 'ja' | 'en-US';

  const handleOnChange = useCallback((e: Language) => {
    changeLanguage(e);
  }, []);

  return (
    <Select
      data={[
        { value: 'ja', label: '日本語' },
        { value: 'en-US', label: 'English' }
      ]}
      defaultValue={i18next.language}
      icon={<IconWorld />}
      onChange={handleOnChange}
      size='xs'
    />
  );
};
