import { AxiosError } from 'axios';
import { Dispatch } from 'redux';
import { CurrencyAppActionTypes as actionTypes } from '../constans/actionTypes';
import ExchangeRateDataProvider from '../provider/index';
import ExchangeRate from '../domain/ExchangeRate';

const fetchExchangeRatesBegin = () => ({
  type: actionTypes.FETCH_EXCHANGE_RATES_BEGIN,
});

export const fetchExchangeRatesSuccess = (exchangeRates: ExchangeRate[]) => ({
  type: actionTypes.FETCH_EXCHANGE_RATES_SUCCESS,
  payload: { exchangeRates },
});

const fetchExchangeRatesError = (error: AxiosError) => ({
  type: actionTypes.FETCH_EXCHANGE_RATES_ERROR,
  payload: { error },
});

export const fetchExchangeRates = (date: Date) => (dispatch: Dispatch) => {
  dispatch(fetchExchangeRatesBegin());

  return ExchangeRateDataProvider.getTableA(date)
    .then(res => {
      dispatch(fetchExchangeRatesSuccess(res.rates));
    })
    .catch(err => {
      dispatch(fetchExchangeRatesError(err));
    });
};
