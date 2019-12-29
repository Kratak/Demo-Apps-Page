import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import {History, LocationState} from "history";
import {
  languageChangeReducer,
  LanguageChangeState
} from "./common/reducers/languageChange";

export interface CombineStoreFields {
  router: LocationState;
  languageChange: LanguageChangeState;
}

export const createRootReducer = (history: History<CombineStoreFields>) =>
  combineReducers<CombineStoreFields>({
    router: connectRouter(history),
    languageChange: languageChangeReducer
  });
