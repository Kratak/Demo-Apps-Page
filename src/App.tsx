import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { reducers } from "./reducers";

const middleware = [thunk];

const store = createStore(reducers, applyMiddleware(...middleware));

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>test</div>
    </Provider>
  );
};

export default App;
