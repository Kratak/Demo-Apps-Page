import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { configureStore, history } from './configureStore';
import Navigation from './common/components/Navigation';
import BodyContent from './common/components/BodyContetn';
import GlobalStyles from './common/components/GlobalStyle';
import CurrencyApp from './apps/exchangeRates/CurrencyApp';
import { appUrls } from './common/constans/appUrls';
import { ThemeProvider } from 'styled-components';
import { PalletsNames, theme } from './common/constans/theme';

const store = configureStore();

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <ThemeProvider
            theme={theme(PalletsNames.DEFAULT)}
            // theme={theme(store.getState().languageChange.}
          >
            <BodyContent>
              <Navigation />
              <Switch>
                <Route
                  exact
                  path={appUrls.exchangeRateApp}
                  component={CurrencyApp}
                />
                <Route
                  exact
                  path={appUrls.weatherApp}
                  component={CurrencyApp}
                />
                <Route exact path={appUrls.gpApp} component={CurrencyApp} />
              </Switch>
            </BodyContent>
          </ThemeProvider>
        </ConnectedRouter>
      </Provider>
    </>
  );
};

export default App;
