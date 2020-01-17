import { BigNumber } from 'bignumber.js';

const converter = (rate: number): number => {
  const localeRate = new BigNumber(rate);

  if (rate > 1) {
    return 1;
  }

  if (localeRate.multipliedBy(10).toNumber() > 1) {
    return 1;
  }

  if (localeRate.multipliedBy(100).toNumber() > 1) {
    return 100;
  }

  if (localeRate.multipliedBy(1000).toNumber() > 1) {
    return 100;
  }

  return 10000;
};

export { converter };
