import { DashboardColors, styled } from '../../../common/constans/theme';
import { classNames } from '../../../common/constans/classNames';

const Paper = styled.div.attrs(props => ({
  className: props.className || classNames.exchangeRates__paper,
}))`
  @${({ theme }) => theme.config.media.breakpoints.md} {
    flex-direction: row;
  }
  @${({ theme }) => theme.config.media.breakpoints.lg} {
    width: 90rem;
  }
  /* 1. Box model: */
  align-self: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 80vw;
  flex-wrap: wrap;
  padding: 2rem;
  margin: 2rem;
  justify-content: space-between;
  /* 2. Positioning: */
  /* 3. Visual (Borders & Background): */
  /* 4. Typography: */
  /* 5 .Misc: */
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

const CurrencyWrapper = styled.div.attrs(props => ({
  className: props.className || classNames.exchangeRates__currencyWrapper,
}))`
  /* 1. Box model: */
  display: flex;
  /* 2. Positioning: */
  //align-self: center;
  /* 3. Visual (Borders & Background): */
  /* 4. Typography: */
  /* 5 .Misc: */
`;

const CurrencyRate = styled.div.attrs(props => ({
  className: props.className || classNames.exchangeRates__currencyRate,
}))<{ variant: DashboardColors }>`
  /* 1. Box model: */
  box-sizing: border-box;
  width: 25rem;
  min-height: 5rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  /* 2. Positioning: */
  /* 3. Visual (Borders & Background): */
  background-color: ${({ theme, variant }) => theme.pallet.dashboard[variant]};
  border-radius: 0.5rem;
  /* 4. Typography: */
  color: ${({ theme }) => theme.pallet.dashboard.eggshell};
  text-decoration: none;
  text-align: center;
  -webkit-text-stroke: 0.03rem ${({ theme }) => theme.pallet.generics.deepBlack};
  font-size: 2rem;
  font-weight: bold;
  /* 5 .Misc: */
  :hover {
    background-color: ${({ theme, variant }) =>
      theme.pallet.dashboard[variant]}DD;
    color: ${({ theme }) => theme.pallet.dashboard.leather}99;
  }
`;

export const ExchangeRatesLayout = {
  Paper,
  Calculator,
  CurrencyRate,
  CurrencyWrapper,
  SelectedCurrencyRate,
  Search,
};
