export type classNamesFields = {
  // common
  paper: string;

  // body
  pageWrapper: string;
  pageWrapper__element: string;

  // navigation
  navigation: string;
  navigation__paper: string;
  navigation__button: string;

  // exchangeRatesApp
  exchangeRates__paper: string;
  exchangeRates__calculator: string;
  exchangeRates__currencyRate: string;
  exchangeRates__currencyRate_flag: string;
  exchangeRates__currencyRate_description: string;
  exchangeRates__currencyWrapper: string;
  exchangeRates__selectedCurrencyRate: string;
  exchangeRates__search: string;
};

export const classNames: classNamesFields = {
  // common
  paper: 'paper',

  // body
  pageWrapper: 'page-wrapper',
  pageWrapper__element: 'page-wrapper__element',

  // navigation
  navigation: 'navigation',
  navigation__paper: 'navigation__paper',
  navigation__button: 'navigation__button',

  // exchangeRatesApp
  exchangeRates__paper: 'exchange-rates__paper',
  exchangeRates__calculator: 'exchange-rates__calculator',
  exchangeRates__currencyRate: 'exchange-rates__currencyRate',
  exchangeRates__currencyRate_flag: 'exchange-rates__currencyRate_flag',
  exchangeRates__currencyRate_description: 'exchange-rates__currencyRate_description',
  exchangeRates__currencyWrapper: 'exchange-rates__currencyWrapper',
  exchangeRates__selectedCurrencyRate: 'exchange-rates__selectedCurrencyRate',
  exchangeRates__search: 'exchange-rates__search',
};
