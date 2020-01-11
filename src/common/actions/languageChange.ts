import { Dispatch, AnyAction } from "redux";
import { StoreFields } from "../../reducers";
import { Language } from "../interfaces/avaibleLangueges";
import { ActionTypes } from "../constans/actionTypes";

export const dispatchLanguage = (language: Language) => ({
  type: ActionTypes.CHANGE_LANGUAGE,
  payload: { language }
});

export const changeLanguage = (language: Language) => (
  dispatch: Dispatch<AnyAction>,
  getStore: () => StoreFields
) => {
  if (getStore().languageChange.language !== Language.Dev) {
    dispatch(dispatchLanguage(language));
  }
};
