import { styled } from '../../../common/constans/theme';
import { classNames } from '../../../common/constans/classNames';

const Paper = styled.div.attrs(props => ({
  className: props.className || classNames.exchangeRates__paper,
}))`
  /* 1. Box model: */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  width: 80vw;
  /* 2. Positioning: */
  align-self: center;
  /* 3. Visual (Borders & Background): */
  /* 4. Typography: */
  /* 5 .Misc: */
  @${({ theme }) => theme.config.media.breakpoints.md} {
    /* 1. Box model: */
    flex-direction: row;
    padding: 2rem;
    margin: 2rem;
    /* 2. Positioning: */
    /* 3. Visual (Borders & Background): */
    /* 4. Typography: */
    /* 5 .Misc: */
  }
  @${({ theme }) => theme.config.media.breakpoints.lg} {
    width: 90rem;
  }
`;

const SelectedCurrencyRate = styled.div.attrs(props => ({
  className: props.className || classNames.exchangeRates__selectedCurrencyRate,
}))``;

const Calculator = styled.div.attrs(props => ({
  className: props.className || classNames.exchangeRates__calculator,
}))``;

const Search = styled.div.attrs(props => ({
  className: props.className || classNames.exchangeRates__search,
}))``;

const CurrencyRatesWrapper = styled.div.attrs(props => ({
  className: props.className || classNames.exchangeRates__currencyWrapper,
}))`
  /* 1. Box model: */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;
  /* 2. Positioning: */
  align-self: center;
  /* 3. Visual (Borders & Background): */
  /* 4. Typography: */
  /* 5 .Misc: */
  @${({ theme }) => theme.config.media.breakpoints.md} {
    justify-content: space-between;
  }
`;

const CurrencyRate = styled.div.attrs(props => ({
  className: props.className || classNames.exchangeRates__currencyRate,
}))`
  /* 1. Box model: */
  box-sizing: border-box;
  display: flex;
  width: 35rem;
  height: 15rem;
  margin: 1rem;
  /* 2. Positioning: */
  /* 3. Visual (Borders & Background): */
  background-color: whitesmoke;
  border-radius: 7.5rem/50%;
  /* 4. Typography: */
  /* 5 .Misc: */
`;

const CurrencyRate__Flag = styled.div.attrs(props => ({
  className: props.className || classNames.exchangeRates__currencyRate,
}))`
  /* 1. Box model: */
  box-sizing: border-box;
  display: flex;
  width: 15rem;
  height: 15rem;
  margin: 1rem;
  /* 2. Positioning: */
  /* 3. Visual (Borders & Background): */
  border-radius: 50%;
  /* 4. Typography: */
  /* 5 .Misc: */
`;

export const ExchangeRatesLayout = {
  Paper,
  Calculator,
  CurrencyRate,
  CurrencyRatesWrapper,
  CurrencyRate__Flag,
  SelectedCurrencyRate,
  Search,
};
