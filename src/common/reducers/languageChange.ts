import { AnyAction } from "redux";
import { Language } from "../interfaces/avaibleLangueges";
import * as types from "../constans/actionTypes";

export interface PageSettingsFields {
  language: Language;
}

export interface LanguageChangeState extends PageSettingsFields {}

export const initialPageSettingsState: LanguageChangeState = {
  language: Language.Pl
};

export const languageChangeReducer = (
  state: LanguageChangeState = initialPageSettingsState,
  action: AnyAction
): LanguageChangeState => {
  switch (action.type) {
    case types.ADD_TODO: {
      return {
        ...state,
        language: action.payload.language
      };
    }
    default:
      return state;
  }
};
