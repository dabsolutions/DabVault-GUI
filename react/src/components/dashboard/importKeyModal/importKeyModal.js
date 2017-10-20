import React from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import Store from '../../../store';
import {
  displayImportKeyModal,
  importPrivkey,
  triggerToaster,
  copyCoinAddress,
  getDebugLog,
  getDashboardUpdateState
} from '../../../actions/actionCreators';
import { translate } from '../../../translate/translate';
import {
  ImportKeyModalRender,
} from './importKeyModal.render';

// import gen komodo keys utils
import '../../../util/crypto/gen/array.map.js';
import '../../../util/crypto/gen/cryptojs.js';
import '../../../util/crypto/gen/cryptojs.sha256.js';
import '../../../util/crypto/gen/cryptojs.pbkdf2.js';
import '../../../util/crypto/gen/cryptojs.hmac.js';
import '../../../util/crypto/gen/cryptojs.aes.js';
import '../../../util/crypto/gen/cryptojs.blockmodes.js';
import '../../../util/crypto/gen/cryptojs.ripemd160.js';
import '../../../util/crypto/gen/securerandom.js';
import '../../../util/crypto/gen/ellipticcurve.js';
import '../../../util/crypto/gen/biginteger.js';
import '../../../util/crypto/gen/crypto-scrypt.js';
import { Bitcoin } from '../../../util/crypto/gen/bitcoin.js';

class ImportKeyModal extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      wif: '',
      wifkeysPassphrase: '',
      passphraseWif: null,
      passphraseAddress: null,
      keyImportResult: null,
      importWithRescan: false,
      seedInputVisibility: false,
      toggleSeedInputVisibility: false,
      trimPassphraseTimer: null,
    };
    this.generateKeysFromPassphrase = this.generateKeysFromPassphrase.bind(this);
    this.toggleImportWithRescan = this.toggleImportWithRescan.bind(this);
    this.toggleSeedInputVisibility = this.toggleSeedInputVisibility.bind(this);
    this._copyCoinAddress = this._copyCoinAddress.bind(this);
    this.showPassphraseAddress = this.showPassphraseAddress.bind(this);
    this.importWifAddress = this.importWifAddress.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.importFromPassphrase = this.importFromPassphrase.bind(this);
    this.importFromWif = this.importFromWif.bind(this);
  }

  _copyCoinAddress(address) {
    Store.dispatch(copyCoinAddress(address));
  }

  updateInput(e) {
    if (e.target.name === 'wifkeysPassphrase') {
      // remove any empty chars from the start/end of the string
      const newValue = e.target.value;

      clearTimeout(this.state.trimPassphraseTimer);

      const _trimPassphraseTimer = setTimeout(() => {
        this.setState({
          wifkeysPassphrase: newValue ? newValue.trim() : '', // hardcoded field name
        });
      }, 2000);

      this.resizeLoginTextarea();

      this.setState({
        trimPassphraseTimer: _trimPassphraseTimer,
        [e.target.name]: newValue,
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  }

  resizeLoginTextarea() {
    // auto-size textarea
    setTimeout(() => {
      if (this.state.seedInputVisibility) {
        document.querySelector('#wifkeysPassphraseTextarea').style.height = '1px';
        document.querySelector('#wifkeysPassphraseTextarea').style.height = `${(15 + document.querySelector('#wifkeysPassphraseTextarea').scrollHeight)}px`;
      }
    }, 100);
  }

  toggleSeedInputVisibility() {
    this.setState({
      seedInputVisibility: !this.state.seedInputVisibility,
    });
  }

  showPassphraseAddress() {
    const _address = this.generateKeysFromPassphrase();

    if (_address) {
      this.setState({
        passphraseAddress: _address.address,
        passphraseWif: _address.wif,
      });
    }
  }

  importFromPassphrase() {
    const _address = this.generateKeysFromPassphrase();

    if (_address) {
      this.importWifAddress(_address.wif, true);
    }
  }

  importFromWif() {
    this.importWifAddress(this.state.wif, this.state.importWithRescan);
  }

  importWifAddress(wif, rescan) {
    let _rescanInProgress = true;

    if (rescan) {
      setTimeout(() => {
        if (_rescanInProgress) {
          setTimeout(() => {
            if (this.props.ActiveCoin.coin === 'KMD') {
              Store.dispatch(getDebugLog('komodo', 100));
            } else {
              Store.dispatch(getDebugLog('komodo', 100, this.props.ActiveCoin.coin));
            }
          }, 2000);

          Store.dispatch(getDashboardUpdateState(null, this.props.ActiveCoin.coin, true));
          Store.dispatch(
            triggerToaster(
              translate('INDEX.ADDRESS_IMPORTED_RESCAN_IN_PROGRESS'),
              translate('TOASTR.WALLET_NOTIFICATION'),
              'info',
              false
            )
          );
          this.closeModal();
        }
      }, 2000);
    }

    importPrivkey(
      this.props.ActiveCoin.coin,
      wif,
      rescan
    ).then((json) => {
      _rescanInProgress = false;

      if (!json.id &&
          !json.result &&
          !json.error) {
        Store.dispatch(
          triggerToaster(
            rescan ? translate('INDEX.WALLET_RESCAN_FINISHED') : translate('INDEX.ADDRESS_IMPORTED'),
            translate('TOASTR.WALLET_NOTIFICATION'),
            'success',
            false
          )
        );
      } else {
        Store.dispatch(
          triggerToaster(
            json.error.message,
            'Error',
            'error'
          )
        );
      }
    });
  }

  generateKeysFromPassphrase() {
    if (this.state.wifkeysPassphrase &&
        this.state.wifkeysPassphrase.length) {
      const bytes = Crypto.SHA256(this.state.wifkeysPassphrase, { asBytes: true });
      // byte flipping to make it compat with iguana core
      bytes[0] &= 248;
      bytes[31] &= 127;
      bytes[31] |= 64;
      const btcKey = new Bitcoin.ECKey(bytes).setCompressed(true);
      const kmdAddress = btcKey.getBitcoinAddress();
      const wifAddress = btcKey.getBitcoinWalletImportFormat();

      return {
        address: kmdAddress,
        wif: wifAddress,
      };
    } else {
      Store.dispatch(
        triggerToaster(
          translate('INDEX.EMPTY_PASSPHRASE_FIELD'),
          'Error',
          'error'
        )
      );

      return null;
    }
  }

  toggleImportWithRescan() {
    this.setState({
      importWithRescan: !this.state.importWithRescan,
    });
  }

  closeModal() {
    Store.dispatch(displayImportKeyModal(false));
  }

  render() {
    return ImportKeyModalRender.call(this);
  }
}

const mapStateToProps = (state) => {
  return {
    ActiveCoin: {
      coin: state.ActiveCoin.coin,
      balance: state.ActiveCoin.balance,
    },
    Dashboard: {
      displayImportKeyModal: state.Dashboard.displayImportKeyModal,
    },
  };
};

export default connect(mapStateToProps)(ImportKeyModal);
