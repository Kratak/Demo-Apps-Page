import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History, LocationState } from 'history';
import {
  languageChangeReducer,
  LanguageChangeState,
} from './common/reducers/languageChange';
import {
  currencyAppReducers,
  CurrencyAppState,
} from './apps/exchangeRates/reducers/reducers';

export interface StoreFields {
  router: LocationState;
  languageChange: LanguageChangeState;
  currencyAppReducers: CurrencyAppState;
}

export const createRootReducer = (history: History<StoreFields>) =>
  combineReducers<StoreFields>({
    router: connectRouter(history),
    languageChange: languageChangeReducer,
    currencyAppReducers: currencyAppReducers,
  });
