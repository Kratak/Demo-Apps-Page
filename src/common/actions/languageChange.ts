import { Dispatch ,AnyAction } from "redux";
import * as types from "../constans/actionTypes";
import { CombineReducersFields } from "../../reducers";
import { Language } from "../interfaces/avaibleLangueges";

export const dispatchLanguage = (language: Language) => ({
  type: types.ADD_TODO,
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
