import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Uuid from '../../common/utils/Uuid';
import { PageSettingsFields } from '../../common/reducers/languageChange';
import { changeLanguage } from '../../common/actions/languageChange';
import { StoreFields } from '../../reducers';
import { fetchExchangeRates } from './actions/list';
import { ExchangeRatesListState } from './reducers/list';
import { ExchangeRatesLayout } from './styles/ExchangeRatesLayout';

interface DispatchProps {
  pageSettings: typeof changeLanguage;
  fetchExchangeRates: typeof fetchExchangeRates;
}

interface StateProps {
  pageSettingsState: PageSettingsFields;
  exchangeRates: ExchangeRatesListState;
}

interface Props extends DispatchProps, StateProps {}
interface State {}

class CurrencyApp extends React.Component<Props, State> {
  public componentDidMount(): void {
    if (this.props.exchangeRates.value.length === 0) {
      this.props.fetchExchangeRates(new Date());
    }
  }

  public render(): JSX.Element {
    return (
      <ExchangeRatesLayout.Paper>
        {this.props.exchangeRates.value.map(rate => {
          return (
            <div
              key={Uuid.generate()}
              style={{
                boxSizing: 'border-box',
                backgroundColor: 'slategray',
                width: '20rem',
                height: '15rem',
                padding: '1rem',
                marginBottom: '1rem',
              }}
            >
              <p>ISO4217: {rate.code}</p>
              <p>Nazwa: {rate.currency}</p>
              <p>1 PLN = {rate.mid + ' ' + rate.code}</p>
            </div>
          );
        })}
      </ExchangeRatesLayout.Paper>
    );
  }
}

const mapStateToProps = (state: StoreFields): StateProps => ({
  pageSettingsState: state.languageChange,
  exchangeRates: state.currencyAppReducers.exchangeRatesList,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  ...bindActionCreators(
    { pageSettings: changeLanguage, fetchExchangeRates },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyApp);
