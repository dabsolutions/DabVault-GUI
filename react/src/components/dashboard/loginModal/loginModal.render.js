import React from 'react';
import { translate } from '../../../translate/translate';

const LoginModalRender = function () {
  return (
    <div>
      <div
        className={ 'modal modal-3d-sign login-modal ' + (this.state.display ? 'show in' : 'fade hide') }
        id="loginModal">
        <div className="modal-dialog modal-center modal-lg">
          <div className="modal-content">
            <div className="modal-header bg-orange-a400 wallet-send-header">
              <button
                type="button"
                className="close white"
                onClick={ this.dismiss }>
                <span>×</span>
              </button>
              <h4 className="modal-title white">Unlock { this.props.ActiveCoin.coin } wallet</h4>
            </div>
            <div className="modal-body">
              <div id="wallet-login">
                <h4>
                  Enter your { this.props.ActiveCoin.coin } passphrase below to unlock the wallet
                </h4>
                <div>Default unlock timeout window is 1 hour (3600s). You can change this option in app settings.</div>
                <div className="form-group form-material floating col-sm-12 horizontal-padding-0">
                  <input
                    type="password"
                    className={ !this.state.seedInputVisibility ? 'form-control' : 'hide' }
                    name="loginPassphrase"
                    onChange={ this.updateLoginPassPhraseInput }
                    onKeyDown={ (event) => this.handleKeydown(event) }
                    value={ this.state.loginPassphrase } />
                  <textarea
                    className={ this.state.seedInputVisibility ? 'form-control' : 'hide' }
                    id="loginPassphrase"
                    name="loginPassphrase"
                    onChange={ this.updateLoginPassPhraseInput }
                    onKeyDown={ (event) => this.handleKeydown(event) }
                    value={ this.state.loginPassphrase }></textarea>
                  <i
                    className={ !this.state.seedInputVisibility ? 'seed-toggle fa fa-eye-slash' : 'seed-toggle fa fa-eye' }
                    onClick={ this.toggleSeedInputVisibility }></i>
                  <label
                    className="floating-label"
                    htmlFor="inputPassword">Wallet passphrase</label>
                </div>
                <button
                  type="button"
                  className="btn btn-primary btn-block"
                  onClick={ this.unlockWallet }
                  disabled={ !this.state.loginPassphrase || !this.state.loginPassphrase.length }>Unlock</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop show in"></div>
    </div>
  );
};

export default LoginModalRender;