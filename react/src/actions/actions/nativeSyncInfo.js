import {
  SYNCING_NATIVE_MODE,
  SYNCING_NATIVE_MODE_COIND
} from '../storeType';
import {
  triggerToaster,
  Config,
  getPassthruAgent,
  getDebugLog,
  coindList
} from '../actionCreators';
import {
  logGuiHttp,
  guiLogState
} from './log';

export function getSyncInfoNativeKMD(skipDebug) {
  const coin = 'KMD';

  return dispatch => {
    const _timestamp = Date.now();
    if (Config.debug) {
      dispatch(logGuiHttp({
        'timestamp': _timestamp,
        'function': 'getSyncInfoNativeKMD',
        'type': 'post',
        'url': Config.iguanaLessMode ? 'http://kmd.explorer.supernet.org/api/status?q=getInfo' : `http://127.0.0.1:${Config.iguanaCorePort}/api/dex/getinfo?userpass=tmpIgRPCUser@${sessionStorage.getItem('IguanaRPCAuth')}&symbol=${coin}`,
        'payload': '',
        'status': 'pending',
      }));
    }

    return fetch(
      Config.iguanaLessMode ? 'http://kmd.explorer.supernet.org/api/status?q=getInfo' : `http://127.0.0.1:${Config.iguanaCorePort}/api/dex/getinfo?userpass=tmpIgRPCUser@${sessionStorage.getItem('IguanaRPCAuth')}&symbol=${coin}`, {
      method: 'GET',
    })
    .catch(function(error) {
      console.log(error);
      if (Config.debug) {
        dispatch(logGuiHttp({
          'timestamp': _timestamp,
          'status': 'error',
          'response': error,
        }));
      }
      dispatch(
        triggerToaster(
          'getSyncInfoNativeKMD',
          'Error',
          'error'
        )
      );
    })
    .then(response => response.json())
    .then(json => {
      if (Config.debug) {
        dispatch(logGuiHttp({
          'timestamp': _timestamp,
          'status': 'success',
          'response': Config.iguanaLessMode ? json.info : json,
        }));
      }
      dispatch(getSyncInfoNativeState({ 'remoteKMDNode': Config.iguanaLessMode ? json.info : json }));
    })
    .then(function() {
      if (!skipDebug) {
        dispatch(getDebugLog('komodo', 1));
      }
    })
  }
}

function getSyncInfoNativeState(json, coin, skipDebug) {
  if (coin === 'KMD' &&
      json &&
      json.error) {
    return getSyncInfoNativeKMD(skipDebug);
  } else {
    if (json &&
        json.error &&
        Config.cli.default) {
      return {
        type: SYNCING_NATIVE_MODE,
        progress: Config.cli.default ? json.error : json,
      }
    } else {
      return {
        type: SYNCING_NATIVE_MODE,
        progress: Config.cli.default ? json.result : json,
      }
    }
  }
}

export function getSyncInfoNative(coin, skipDebug) {
  let payload = {
    'userpass': `tmpIgRPCUser@${sessionStorage.getItem('IguanaRPCAuth')}`,
    'agent': getPassthruAgent(coin),
    'method': 'passthru',
    'asset': coin,
    'function': 'getinfo',
    'hex': '',
  };

  if (Config.cli.default) {
    payload = {
      mode: null,
      chain: coin,
      cmd: 'getinfo'
    };
  }

  return dispatch => {
    const _timestamp = Date.now();
    if (Config.debug) {
      dispatch(logGuiHttp({
        'timestamp': _timestamp,
        'function': 'getSyncInfo',
        'type': 'post',
        'url': Config.cli.default ? `http://127.0.0.1:${Config.agamaPort}/shepherd/cli` : `http://127.0.0.1:${Config.iguanaCorePort}`,
        'payload': payload,
        'status': 'pending',
      }));
    }
    let _fetchConfig = {
      method: 'POST',
      body: JSON.stringify(payload),
    };

    if (Config.cli.default) {
      _fetchConfig = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 'payload': payload }),
      };
    }

    return fetch(
      Config.cli.default ? `http://127.0.0.1:${Config.agamaPort}/shepherd/cli` : `http://127.0.0.1:${Config.iguanaCorePort}`,
      _fetchConfig
    )
    .catch(function(error) {
      console.log(error);
      if (Config.debug) {
        dispatch(logGuiHttp({
          'timestamp': _timestamp,
          'status': 'error',
          'response': error,
        }));
      }
      dispatch(
        triggerToaster(
          'getSyncInfo',
          'Error',
          'error'
        )
      );
    })
    .then(function(response) {
      const _response = response.text().then(function(text) { return text; });
      return _response;
    })
    .then(json => {
      if (!json &&
        Config.cli.default) {
        dispatch(
          triggerToaster(
            'Komodod is down',
            'Critical Error',
            'error',
            false
          )
        );
      } else {
        json = JSON.parse(json);
      }

      if (Config.debug) {
        dispatch(logGuiHttp({
          'timestamp': _timestamp,
          'status': 'success',
          'response': json,
        }));
      }
      if (coindList[coin.toLowerCase()]) { // any coind
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
            skipDebug
          )
        );
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
    const _timestamp = Date.now();
    if (Config.debug) {
      dispatch(logGuiHttp({
        'timestamp': _timestamp,
        'function': 'getBlockTemplate',
        'type': 'post',
        'url': `http://127.0.0.1:${Config.agamaPort}/shepherd/cli`,
        'payload': payload,
        'status': 'pending',
      }));
    }

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
    .catch(function(error) {
      console.log(error);
      if (Config.debug) {
        dispatch(logGuiHttp({
          'timestamp': _timestamp,
          'status': 'error',
          'response': error,
        }));
      }
      dispatch(
        triggerToaster(
          'getBlockTemplate',
          'Error',
          'error'
        )
      );
    })
    .then(function(response) {
      const _response = response.text().then(function(text) { return text; });
      return _response;
    })
    .then(json => {
      if (!json &&
        Config.cli.default) {
        dispatch(
          triggerToaster(
            `${coin} is down`,
            'Critical Error',
            'error',
            false
          )
        );
      } else {
        json = JSON.parse(json);
      }

      if (_json.result &&
          json.result) {
        _json.result.longestchain = json.result.height - 1;
      }
      if (Config.debug) {
        dispatch(logGuiHttp({
          'timestamp': _timestamp,
          'status': 'success',
          'response': json,
        }));
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
        if (json.error && json.error.code === -10) {
          dispatch(
            getDebugLogProgress(
              _json,
              coin
            )
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
    const _timestamp = Date.now();
    if (Config.debug) {
      dispatch(logGuiHttp({
        'timestamp': _timestamp,
        'function': 'debug',
        'type': 'post',
        'url': `http://127.0.0.1:${Config.agamaPort}/shepherd/cli`,
        'payload': payload,
        'status': 'pending',
      }));
    }

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
    .catch(function(error) {
      console.log(error);
      if (Config.debug) {
        dispatch(logGuiHttp({
          'timestamp': _timestamp,
          'status': 'error',
          'response': error,
        }));
      }
      dispatch(
        triggerToaster(
          'getDebugLogProgress',
          'Error',
          'error'
        )
      );
    })
    .then(function(response) {
      const _response = response.text().then(function(text) { return text; });
      return _response;
    })
    .then(json => {
      if (!json &&
          Config.cli.default) {
        dispatch(
          triggerToaster(
            `${coin} is down`,
            'Critical Error',
            'error',
            false
          )
        );
      } else {
        json = JSON.parse(json);
      }

      if (json.result &&
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

      if (Config.debug) {
        dispatch(logGuiHttp({
          'timestamp': _timestamp,
          'status': 'success',
          'response': json,
        }));
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