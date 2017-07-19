export function _coindList() {
  let _coindList = {};

  try {
    _coindList = window.require('electron').remote.getCurrentWindow().nativeCoindList;
  } catch (e) {
    console.warn('coindList', 'open gui via app');
  }

  return _coindList;
}