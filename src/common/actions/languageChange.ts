import { Dispatch, AnyAction } from "redux";
import { CombineReducersFields } from "../../reducers";
import { Language } from "../interfaces/avaibleLangueges";
import { ActionTypes } from "../constans/actionTypes";

export const dispatchLanguage = (language: Language) => ({
  type: ActionTypes.CHANGE_LANGUAGE,
  payload: { language }
});

export const changeLanguage = (language: Language) => (
  dispatch: Dispatch<AnyAction>,
  getStore: () => CombineReducersFields
) => {
  if (getStore().languageChange.language !== Language.Dev) {
    dispatch(dispatchLanguage(language));
  }
};
