import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { PageSettingsFields } from '../../common/reducers/languageChange';
import { changeLanguage } from '../../common/actions/languageChange';
import { StoreFields } from '../../reducers';
import { fetchExchangeRates } from './actions/list';
import { ExchangeRatesListState } from './reducers/list';
import { ExchangeRatesLayout } from './styles/ExchangeRatesLayout';
import { ExchangeRatesSelect } from './components/ExchangeRates';
import { SelectedRate } from './components/SelectedRate';
import ExchangeRate from './domain/ExchangeRate';

interface DispatchProps {
  pageSettings: typeof changeLanguage;
  fetchExchangeRates: typeof fetchExchangeRates;
}

interface StateProps {
  pageSettingsState: PageSettingsFields;
  exchangeRates: ExchangeRatesListState;
}

interface Props extends DispatchProps, StateProps {}
interface State {
  selectedRate: ExchangeRate | null;
}

class CurrencyApp extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      selectedRate: null,
    };

    this.onSelectedRateChange = this.onSelectedRateChange.bind(this);
  }

  public componentDidMount(): void {
    if (this.props.exchangeRates.value.length === 0) {
      this.props.fetchExchangeRates(new Date());
    }
  }

  public render(): JSX.Element {
    const { selectedRate } = this.state;

    return (
      <ExchangeRatesLayout.Paper>
        <SelectedRate rate={selectedRate} />
        <ExchangeRatesSelect
          exchangeRates={this.props.exchangeRates.value}
          onRateSelect={this.onSelectedRateChange}
        />
      </ExchangeRatesLayout.Paper>
    );
  }

  public onSelectedRateChange(selectedRate: ExchangeRate): void {
    this.setState({ selectedRate });
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
