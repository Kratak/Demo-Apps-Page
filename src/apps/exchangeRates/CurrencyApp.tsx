import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { PageSettingsFields } from '../../common/reducers/languageChange';
import { Language } from '../../common/interfaces/avaibleLangueges';
import { changeLanguage } from '../../common/actions/languageChange';
import { StoreFields } from '../../reducers';

interface DispatchProps {
  pageSettings: typeof changeLanguage;
}

interface StateProps {
  pageSettingsState: PageSettingsFields;
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
      <div>
        <div style={{ width: 250, height: 250, backgroundColor: 'red' }}>
          current language is {this.props.pageSettingsState.language}
        </div>
        <div onClick={() => this.props.pageSettings(Language.Pl)}>
          zmień na pl
        </div>
        <div onClick={() => this.props.pageSettings(Language.Eng)}>
          zmień na eng
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: StoreFields): StateProps => ({
  pageSettingsState: state.languageChange,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  ...bindActionCreators({ pageSettings: changeLanguage }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyApp);
