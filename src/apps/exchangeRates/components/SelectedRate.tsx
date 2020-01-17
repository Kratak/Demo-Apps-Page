import BigNumber from 'bignumber.js';
import { converter } from '../utils/calculateExchanagerRateConverter';
import { ExchangeRatesLayout } from '../styles/ExchangeRatesLayout';
import React from 'react';
import ExchangeRate from '../domain/ExchangeRate';

interface Props {
  rate: ExchangeRate | null;
}

const SelectedRate = (props: Props): JSX.Element => {
  const { rate } = props;

  if (!rate) {
    return <></>;
  }

  const localeMidRate = new BigNumber(rate.mid)
    .multipliedBy(converter(rate.mid))
    .toNumber();

  const rateString = `${converter(rate.mid)} ${
    rate.code
  } = ${localeMidRate} PLN`;

  return (
    <ExchangeRatesLayout.CurrencyRate selected>
      <ExchangeRatesLayout.CurrencyRate__Flag />
      <ExchangeRatesLayout.CurrencyRate__Description>
        <p>Wybrana waluta</p>
        <p>{rate.code + ' ' + rate.currency}</p>
        <p>{rateString}</p>
      </ExchangeRatesLayout.CurrencyRate__Description>
    </ExchangeRatesLayout.CurrencyRate>
  );
};

export { SelectedRate };
