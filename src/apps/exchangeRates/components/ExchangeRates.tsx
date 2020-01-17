import React from 'react';
import BigNumber from 'bignumber.js';
import ExchangeRate from '../domain/ExchangeRate';
import Uuid from '../../../common/utils/Uuid';
import { ExchangeRatesLayout } from '../styles/ExchangeRatesLayout';
import { converter } from '../utils/calculateExchanagerRateConverter';
import { Flag } from '../utils/flagSelector';

interface Props {
  onRateSelect: (exchangeRate: ExchangeRate) => void;
  exchangeRates: Array<ExchangeRate>;
}

const ExchangeRatesSelect = ({
  exchangeRates,
  onRateSelect,
}: Props): JSX.Element => {
  if (exchangeRates.length === 0) {
    return <>Brak wybranych walut</>;
  }

  return (
    <ExchangeRatesLayout.CurrencyRatesWrapper>
      {exchangeRates.map(rate => {
        const localeMidRate = new BigNumber(rate.mid)
          .multipliedBy(converter(rate.mid))
          .toNumber();

        const rateString = `${converter(rate.mid)} ${
          rate.code
        } = ${localeMidRate} PLN`;

        return (
          <ExchangeRatesLayout.CurrencyRate
            key={Uuid.generate()}
            onClick={() => onRateSelect(rate)}
          >
            <ExchangeRatesLayout.CurrencyRate__Flag>
              <Flag code={rate.code} />
            </ExchangeRatesLayout.CurrencyRate__Flag>
            <ExchangeRatesLayout.CurrencyRate__Description>
              <p>{rate.code}</p>
              <p>{rate.currency}</p>
              <p>{rateString}</p>
            </ExchangeRatesLayout.CurrencyRate__Description>
          </ExchangeRatesLayout.CurrencyRate>
        );
      })}
    </ExchangeRatesLayout.CurrencyRatesWrapper>
  );
};

export { ExchangeRatesSelect };
