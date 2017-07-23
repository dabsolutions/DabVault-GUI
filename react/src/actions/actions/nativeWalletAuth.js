import {
  LOGIN,
  ACTIVE_HANDLE,
  DISPLAY_LOGIN_MODAL
} from '../storeType';
import { translate } from '../../translate/translate';
import {
  triggerToaster,
  Config
} from '../actionCreators';
import {
  logGuiHttp,
  guiLogState
} from './log';

export function nativeEncryptWallet(_passphrase, coin) {
  const payload = {
    chain: coin,
    cmd: 'encryptwallet',
    params: _passphrase,
  };
  const _fetchConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ 'payload': payload }),
  };

  return new Promise((resolve, reject) => {
    const _timestamp = Date.now();
    if (Config.debug) {
      dispatch(logGuiHttp({
        'timestamp': _timestamp,
        'function': 'nativeEncryptWallet',
        'type': 'post',
        'url': `http://127.0.0.1:${Config.agamaPort}/shepherd/cli`,
        'payload': payload,
        'status': 'pending',
      }));
    }

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
          'nativeEncryptWallet',
          'Error',
          'error'
        )
      );
    })
    //.then(dispatch(walletPassphrase(_passphrase)))
    .then(response => response.json())
    .then(json => {
      if (Config.debug) {
        dispatch(logGuiHttp({
          'timestamp': _timestamp,
          'status': 'success',
          'response': json,
        }));
      }
      resolve(json);
    });
  });
}

export function nativeUnlockWallet(_passphrase, coin, timeout = 3600) {
  const payload = {
    chain: coin,
    cmd: 'walletpassphrase',
    params: [
      _passphrase,
      timeout
    ]
  };
  const _fetchConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ 'payload': payload }),
  };

  return new Promise((resolve, reject) => {
    const _timestamp = Date.now();
    if (Config.debug) {
      dispatch(logGuiHttp({
        'timestamp': _timestamp,
        'function': 'nativeUnlockWallet',
        'type': 'post',
        'url': `http://127.0.0.1:${Config.agamaPort}/shepherd/cli`,
        'payload': payload,
        'status': 'pending',
      }));
    }

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
          'nativeUnlockWallet',
          'Error',
          'error'
        )
      );
    })
    //.then(dispatch(walletPassphrase(_passphrase)))
    .then(response => response.json())
    .then(json => {
      if (Config.debug) {
        dispatch(logGuiHttp({
          'timestamp': _timestamp,
          'status': 'success',
          'response': json,
        }));
      }
      resolve(json);
    });
  });
}

export function nativeLockWallet(coin) {
  const payload = {
    chain: coin,
    cmd: 'walletlock',
  };
  const _fetchConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ 'payload': payload }),
  };

  return new Promise((resolve, reject) => {
    const _timestamp = Date.now();
    if (Config.debug) {
      dispatch(logGuiHttp({
        'timestamp': _timestamp,
        'function': 'nativeLockWallet',
        'type': 'post',
        'url': `http://127.0.0.1:${Config.agamaPort}/shepherd/cli`,
        'payload': payload,
        'status': 'pending',
      }));
    }

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
          'nativeLockWallet',
          'Error',
          'error'
        )
      );
    })
    //.then(dispatch(walletPassphrase(_passphrase)))
    .then(response => response.json())
    .then(json => {
      if (Config.debug) {
        dispatch(logGuiHttp({
          'timestamp': _timestamp,
          'status': 'success',
          'response': json,
        }));
      }
      resolve(json);
    });
  });
}

export function toggleLoginModal(display) {
  return {
    type: DISPLAY_LOGIN_MODAL,
    displayLoginModal: display,
  }
}