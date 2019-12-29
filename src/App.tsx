import React from "react";
import { Provider } from "react-redux";
import CurrencyApp from "./apps/currency/CurrencyApp";
import { configureStore, history } from "./configureStore";
import { ConnectedRouter } from "connected-react-router";

const store = configureStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <CurrencyApp />
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
