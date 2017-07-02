import React from 'react';

class DEX extends React.Component {
  renderCheckSwapListTab() {
    return (
      <div className="panel panel-default step08_checkswaps">
        <div className="panel-heading" id="headingThree">
          <h4 className="panel-title">
            <a className="collapsed">
              Step #8 - Check Swap List
            </a>
          </h4>
        </div>
        <div id="CheckSwapList" className="panel-collapse collapse">
          <div className="panel-body">
            <div className="col-md-6">
              <p>
                This section will show you information when coin swap is activated and is in process. Use the refrehs swap list button to get updated information.
                <br />
                You will need to press this refresh button again to get latest updates.
              </p>
              <button className="btn btn-default refresh_swap_list_btn">Refresh Swap List</button>
            </div>
            <div className="col-md-6">
              <pre className="checkswaplist-output"></pre>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderSwapTab() {
    return (
      <div className="panel panel-default step07_initswap">
        <div className="panel-heading" id="headingThree">
          <h4 className="panel-title">
            <a className="collapsed">
              Step #7 - Initiate Cross-Blockchain Coin Swap
            </a>
          </h4>
        </div>
        <div id="initcoinswap" className="panel-collapse collapse">
          <div className="panel-body">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="buy_coin" className="control-label">What you want to Buy?</label>
                <select className="form-control buy_coin">
                  <option value="-">- Select -</option>
                  <option value="btc">Bitcoin (BTC)</option>
                  <option value="kmd">Komodo (KMD)</option>
                </select>
                <br />
              </div>
              <br />
              <div className="panel panel-default">
                <div className="panel-heading">
                  <strong>Selected Coin Type: <span className="smartaddr_type"></span></strong>
                </div>
                <div>
                  <table className="table table-striped" style={{ marginBottom: '0' }}>
                    <tr>
                      <td colSpan="3" style={{ textAlign: 'center' }}>
                        <div className="deposit_coin01 col-sm-5"></div>
                        <div className="col-sm-2">
                          <span className="glyphicon glyphicon-transfer" style={{ margin: '12px' }}></span>
                        </div>
                        <div className="deposit_coin02 col-sm-5"></div>
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="2" id="deposit_coin_qrcode" width="100px" height="100px"></td>
                      <td>Deposit <span className="deposit_coin_code"></span> To:</td>
                      <td className="deposit_coin_addr"></td>
                    </tr>
                    <tr>
                      <td className="deposit_info_btns" colSpan="2">
                        Minimum amount to buy/sell Komodo is 100 KMD.<br />
                        Price for selling or buying Komodo will be adjusted and given in default buttons accordinlgy.
                        <br />
                        <br />
                        <div className="deposit_btns_part_hidden" style={{ display: 'none' }}>
                          <p>Use the following button(s) or use the custom amount button to <strong>send a transaction</strong>.</p>
                          <button className="btn btn-default deposit_coin_btn_01">Send 100 KMD</button>
                          <button className="btn btn-default deposit_coin_btn_02">Send 0.001 KMD fee</button>
                          <span className="deposit_coin_btn_03_info">Following button is set with custom BTC deposit amount calculated as:</span>
                          <pre className="deposit_coin_btn_03_info_pre">("Estimate KMD price" x 100 KMD) + 0.001 BTC Fee</pre>
                          <button className="btn btn-default deposit_coin_btn_03">Send <span className="deposit_100kmd_worth_btc_btn"></span> BTC</button>
                          <br />
                          <br />
                          <div className="form-group" style={{ display: 'none' }}>
                            <label htmlFor="deposit_coin_input" className="control-label">Send custom amount</label>
                            <input type="text" className="form-control deposit_coin_input" id="deposit_coin_input" placeholder="e.g. 0.02" required="required" />
                            <button className="btn btn-default deposit_coin_input_btn" style={{ marginTop: '5px' }}></button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <strong>Esitmate Swap Price Calculation</strong>
                </div>
                <div>
                  <table className="table table-striped" style={{ marginBottom: '0' }}>
                    <tr>
                      <td className="coin_swap_rate_info" style={{ fontSize: '22px', textAlign: 'center' }}></td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <strong>Order Details</strong>
                </div>
                <div>
                  <div style={{ margin: '5px' }}>
                    <strong>NOTE:</strong> In Native DEX your reciving address will be different than your logged in wallet main address.
                  </div>
                  <table className="table table-striped" style={{ marginBottom: '0' }}>
                    <tr>
                      <td>
                        Your <span className="swap_deposit_addr_coin_id" style={{ fontWeight: 'bold' }}></span> deposits to
                      </td>
                      <td>
                        <span className="swap_deposit_addr" style={{ fontWeight: 'bold' }}></span>
                      </td>
                    </tr>
                    <tr>
                      <td className="deposit_coin_dest_addr">
                        You Recieve <span className="swap_recieve_addr_coin_id" style={{ fontWeight: 'bold' }}></span> in
                      </td>
                      <td>
                        <span className="swap_recieve_addr" style={{ fontWeight: 'bold' }}></span>
                      </td>
                    </tr>
                    <tr>
                      <td>Amount available in deposit address</td>
                      <td className="deposit_coin_sourceamount"></td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <pre className="initcoinswap-output"></pre>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderWalletOPTab(){
    return (
      <div className="panel panel-default">
        <div className="panel-heading" id="headingThree">
          <h4 className="panel-title">
            <a className="collapsed">
              Step #6 - Wallet Operations
            </a>
          </h4>
        </div>
        <div id="CheckWallet" className="panel-collapse collapse">
          <div className="panel-body">
            <div className="col-md-6">
              <div className="form-group">
                <button className="btn btn-default show-btcbalance">Show Bitcoin Balance</button>
                <button className="btn btn-default show-kmdbalance">Show Komodo Balance</button>
                <button className="btn btn-default showwalletinfo">Show Wallet Info</button>
              </div>
              <br />
              <div className="panel panel-default" style={{ marginBottom: '20px' }}>
                <div className="panel-heading">
                  <strong>Coin: <span className="coin_id"></span></strong>
                </div>
                <div>
                  <table className="table table-striped" style={{ marginBottom: '0' }}>
                    <tr>
                      <td>Main Address</td>
                      <td className="coin_mainaddr"></td>
                    </tr>
                    <tr>
                      <td>Balance</td>
                      <td className="coin_balance"></td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className="form-group">
                <h3>Send Transaction</h3>
                <label htmlFor="send_tx_coin" className="control-label">Select Coin</label>
                <select className="form-control send_tx_coin">
                  <option value="-">- Select -</option>
                  <option value="BTC">Bitcoin (BTC)</option>
                  <option value="KMD">Komodo (KMD)</option>
                </select>
                <br />
                <label htmlFor="send_tx_addr" className="control-label">Send to Address (Destination Address)</label>
                <br />
                <input type="text" className="form-control send_tx_addr" id="send_tx_addr" required="required" />
                <br />
                <label htmlFor="send_tx_amount" className="control-label">Send Amount</label>
                <br />
                <input type="text" className="form-control send_tx_amount" id="send_tx_amount" required="required" />
                <br />
                <button className="btn btn-default send_tx_addr_btn">Send</button>
              </div>
            </div>
            <div className="col-md-6">
              <pre className="checkwallet-output"></pre>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderDEXParamsTab() {
    return (
      <div className="panel panel-default step05_dexparams">
        <div className="panel-heading" id="headingThree">
          <h4 className="panel-title">
            <a className="collapsed" href="#AdjustDEXParams">
              Step #5 - Adjust DEX Parameters
            </a>
          </h4>
        </div>
        <div id="AdjustDEXParams" className="panel-collapse collapse">
          <div className="panel-body">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="dexratio" className="control-label">DEX Ratio</label>
                <input type="text" className="form-control dexratio-val" id="dexratio" placeholder="eg. 0.97" required="required" />
                <br />
                <button className="btn btn-default dexratio-btn">Set DEX Ratio</button>
              </div>
              <br />
            </div>
            <div className="col-md-6">
              <pre className="dexparams-output"></pre>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderListSmartAddressesTab() {
    return (
      <div className="panel panel-default step04_smartaddr">
        <div className="panel-heading" id="headingThree">
          <h4 className="panel-title">
            <a className="collapsed">
              Step #4 - List Smart Addresses
            </a>
          </h4>
        </div>
        <div id="ListSmartAddresses" className="panel-collapse collapse">
          <div className="panel-body">
            <div className="col-md-12">
              <h4>
                FAQ for Smart Addresses can be found <a href="https://github.com/SuperNETorg/komodo/wiki/FAQ-for-smartaddresses" target="blank">here</a>
              </h4>
              <button className="btn btn-default list-smartaddress">List Smart Addresses</button>
            </div>
            <div className="col-md-6" style={{ marginTop: '20px' }}>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <strong>Type: Deposit</strong>
                </div>
                <div>
                  <table className="table table-striped">
                    <tr>
                      <td className="deposit_key0"></td>
                      <td className="deposit_val0"></td>
                    </tr>
                    <tr>
                      <td className="deposit_key1"></td>
                      <td className="deposit_val1"></td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <strong>Type: Jumblr</strong>
                </div>
                <div>
                  <table className="table table-striped">
                    <tr>
                      <td className="jumblr_key0"></td>
                      <td className="jumblr_val0"></td>
                    </tr>
                    <tr>
                      <td className="jumblr_key1"></td>
                      <td className="jumblr_val1"></td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <strong>Type: <span className="type0"></span></strong>
                </div>
                <div>
                  <table className="table table-striped">
                    <tr>
                      <td>coin</td>
                      <td className="type0_val0"></td>
                    </tr>
                    <tr>
                      <td>address</td>
                      <td className="type0_val1"></td>
                    </tr>
                    <tr>
                      <td>dest</td>
                      <td className="type0_val2"></td>
                    </tr>
                    <tr>
                      <td>jumblr_deposit</td>
                      <td className="type0_val3"></td>
                    </tr>
                    <tr>
                      <td>deposit_avail</td>
                      <td className="type0_val4"></td>
                    </tr>
                    <tr>
                      <td>jumblr</td>
                      <td className="type0_val5"></td>
                    </tr>
                    <tr>
                      <td>jumblr_avail</td>
                      <td className="type0_val6"></td>
                    </tr>
                    <tr>
                      <td>extra</td>
                      <td className="type0_val7"></td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <strong>Type: <span className="type1"></span></strong>
                </div>
                <div>
                  <table className="table table-striped">
                    <tr>
                      <td>coin</td>
                      <td className="type1_val0"></td>
                    </tr>
                    <tr>
                      <td>address</td>
                      <td className="type1_val1"></td>
                    </tr>
                    <tr>
                      <td>dest</td>
                      <td className="type1_val2"></td>
                    </tr>
                    <tr>
                      <td>jumblr_deposit</td>
                      <td className="type1_val3"></td>
                    </tr>
                    <tr>
                      <td>deposit_avail</td>
                      <td className="type1_val4"></td>
                    </tr>
                    <tr>
                      <td>jumblr</td>
                      <td className="type1_val5"></td>
                    </tr>
                    <tr>
                      <td>jumblr_avail</td>
                      <td className="type1_val6"></td>
                    </tr>
                    <tr>
                      <td>extra</td>
                      <td className="type1_val7"></td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <pre className="smartaddress-output"></pre>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderWalletLoginTab() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading" id="headingThree">
          <h4 className="panel-title">
            <a className="collapsed">
              Step #3 - Wallet Login
            </a>
          </h4>
        </div>
        <div id="WalletLogin" className="panel-collapse collapse">
          <div className="panel-body">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="passphrase" className="control-label">Passphrase</label>
                  <input type="text" className="form-control passphrase-text" id="passphrase" placeholder="Enter your text only passphrase" required="required" />
                  <br />
                  <label htmlFor="login_type" className="control-label">Login Type</label>
                  <select className="form-control login_type">
                    <option value="login_main_wallet">Main Wallet Login</option>
                    <option value="login_btc_jumblr">Login to access BTC DEX address</option>
                    <option value="login_kmd_jumblr">Login to access KMD DEX address</option>
                    <option value="login_jumblr">Login to accesss Jumblr destination address</option>
                    <option value="login_deposit">Login to access Jumblr deposit address</option>
                  </select>
                  <br />
                  <button className="btn btn-default login-btn">Login</button>
                  <button className="btn btn-default logout-btn">Logout</button>
                  <br /><br />
              </div>
              <br />
            </div>
            <div className="col-md-6">
              <pre className="passphrase-output"></pre>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderBlocktrailApiTab() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading" id="headingTwo">
          <h4 className="panel-title">
            <a className="collapsed">
              Step #2 - Setup Blocktrail.com API
            </a>
          </h4>
        </div>
        <div id="SetupBlockTrail" className="panel-collapse collapse">
          <div className="panel-body">
            <p>
              You need Blocktrail.com API. Please sign-up by going to <a href="https://www.blocktrail.com/dev/signup" target="blank">this link</a>.
              <br />
              After login in your account go to "Settings", then go to "API Keys" tab there and get new keys from there.
              <br />
              Make sure to save the newly generated 'API Key' and 'API Secret'. You will only see this 'API Secret' first time and never again.
            </p>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="blocktrailapi" className="control-label">Blocktrail API Key</label>
                <input type="text" className="form-control blocktrailapi-key" id="blocktrailapi" placeholder="Blocktrail API Key" required="required" />
                <br />
                <button className="btn btn-default blocktrailapi-btn">Activate Blocktrail API</button>
                <br />
                <br />
                If you are not Liquidity Provider make sure to push this button: <button className="btn btn-default notlp-btn">I am not LP</button>
              </div>
              <br />
            </div>
            <div className="col-md-6">
              <pre className="blocktrail-output"></pre>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderActivateCoinTab() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading" id="headingOne">
          <h4 className="panel-title">
            <a>
              Step #1 - Activate Coin
            </a>
          </h4>
        </div>
        <div id="ActivateCoin" className="panel-collapse collapse in">
          <div className="panel-body">
            <div className="col-md-6">
              <div className="form-group">
                <button className="btn btn-default activate-btc">Activate Bitcoin</button>
                <button className="btn btn-default activate-kmd">Activate Komodo</button>
                <button className="btn btn-default active-coin-status">Active Coins Status</button>
              </div>
            </div>
            <div className="col-md-6">
              <pre className="active-coin-output"></pre>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="container-fluid">
        <h3 className="center">DEX</h3>
        <div className="row">
          <div className="col-md-12">
            <div className="panel-group dex">
              { this.renderActivateCoinTab() }
              { this.renderBlocktrailApiTab() }
              { this.renderWalletLoginTab() }
              { this.renderListSmartAddressesTab() }
              { this.renderDEXParamsTab() }
              { this.renderWalletOPTab() }
              { this.renderSwapTab() }
              { this.renderCheckSwapListTab() }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DEX;
