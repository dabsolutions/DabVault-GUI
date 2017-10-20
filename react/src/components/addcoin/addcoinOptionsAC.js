import React from 'react';
import { translate } from '../../translate/translate';

class AddCoinOptionsAC extends React.Component {
  render() {
    const _assetChains = [
      'bet',
      'bots',
      'ceal',
      'coqui',
      'crypto',
      'hodl',
      'dex',
      'jumblr',
      'kv',
      'mgw',
      //'mvp',
      'mnz',
      'pangea',
      'revs',
      'shark',
      'supernet',
      'wlc',
    ];
    let _items = [];

    for (let i = 0; i < _assetChains.length; i++) {
      const availableModes = _assetChains[i] === 'revs' || _assetChains[i] === 'jumblr' || _assetChains[i] === 'wlc' || _assetChains[i] === 'mnz' ? 'native|spv' : 'native';

      _items.push(
        <option
          key={ _assetChains[i] }
          value={ `${_assetChains[i].toUpperCase()}|${availableModes}` }>{ translate(`ASSETCHAINS.${_assetChains[i].toUpperCase()}`) }</option>
      );
    }

    return (
      <optgroup label={ translate('ADD_COIN.ASSETCHAINS') }>
      { _items }
      </optgroup>
    );
  }
}

export default AddCoinOptionsAC;
