import baseStyled, { ThemedStyledInterface } from 'styled-components';

interface ConfigFields {
  fontSize: {
    h1: string;
  };
}

interface PalletFields {
  primary: string;
}

interface PalletsFields {
  default: PalletFields;
  dark: PalletFields;
  contrast: PalletFields;
}

interface ThemeFields {
  pallet: PalletFields;
  config: ConfigFields;
}

const pallets: PalletsFields = {
  default: {
    primary: '',
  },
  dark: {
    primary: '',
  },
  contrast: {
    primary: '',
  },
};

const config: ConfigFields = {
  fontSize: {
    h1: '2rem',
  },
};

export const theme: ThemeFields = {
  pallet: pallets.default,
  config,
};

export { config, pallets };
export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
