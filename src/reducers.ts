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
} from './apps/currency/reducers/reducers';

export interface CombineStoreFields {
  router: LocationState;
  languageChange: LanguageChangeState;
  currencyAppReducers: CurrencyAppState;
}

export const createRootReducer = (history: History<CombineStoreFields>) =>
  combineReducers<CombineStoreFields>({
    router: connectRouter(history),
    languageChange: languageChangeReducer,
    currencyAppReducers: currencyAppReducers,
  });
