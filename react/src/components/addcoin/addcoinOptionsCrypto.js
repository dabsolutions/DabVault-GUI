import React from 'react';
import { translate } from '../../translate/translate';
import {
  Config,
  coindList
} from '../../actions/actionCreators';

class AddCoinOptionsCrypto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nativeOnly: Config.iguanaLessMode,
    }
  }

  render() {
    const isWindows = this.props.appSettings && this.props.appSettings.appInfo && this.props.appSettings.appInfo.sysInfo && this.props.appSettings.appInfo.sysInfo.platform === 'win32';
    let _coindList = Object.assign(coindList, {
      'kmd': {
        name: 'Komodo',
        bin: 'komodod',
        bins: {
          cli: true,
          daemon: true,
        },
        fullMode: true,
        port: 7771,
      }
    });
    let items = [];

    for (let key in coindList) {
      const _modeVal = this.state.nativeOnly ? `${key.toUpperCase()}|native` : `${key.toUpperCase()}|full`;

      if ((!this.state.nativeOnly && coindList[key].fullMode && !isWindows) ||
          (this.state.nativeOnly && coindList[key].bins.cli && coindList[key].bins.daemon)) {
        items.push(
          <option value={ _modeVal }>{ coindList[key].name } ({ key.toUpperCase() })</option>
        );
      }
    }

    return (
      <optgroup label={ translate('ADD_COIN.CRYPTO_CURRENCIES') }>
        { items }
      </optgroup>
    );
  }
}

export default AddCoinOptionsCrypto;
