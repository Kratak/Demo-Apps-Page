import { combineReducers } from 'redux';
import { exchangeRatesListReducer, ExchangeRatesListState } from './list';

export interface CurrencyAppState {
  exchangeRatesList: ExchangeRatesListState;
}

export const currencyAppReducers = combineReducers<CurrencyAppState>({
  exchangeRatesList: exchangeRatesListReducer,
});
