import React from 'react';
import {
  toggleLoginModal,
  nativeUnlockWallet,
  triggerToaster,
  Config,
} from '../../../actions/actionCreators';
import Store from '../../../store';
import { translate } from '../../../translate/translate';

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
      trimPassphraseTimer: null,
    };
    this.updateLoginPassPhraseInput = this.updateLoginPassPhraseInput.bind(this);
    this.unlockWallet = this.unlockWallet.bind(this);
    this.toggleSeedInputVisibility = this.toggleSeedInputVisibility.bind(this);
    this.dismiss = this.dismiss.bind(this);
    this.resizeLoginTextarea = this.resizeLoginTextarea.bind(this);
  }

  // TODO: proper animation
  componentWillReceiveProps(props) {
    const loginModalProps = props && props.Dashboard ? props.Dashboard : null;

    if (loginModalProps &&
        loginModalProps.displayLoginModal !== this.state.display) {
      this.setState(Object.assign({}, this.state, {
        display: loginModalProps.displayLoginModal,
        modalClassName: loginModalProps.displayLoginModal ? 'show fade' : 'show fade',
      }));

      setTimeout(() => {
        this.setState(Object.assign({}, this.state, {
          display: loginModalProps.displayLoginModal,
          modalClassName: loginModalProps.displayLoginModal ? 'show in' : 'hide',
        }));
      }, 100);
    }
  }

  dismiss() {
    Store.dispatch(toggleLoginModal(false));
  }

  resizeLoginTextarea() {
    // auto-size textarea
    setTimeout(() => {
      if (this.state.seedInputVisibility) {
          document.querySelector('#loginPassphrase').style.height = '1px';
          document.querySelector('#loginPassphrase').style.height = `${(15 + document.querySelector('#loginPassphrase').scrollHeight)}px`;
      }
    }, 100);
  }

  toggleSeedInputVisibility() {
    this.setState({
      seedInputVisibility: !this.state.seedInputVisibility,
    });

    this.resizeLoginTextarea();
  }

  handleKeydown(e) {
    this.updateLoginPassPhraseInput(e);

    if (e.key === 'Enter') {
      this.loginSeed();
    }
  }

  updateLoginPassPhraseInput(e) {
    // remove any empty chars from the start/end of the string
    const newValue = e.target.value;

    clearTimeout(this.state.trimPassphraseTimer);

    const _trimPassphraseTimer = setTimeout(() => {
      this.setState({
        loginPassphrase: newValue ? newValue.trim() : '', // hardcoded field name
      });
    }, 2000);

    this.resizeLoginTextarea();

    this.setState({
      trimPassphraseTimer: _trimPassphraseTimer,
      [e.target.name]: newValue,
    });
  }

  unlockWallet() {
    this.setState({
      seedInputVisibility: false,
    });
    nativeUnlockWallet(this.state.loginPassphrase, this.props.ActiveCoin.coin, Config.dex.walletUnlockTimeout)
    .then((json) => {
      if (json.error &&
          json.error.code &&
          json.error.code === -14) {
        Store.dispatch(
          triggerToaster(
            json.error.message,
            translate('TOASTR.COIN_NOTIFICATION'),
            'error'
          )
        );
      }
      if (json.id === null &&
          json.error === null &&
          json.result === null) {
        Store.dispatch(
          triggerToaster(
            `${this.props.ActiveCoin.coin} wallet is unlocked`,
            translate('TOASTR.COIN_NOTIFICATION'),
            'success'
          )
        );
        this.setState({
          loginPassphrase: null,
          seedInputVisibility: false,
        });
        this.dismiss();
      }
      console.log('unlockWallet', json);
    });
  }

  isLoginPassphraseEmpty() {
    return !this.state.loginPassphrase || !this.state.loginPassphrase.length;
  }

  render() {
    if (this.props.Dashboard.displayLoginModal) {
      return LoginModalRender.call(this);
    }

    return null;
  }
}

export default LoginModal;
