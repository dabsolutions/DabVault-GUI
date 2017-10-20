import { translate } from '../../translate/translate';
import {
  triggerToaster,
  getDashboardUpdate
} from '../actionCreators';
import Config from '../../config';

export function getNewKMDAddresses(coin, pubpriv, mode) {
  return dispatch => {
    const payload = {
      mode: null,
      chain: coin,
      cmd: pubpriv === 'public' ? 'getnewaddress' : 'z_getnewaddress',
    };

    const _fetchConfig = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ payload: payload }),
    };

    return fetch(
      `http://127.0.0.1:${Config.agamaPort}/shepherd/cli`,
      _fetchConfig
    )
    .catch((error) => {
      console.log(error);
      dispatch(
        triggerToaster(
          'getNewKMDAddresses',
          'Error',
          'error'
        )
      );
    })
    .then(response => response.json())
    .then(json => {
      json = json.result;
      dispatch(
        triggerToaster(
          json.result ? json.result : json,
          translate('KMD_NATIVE.NEW_ADDR_GENERATED'),
          'info',
          false
        )
      );
      dispatch(getDashboardUpdate(coin, mode));
    })
    .catch((ex) => {
      dispatch(
        triggerToaster(
          json.result ? json.result : json,
          translate('KMD_NATIVE.NEW_ADDR_GENERATED'),
          'info',
          false
        )
      );
      dispatch(getDashboardUpdate(coin));
    });
  }
}