import { AnyAction } from "redux";
import { Language } from "../interfaces/avaibleLangueges";
import { ActionTypes } from "../constans/actionTypes";

export interface PageSettingsFields {
  language: Language;
  locale: Language;
}

export interface LanguageChangeState extends PageSettingsFields {}

export const initialPageSettingsState: LanguageChangeState = {
  language: Language.Pl,
  locale: Language.Pl
};

export const languageChangeReducer = (
  state: LanguageChangeState = initialPageSettingsState,
  action: AnyAction
): LanguageChangeState => {
  switch (action.type) {
    case ActionTypes.CHANGE_LANGUAGE: {
      return {
        ...state,
        language: action.payload.language
      };
    }
    default:
      return state;
  }
};
