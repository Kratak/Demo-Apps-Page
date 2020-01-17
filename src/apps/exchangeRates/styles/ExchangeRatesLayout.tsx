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
}))<{ selected?: boolean }>`
  /* 1. Box model: */
  box-sizing: border-box;
  display: flex;
  width: 30rem;
  height: 15.14rem;
  margin: 1rem;
  /* 2. Positioning: */
  /* 3. Visual (Borders & Background): */
  background-color: ${({ selected, theme: { pallet } }) =>
    selected ? pallet.currencyApp.beige : pallet.currencyApp.beige + '33'};
  border-radius: 7.5rem/50%;
  border: solid 0.07rem ${({ theme: { pallet } }) => pallet.dashboard.coral};
  /* 4. Typography: */
  /* 5 .Misc: */
  @${({ theme }) => theme.config.media.breakpoints.md} {
    width: ${({ selected }) => (selected ? '45' : '35')}rem;
  }
`;

const CurrencyRate__Flag = styled.div.attrs(props => ({
  className: props.className || classNames.exchangeRates__currencyRate_flag,
}))`
  /* 1. Box model: */
  box-sizing: border-box;
  display: flex;
  width: 15rem;
  height: 15rem;
  svg{
  width: 100%;
  height: 100%;
  }
  /* 2. Positioning: */
  /* 3. Visual (Borders & Background): */
  border-radius: 50%;
  border: solid 0.07rem ${({ theme: { pallet } }) => pallet.dashboard.coral};
  /* 4. Typography: */
  /* 5 .Misc: */
`;

const CurrencyRate__Description = styled.div.attrs(props => ({
  className:
    props.className || classNames.exchangeRates__currencyRate_description,
}))`
  /* 1. Box model: */
  display: flex;
  max-width: 15rem;
  flex-direction: column;
  margin: 1rem;
  justify-content: space-around;
  /* 2. Positioning: */
  /* 3. Visual (Borders & Background): */
  /* 4. Typography: */
  p {
    margin: 0.5rem;
    font-size: 1.2rem;
  }
  /* 5 .Misc: */
  @${({ theme }) => theme.config.media.breakpoints.md} {
    font-size: 1.6rem;
  }
`;

export const ExchangeRatesLayout = {
  Paper,
  Calculator,
  CurrencyRate,
  CurrencyRatesWrapper,
  CurrencyRate__Description,
  CurrencyRate__Flag,
  SelectedCurrencyRate,
  Search,
};
