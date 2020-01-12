import { AnyAction } from 'redux';
import { CurrencyAppActionTypes as actionTypes } from '../constans/actionTypes';
import { RequestState } from '../../../common/interfaces/requestState';
import {
  InitialRequestState,
  initialRequestState,
} from '../../../common/reducers/initialRequestState';
import ExchangeRate from '../domain/ExchangeRate';

export interface ExchangeRatesListState extends InitialRequestState {
  value: ExchangeRate[];
}

const initialState: ExchangeRatesListState = {
  ...initialRequestState,
  value: [],
};

export const exchangeRatesListReducer = (
  state = initialState,
  action: AnyAction
): ExchangeRatesListState => {
  switch (action.type) {
    case actionTypes.FETCH_EXCHANGE_RATES_BEGIN:
      return {
        ...state,
        requestState: RequestState.Pending,
        error: null,
      };

    case actionTypes.FETCH_EXCHANGE_RATES_SUCCESS:
      return {
        ...state,
        requestState: RequestState.Success,
        value: action.payload.exchangeRates,
        error: null,
      };

    case actionTypes.FETCH_EXCHANGE_RATES_ERROR:
      return {
        ...state,
        requestState: RequestState.Error,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
