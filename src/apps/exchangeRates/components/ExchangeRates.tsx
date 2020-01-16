import React from 'react';
import ExchangeRate from '../domain/ExchangeRate';
import Uuid from '../../../common/utils/Uuid';
import { ExchangeRatesLayout } from '../styles/ExchangeRatesLayout';

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
        return (
          <ExchangeRatesLayout.CurrencyRate
            key={Uuid.generate()}
            onClick={() => onRateSelect(rate)}
          >
            <ExchangeRatesLayout.CurrencyRate__Flag />
            <div style={{ maxWidth: '15rem' }}>
              <p>ISO4217: {rate.code}</p>
              <p>Nazwa: {rate.currency}</p>
              <p>1 PLN = {rate.mid + ' ' + rate.code}</p>
            </div>
          </ExchangeRatesLayout.CurrencyRate>
        );
      })}
    </ExchangeRatesLayout.CurrencyRatesWrapper>
  );
};

export { ExchangeRatesSelect };
