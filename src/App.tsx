import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { configureStore, history } from './configureStore';
import Navigation from './common/components/Navigation';
import BodyContent from './common/components/BodyContetn';
import GlobalStyles from './common/components/GlobalStyle';

const store = configureStore();

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <BodyContent>
            <Navigation />
          </BodyContent>
        </ConnectedRouter>
      </Provider>
    </>
  );
};

export default App;
