import React from 'react';
import { translate } from '../../../translate/translate';
import QRModal from '../qrModal/qrModal';
import InvoiceModal from '../invoiceModal/invoiceModal';

export const AddressActionsNonBasiliskModeRender = function(address, type) {
  return (
    <td>
      <span className={ 'label label-' + (type === 'public' ? 'default' : 'dark') }>
        <i className={ 'icon fa-eye' + (type === 'public' ? '' : '-slash') }></i>
        { type === 'public' ? translate('IAPI.PUBLIC_SM') : translate('KMD_NATIVE.PRIVATE') }
      </span>
      <button
        className="btn btn-default btn-xs clipboard-edexaddr margin-left-10"
        onClick={ () => this._copyCoinAddress(address) }>
          <i className="icon wb-copy"></i> { translate('INDEX.COPY') }
      </button>
      <QRModal content={ address } />
    </td>
  );
};

export const AddressItemRender = function(address, type) {
  return (
    <tr key={ address.address }>
      { this.renderAddressActions(address.address, type) }
      <td>{ type === 'public' ? address.address : `${address.address.substring(0, 34)}...` }</td>
      <td>{ address.amount }</td>
    </tr>
  );
};

export const _ReceiveCoinTableRender = function() {
  return (
    <span>
      { this.checkTotalBalance() !== 0 &&
        <div className="text-left padding-top-10 padding-bottom-10">
          { this.props.mode !== 'spv' &&
            <div>
              <label className="switch">
                <input
                  type="checkbox"
                  value="on"
                  checked={ this.state.hideZeroAddresses } />
                <div
                  className="slider"
                  onClick={ this.toggleVisibleAddress }></div>
              </label>
              <div
                className="toggle-label margin-right-15 pointer"
                onClick={ this.toggleVisibleAddress }>
                { translate('INDEX.TOGGLE_ZERO_ADDRESSES') }
              </div>
            </div>
          }
        </div>
      }
      <table className="table table-hover dataTable table-striped">
        <thead>
          <tr>
            <th>{ translate('INDEX.TYPE') }</th>
            <th>{ translate('INDEX.ADDRESS') }</th>
            <th>{ translate('INDEX.AMOUNT') }</th>
          </tr>
        </thead>
        <tbody>
          { this.renderAddressList('public') }
          { this.renderAddressList('private') }
        </tbody>
        <tfoot>
          <tr>
            <th>{ translate('INDEX.TYPE') }</th>
            <th>{ translate('INDEX.ADDRESS') }</th>
            <th>{ translate('INDEX.AMOUNT') }</th>
          </tr>
        </tfoot>
      </table>
    </span>
  );
};

export const ReceiveCoinRender = function() {
  if (this.props.renderTableOnly) {
    return (
      <div>{ this.ReceiveCoinTableRender() }</div>
    );
  } else {
    return (
      <div>
        <div className="col-xs-12 margin-top-20">
          <div className="panel nav-tabs-horizontal">
            <div>
              <div className="col-xlg-12 col-lg-12 col-sm-12 col-xs-12">
                <div className="panel">
                  <header className="panel-heading">
                    <div className="panel-actions">
                      <InvoiceModal />
                      { this.props.mode !== 'spv' &&
                        <div
                          className={ 'dropdown' + (this.state.openDropMenu ? ' open' : '') }
                          onClick={ this.openDropMenu }>
                          <a className="dropdown-toggle white btn btn-warning">
                            <i className="icon md-arrows margin-right-10"></i> { translate('INDEX.GET_NEW_ADDRESS') }
                            <span className="caret"></span>
                          </a>
                          <ul className="dropdown-menu dropdown-menu-right">
                            <li>
                              <a onClick={ () => this.getNewAddress('public') }>
                                <i className="icon fa-eye"></i> { translate('INDEX.TRANSPARENT_ADDRESS') }
                              </a>
                            </li>
                            <li className={ this.props.coin === 'CHIPS' ? 'hide' : '' }>
                              <a onClick={ () => this.getNewAddress('private') }>
                                <i className="icon fa-eye-slash"></i> { translate('INDEX.PRIVATE_Z_ADDRESS') }
                              </a>
                            </li>
                          </ul>
                        </div>
                      }
                    </div>
                    <h4 className="panel-title">{ translate('INDEX.RECEIVING_ADDRESS') }</h4>
                  </header>
                  <div className="panel-body">
                  { this.ReceiveCoinTableRender() }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};