import React from 'react';
import {
  toggleAddcoinModal,
  iguanaWalletPassphrase
} from '../../../actions/actionCreators';
import Store from '../../../store';

import LoginModalRender from './loginModal.render';

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      activeLoginSection: 'activateCoin',
      loginPassphrase: null,
      seedInputVisibility: false,
      display: false,
      modalClassName: 'hide',
    };
    /*this.toggleActivateCoinForm = this.toggleActivateCoinForm.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.loginSeed = this.loginSeed.bind(this);
    this.toggleSeedInputVisibility = this.toggleSeedInputVisibility.bind(this);
    this.handleRegisterWallet = this.handleRegisterWallet.bind(this);*/

    this.dismiss = this.dismiss.bind(this);
  }

  componentWillReceiveProps(props) {
    const addCoinProps = props ? props.AddCoin : null;

    if (addCoinProps &&
        addCoinProps.display !== this.state.display) {
      this.setState(Object.assign({}, this.state, {
        display: addCoinProps.display,
        modalClassName: addCoinProps.display ? 'show fade' : 'show fade',
      }));

      setTimeout(() => {
        this.setState(Object.assign({}, this.state, {
          display: addCoinProps.display,
          modalClassName: addCoinProps.display ? 'show in' : 'hide',
        }));
      }, 100);
    }
  }

  dismiss() {
    Store.dispatch(toggleAddcoinModal(false, false));
  }

  toggleSeedInputVisibility() {
    this.setState({
      seedInputVisibility: !this.state.seedInputVisibility,
    });
  }

  toggleActivateCoinForm() {
    Store.dispatch(toggleAddcoinModal(true, false));
  }

  updateInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
      isSeedConfirmError: false,
    });
  }

  loginSeed() {
    Store.dispatch(iguanaWalletPassphrase(this.state.loginPassphrase));
  }

  isLoginPassphraseEmpty() {
    return !this.state.loginPassphrase || !this.state.loginPassphrase.length;
  }

  render() {
    if (this.props.Dashboard.activateLoginModal) {
      return LoginModalRender.call(this);
    }

    return null;
  }
}

export default LoginModal;
