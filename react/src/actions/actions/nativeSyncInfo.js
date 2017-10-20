import {
  SYNCING_NATIVE_MODE,
  DASHBOARD_ACTIVE_COIN_GETINFO_FAILURE
} from '../storeType';
import {
  triggerToaster,
  getDebugLog,
  toggleCoindDownModal
} from '../actionCreators';
import Config from '../../config';
import { translate } from '../../translate/translate';

export function nativeGetinfoFailureState() {
  return {
    type: DASHBOARD_ACTIVE_COIN_GETINFO_FAILURE,
  }
}

// TODO: use blockchaininfo rpc
export function getSyncInfoNativeKMD(skipDebug, json, skipRemote) {
  let _json = json;

  if (skipRemote) {
    return dispatch => {
      dispatch(getSyncInfoNativeState(json.info));

      if (!skipDebug) {
        dispatch(getDebugLog('komodo', 1));
      }
    }
  } else {
    const coin = 'KMD';
    // https://www.kmd.host/
    return dispatch => {
      return fetch(
        'https://kmd.explorer.supernet.org/api/status?q=getInfo', {
        method: 'GET',
      })
      .catch((error) => {
        console.log(error);
        console.warn('remote kmd node fetch failed', true);
        _json = _json.error;
        _json['remoteKMDNode'] = null;
        dispatch(getSyncInfoNativeState(_json));
      })
      .then(response => response.json())
      .then(json => {
        _json = _json.error;
        _json['remoteKMDNode'] = json.info;
        dispatch(getSyncInfoNativeState(_json));
      })
      .then(function() {
        if (!skipDebug) {
          dispatch(getDebugLog('komodo', 1));
        }
      })
    }
  }
}

function getSyncInfoNativeState(json, coin, skipDebug, skipRemote) {
  /*if (!json.remoteKMDNode) {
    json = { error: { code: -28, message: 'Activating best chain...' } };
  }*/

  if (json.remoteKMDNode) {
    return {
      type: SYNCING_NATIVE_MODE,
      progress: json,
    }
  } else {
    if (coin === 'KMD' &&
        json &&
        json.error &&
        json.error.message.indexOf('Activating best') > -1) {
      return getSyncInfoNativeKMD(skipDebug, json, skipRemote);
    } else {
      if (json &&
          json.error) {
        return {
          type: SYNCING_NATIVE_MODE,
          progress: json.error,
        }
      } else {
        return {
          type: SYNCING_NATIVE_MODE,
          progress: json.result ? json.result : json,
        }
      }
    }
  }
}

export function getSyncInfoNative(coin, skipDebug, skipRemote, suppressErrors) {
  return dispatch => {
    const payload = {
      mode: null,
      chain: coin,
      cmd: 'getinfo',
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
    .catch(function(error) {
      console.log(error);
      if (!suppressErrors) { // rescan case
        dispatch(
          triggerToaster(
            'getSyncInfo',
            'Error',
            'error'
          )
        );
      }
    })
    .then((response) => {
      const _response = response.text().then((text) => { return text; });
      return _response;
    })
    .then(json => {
      if (json === 'Work queue depth exceeded') {
        if (coin === 'KMD') {
          dispatch(getDebugLog('komodo', 100));
        } else {
          dispatch(getDebugLog('komodo', 100, coin));
        }
        dispatch(
          getSyncInfoNativeState(
            {
              result: 'daemon is busy',
              error: null,
              id: null
            },
            coin,
            true,
            skipRemote
          )
        );
      } else {
        if (!json) {
          let _kmdMainPassiveMode;

          try {
            _kmdMainPassiveMode = window.require('electron').remote.getCurrentWindow().kmdMainPassiveMode;
          } catch (e) {}

          if (!_kmdMainPassiveMode) {
            dispatch(nativeGetinfoFailureState());
          } else {
            dispatch(
              triggerToaster(
                translate('API.KMD_PASSIVE_ERROR'),
                translate('API.CONN_ERROR'),
                'warning',
                false
              )
            );
          }

          if (coin === 'KMD') {
            dispatch(getDebugLog('komodo', 50));
          } else {
            dispatch(getDebugLog('komodo', 50, coin));
          }
          dispatch(toggleCoindDownModal(true));
        } else {
          json = JSON.parse(json);
        }

        if (json.error &&
            json.error.message.indexOf('Activating best') === -1) {
          if (coin === 'KMD') {
            dispatch(getDebugLog('komodo', 1));
          } else {
            dispatch(getDebugLog('komodo', 1, coin));
          }
        }

        if (coin === 'CHIPS') {
          dispatch(
            getBlockTemplate(
              json,
              coin
            )
          );
        } else {
          dispatch(
            getSyncInfoNativeState(
              json,
              coin,
              skipDebug,
              skipRemote
            )
          );
        }
      }
    })
  }
}

export function getBlockTemplate(_json, coin) {
  const payload = {
    mode: null,
    chain: coin,
    cmd: 'getblocktemplate',
  };

  return dispatch => {
    const _fetchConfig = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 'payload': payload }),
    };

    return fetch(
      `http://127.0.0.1:${Config.agamaPort}/shepherd/cli`,
      _fetchConfig
    )
    .catch((error) => {
      console.log(error);
      dispatch(
        triggerToaster(
          'getBlockTemplate',
          'Error',
          'error'
        )
      );
    })
    .then((response) => {
      const _response = response.text().then((text) => { return text; });
      return _response;
    })
    .then(json => {
      if (json) {
        json = JSON.parse(json);
      }

      if (_json.result &&
          json.result) {
        _json.result.longestchain = json.result.height - 1;
      }

      if (json.result) {
        dispatch(
          getSyncInfoNativeState(
            _json,
            coin,
            true
          )
        );
      } else {
        if (json.error &&
            json.error.code === -10) {
          console.log('debuglog');
          dispatch(
            getDebugLogProgress(_json, coin)
          );
        }
      }
    })
  }
}

export function getDebugLogProgress(_json, coin) {
  const payload = {
    mode: null,
    chain: coin,
    cmd: 'debug',
  };

  return dispatch => {
    const _fetchConfig = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 'payload': payload }),
    };

    return fetch(
      `http://127.0.0.1:${Config.agamaPort}/shepherd/cli`,
      _fetchConfig
    )
    .catch((error) => {
      console.log(error);
      dispatch(
        triggerToaster(
          'getDebugLogProgress',
          'Error',
          'error'
        )
      );
    })
    .then((response) => {
      const _response = response.text().then((text) => { return text; });
      return _response;
    })
    .then(json => {
      if (json) {
        json = JSON.parse(json);
      }

      if (json.result &&
          json.result.blocks &&
          json.result.headers) {
        _json.result.longestchain = json.result.headers;
        _json.result.progress = json.result.blocks * 100 / json.result.headers;
      } else if (json.result &&
          json.result.indexOf('UpdateTip:') > -1) {
        const _debugProgress = json.result.split(' ');
        let _height = '';
        let _progress = '';

        for (let i = 0; i < _debugProgress.length; i++) {
          if (_debugProgress[i].indexOf('height=') > -1) {
            _height = Number(_debugProgress[i].replace('height=', ''));
          }
          if (_debugProgress[i].indexOf('progress=') > -1) {
            _progress = Number(_debugProgress[i].replace('progress=', ''));
          }

          _json.result.progress = _progress * 100;
        }
      }

      if (_json.result &&
          _json.result.progress) {
        dispatch(
          getSyncInfoNativeState(
            _json,
            coin,
            true
          )
        );
      }
    })
  }
}