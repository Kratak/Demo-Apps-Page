import { Dispatch, AnyAction } from "redux";
import { CombineStoreFields } from "../../reducers";
import { Language } from "../interfaces/avaibleLangueges";
import { ActionTypes } from "../constans/actionTypes";

export const dispatchLanguage = (language: Language) => ({
  type: ActionTypes.CHANGE_LANGUAGE,
  payload: { language }
});

export const changeLanguage = (language: Language) => (
  dispatch: Dispatch<AnyAction>,
  getStore: () => CombineStoreFields
) => {
  if (getStore().languageChange.language !== Language.Dev) {
    dispatch(dispatchLanguage(language));
  }
};
