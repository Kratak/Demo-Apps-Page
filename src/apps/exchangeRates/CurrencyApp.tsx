import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { PageSettingsFields } from '../../common/reducers/languageChange';
import { Language } from '../../common/interfaces/avaibleLangueges';
import { changeLanguage } from '../../common/actions/languageChange';
import { StoreFields } from '../../reducers';
import { fetchExchangeRates } from './actions/list';
import { ExchangeRatesListState } from './reducers/list';

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
  language: Language;
}

class CurrencyApp extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      language: Language.Eng,
    };
  }

  public componentDidMount(): void {
    if (!this.props.exchangeRates.value) {
      this.props.fetchExchangeRates(new Date());
    }
  }

  public componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>
  ): void {
    if (prevState.language !== this.props.pageSettingsState.language) {
      this.setState({ language: this.props.pageSettingsState.language });
    }
  }

  public render(): JSX.Element {
    return (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '105rem',
          justifyContent: 'space-between',
          alignItems: 'center',
          alignSelf: 'center',
          margin: '2rem',
        }}
      >
        {this.props.exchangeRates.value.map(rate => {
          return (
            <div
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
      </div>
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
