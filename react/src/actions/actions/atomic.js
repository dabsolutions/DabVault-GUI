// spv v2

import { ATOMIC } from '../storeType';
import { triggerToaster } from '../actionCreators';
import Config from '../../config';

export function atomic(payload) {
  return dispatch => {
    return fetch(`http://127.0.0.1:${Config.iguanaCorePort}`, {
      method: 'POST',
      body: JSON.stringify(payload),
    })
    .catch((error) => {
      console.log(error);
      dispatch(
        triggerToaster(
          payload.method,
          translate('API.ATOMIC_EXPLORER_ERR'),
          translate('API.ERROR_SM')
        )
      );
    })
    .then(response => response.json())
    .then(json => {
      dispatch(atomicState(json));
    });
  }
}

function atomicState(json) {
  return {
    type: ATOMIC,
    response: json,
  }
}