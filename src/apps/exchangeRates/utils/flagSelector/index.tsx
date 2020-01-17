import * as React from 'react';
import { flags } from './flags';
import { Currencies } from '../../constans/curriencesCodes';

export const Flag = ({ code }: { code: Currencies }): JSX.Element => {
  return flags[code];
};
