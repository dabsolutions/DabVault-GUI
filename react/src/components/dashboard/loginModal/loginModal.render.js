import React from 'react';
import { translate } from '../../../translate/translate';

const LoginModalRender = function () {
  return (
    <div>
      <div
        className={ 'modal modal-3d-sign add-coin-modal ' + (this.state.display ? 'show in' : 'fade hide') }
        id="AddCoinDilogModel-login"
        aria-hidden="true"
        aria-labelledby="AddCoinDilogModel-login"
        role="dialog"
        tabIndex="-1">
        <div className="modal-dialog modal-center modal-lg">
          <div className="modal-content">
            <div className="modal-header bg-orange-a400 wallet-send-header">
              <button
                type="button"
                className="close white"
                aria-label="Close"
                onClick={ this.dismiss }>
                <span aria-hidden="true">×</span>
              </button>
              <h4 className="modal-title white">{ translate('INDEX.SELECT_A_COIN') }</h4>
            </div>
            <div className="modal-body">
              <div id="wallet-login">
                <div className="page animsition vertical-align text-center fade-in">
                  <div className="page-content vertical-align-middle">
                    <h4 className="color-white">
                      { translate('INDEX.WELCOME_LOGIN') }
                    </h4>
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
                        htmlFor="inputPassword">{ translate('INDEX.WALLET_SEED') }</label>
                    </div>
                    { this.state.loginPassPhraseSeedType &&
                      <div
                        className="form-group form-material floating horizontal-padding-0 margin-top-20 seed-type-block"
                        style={{ width: `${this.state.loginPassPhraseSeedType.length * 8}px` }}>
                        <div className="placeholder-label">{ this.state.loginPassPhraseSeedType }</div>
                      </div>
                    }
                    <button
                      type="button"
                      className="btn btn-primary btn-block"
                      onClick={ this.loginSeed }
                      disabled={ !this.state.loginPassphrase || !this.state.loginPassphrase.length }>{ translate('INDEX.SIGN_IN') }</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModalRender;