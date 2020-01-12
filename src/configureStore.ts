import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore, PreloadedState } from "redux";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import { StoreFields, createRootReducer } from "./reducers";

export const history = createBrowserHistory();

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = (
  preloadedState?: PreloadedState<StoreFields>
) => {
  return createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancers(applyMiddleware(routerMiddleware(history), thunk))
  );
};
