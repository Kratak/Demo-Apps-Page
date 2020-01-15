import baseStyled, { ThemedStyledInterface } from 'styled-components';

interface ConfigFields {
  fontSize: {
    h1: string;
  };
}

interface PalletFields {
  dashboard: {
    navyBlue: string;
    leather: string;
    coral: string;
    eggshell: string;
  };
  currencyApp: {
    magenta: string;
    yellow: string;
    cyan: string;
    beige: string;
  };
  gpApp: {
    ice: string;
    plaster: string;
    freshWater: string;
    linen: string;
  };
  weatherApp: {
    stormy: string;
    cloud: string;
    sunset: string;
    evening: string;
  };
}
export enum PalletsNames {
  DEFAULT = 'default',
  // CONTRAST = 'contrast',
  // DARK = 'dark',
}

type PalletsFields = { [key in PalletsNames]: PalletFields };

interface ThemeFields {
  pallet: PalletFields;
  config: ConfigFields;
}

const pallets: PalletsFields = {
  default: {
    dashboard: {
      navyBlue: '#0F1626',
      leather: '#AB987A',
      coral: '#FF533D',
      eggshell: '#F5F5F5',
    },
    currencyApp: {
      magenta: '#F81B84',
      yellow: '#F6CE28',
      cyan: '#43C0F6',
      beige: '#F2EEE2',
    },
    gpApp: {
      ice: '#99D3DF',
      plaster: '#CECECE',
      freshWater: '#88BBD6',
      linen: '#E9E9E9',
    },
    weatherApp: {
      stormy: '#494E6B',
      cloud: '#98878F',
      sunset: '#985E6D',
      evening: '#192231',
    },
  },
};

const config: ConfigFields = {
  fontSize: {
    h1: '2rem',
  },
};

export const theme = (pallet?: PalletsNames): ThemeFields => ({
  config,
  pallet: pallets[pallet || PalletsNames.DEFAULT],
});

export { config, pallets };
export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
