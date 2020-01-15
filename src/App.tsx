import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { configureStore, history } from './configureStore';
import Navigation from './common/components/Navigation';
import PageWrapper from './common/styles/PageWrapper';
import GlobalStyles from './common/components/GlobalStyle';
import CurrencyApp from './apps/exchangeRates/CurrencyApp';
import { appUrls } from './common/constans/appUrls';
import { ThemeProvider } from 'styled-components';
import { PalletsNames, theme, pallets } from './common/constans/theme';

const store = configureStore();

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <ThemeProvider
            theme={{
              config: theme.config,
              pallet: pallets[PalletsNames.DEFAULT],
              // pallet: pallets[store.getState().languageChange.locale],
            }}
          >
            <PageWrapper>
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
            </PageWrapper>
          </ThemeProvider>
        </ConnectedRouter>
      </Provider>
    </>
  );
};

export default App;
