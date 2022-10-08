import { Button } from '@mantine/core';
import React, { FC } from 'react';
import { useRecoilState } from 'recoil';

import { atomColorSchema, SchemaType } from '../../atoms/colorSchemaAtom';

export const ColorSchemaButton: FC = () => {
  const [colorSchema, setColorSchema] = useRecoilState(atomColorSchema);

  return (
    <Button
      compact={true}
      ml='md'
      mr='md'
      onClick={() => {
        colorSchema === SchemaType.Light
          ? setColorSchema(SchemaType.Dark)
          : setColorSchema(SchemaType.Light);
      }}
      radius='md'
      size='xs'
    >
      {colorSchema === SchemaType.Light ? 'Dark Mode' : 'Light Mode'}
    </Button>
  );
};
