import { combineReducers } from "redux";
import {
  languageChangeReducer,
  LanguageChangeState
} from "./common/reducers/languageChange";

export interface CombineReducersFields {
  languageChange: LanguageChangeState;
}

export const reducers = combineReducers<CombineReducersFields>({
  languageChange: languageChangeReducer
});
