import React from 'react';

class DEX extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };
  }

  changeTab(num) {
    this.setState(Object.assign({}, this.state, {
      activeTab: num, 
    }));
  }

  renderNavMenu() {
    return (
      <ul className="site-navbar navbar navbar-default navbar-fixed-top navbar-mega dex-navbar">
        <li
          className={ this.state.activeTab === 0 ? 'active' : '' }
          onClick={ () => this.changeTab(0) }>
          <a>Exchange</a>
        </li>
        <li
          className={ this.state.activeTab === 1 ? 'active' : '' }
          onClick={ () => this.changeTab(1) }>
          <a>Balances</a>
        </li>
        <li
          className={ this.state.activeTab === 2 ? 'active' : '' }
          onClick={ () => this.changeTab(2) }>
          <a>My Prices</a>
        </li>
      </ul>
    );
  }

  renderExchangeTab() {
    return (
      <div className="container-fluid section section-exchange">
        <div className="row">
          <div className="col-sm-2">
            <div className="panel panel-danger">
              <div className="panel-heading">
                <strong>Selling Pair</strong>
              </div>
              <div style={{ padding: '5px', height: '340px', overflowY: 'scroll' }}>
                <div className="list_active_coins">
                  <button className="btn btn-default btn-block inv_btn" data-coin="KMD">Komodo (KMD)</button>
                  <button className="btn btn-default btn-block inv_btn" data-coin="BTC">Bitcoin (BTC)</button>
                  <button className="btn btn-default btn-block inv_btn" data-coin="DOGE">Dogecoin (DOGE)</button>
                  <button className="btn btn-default btn-block inv_btn" data-coin="HUSH">Hushcoin (HUSH)</button>
                  <button className="btn btn-default btn-block inv_btn" data-coin="DGB">Digibyte (DGB)</button>
                  <button className="btn btn-default btn-block inv_btn" data-coin="MZC">Mazacoin (MZC)</button>
                  <button className="btn btn-default btn-block inv_btn" data-coin="SYS">Syscoin (SYS)</button>
                  <button className="btn btn-default btn-block inv_btn" data-coin="UNO">Unobtanium (UNO)</button>
                  <button className="btn btn-default btn-block inv_btn" data-coin="ZET">Zetacoin (ZET)</button>
                  <button className="btn btn-default btn-block inv_btn" data-coin="ZEC">Zcash (ZEC)</button>
                  <button className="btn btn-default btn-block inv_btn" data-coin="BTM">Bitmark (BTM)</button>
                  <button className="btn btn-default btn-block inv_btn" data-coin="CARB">Carboncoin (CARB)</button>
                  <button className="btn btn-default btn-block inv_btn" data-coin="ANC">Anoncoin (ANC)</button>
                  <button className="btn btn-default btn-block inv_btn" data-coin="FRK">Franko (FRK)</button>
                  <button className="btn btn-default btn-block inv_btn" data-coin="GAME">Gamecredits (GAME)</button>
                  <button className="btn btn-default btn-block inv_btn" data-coin="LTC">Litecoin (LTC)</button>
                  <button className="btn btn-default btn-block inv_btn" data-coin="REVS">REV SHARE (REVS)</button>
                  <button className="btn btn-default btn-block inv_btn" data-coin="JUMBLR">JUMBLR (JUMBLR)</button>
                  <button className="btn btn-default btn-block inv_btn" data-coin="SUPERNET">SUPERNET (SUPERNET)</button>
                  <button className="btn btn-default btn-block inv_btn" data-coin="WLC">Wireless (WLC)</button>
                  <button className="btn btn-default btn-block inv_btn" data-coin="PANGEA">Pangea (PANGEA)</button>
                  <button className="btn btn-default btn-block inv_btn" data-coin="DEX">InstantDEX (DEX)</button>
                  <button className="btn btn-default btn-block inv_btn" data-coin="BET">BET (BET)</button>
                  <button className="btn btn-default btn-block inv_btn" data-coin="CRYPTO">Crypto777 (CRYPTO)</button>
                  <button className="btn btn-default btn-block inv_btn" data-coin="HODL">HODL (HODL)</button>
                  <button className="btn btn-default btn-block inv_btn" data-coin="SHARK">SHARK (SHARK)</button>
                  <button className="btn btn-default btn-block inv_btn" data-coin="BOTS">BOTS (BOTS)</button>
                  <button className="btn btn-default btn-block inv_btn" data-coin="MGW">MultiGateway (MGW)</button>
                  <button className="btn btn-default btn-block inv_btn" data-coin="MVP">MVP Lineup (MVP)</button>
                  <button className="btn btn-default btn-block inv_btn" data-coin="KV">KeyValue (KV)</button>
                  <button className="btn btn-default btn-block inv_btn" data-coin="CEAL">Ceal.io (CEAL)</button>
                  <button className="btn btn-default btn-block inv_btn" data-coin="MESH">SuperMesh (MESH)</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="row">
              <div className="col-sm-6">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <strong>Trading Pairs</strong>
                  </div>
                  <div>
                    <table className="table table-striped" style={{ marginBottom: '0' }}>
                      <tr>
                        <td style={{ fontSize: '22px', textAlign: 'center' }}>
                          <div className="deposit_coin01 col-sm-5"></div>
                          <div className="col-sm-2">
                            <span className="glyphicon glyphicon-arrow-right" style={{ margin: '12px' }}></span>
                          </div>
                          <div className="deposit_coin02 col-sm-5"></div>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <strong>Esitmate Swap Price Calculation</strong>
                    <button className="btn btn-default btn-sm refresh_estimate_price" style={{ float: 'right', fontSize: '13px', padding: '0 5px' }}>Refresh</button>
                  </div>
                  <div>
                    <table className="table table-striped" style={{ marginBottom: '0' }}>
                      <tr>
                        <td className="coin_swap_rate_info" style={{ fontSize: '22px', textAlign: 'center' }}>
                          <div className="coin_swap_rate_info1"></div>
                          <div className="coin_swap_rate_info2"></div>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    BUY <span className="autotrade_buy_coin"></span>
                    <button className="btn btn-default btn-sm refresh_inv_table" style={{ float: 'right', fontSize: '13px', padding: '0 5px' }} data-coin="COIN">Refresh</button>  <span style={{ float: 'right', fontSize: '13px', padding: '0 5px' }}>Max Amount: <b><span className="autotrade_max_amount"></span> <span className="autotrade_max_amount_coin"></span></b></span>
                  </div>
                  <div className="panel-body">
                    <div className="form-group">
                      <label for="autotrade_amount">Amount</label>
                      <input type="text" className="form-control" id="autotrade_amount" placeholder="Amount" />
                    </div>
                    <div className="form-group">
                      <label for="autotrade_price">Price</label>
                      <input type="text" className="form-control" id="autotrade_price" placeholder="Price" />
                    </div>                      
                    <button className="btn btn-default autotrade_buy_coin_btn">Submit</button>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    Sell <span className="lp_sell_coin"></span>
                  </div>
                  <div className="panel-body">
                    <div className="form-group">
                      <label for="lp_set_price">Set Price</label>
                      <input type="text" className="form-control" id="lp_set_price" placeholder="Set Price" />
                    </div>                      
                    <button className="btn btn-default lp_set_price_btn">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="panel panel-success">
              <div className="panel-heading">
                <strong>Buying Pair</strong>
              </div>
              <div style={{ padding: '5px', height: '340px', overflowY: 'scroll' }}>
                <div className="list_active_coins">
                  <button className="btn btn-default btn-block buy_coin" data-coin="KMD">Komodo (KMD)</button>
                  <button className="btn btn-default btn-block buy_coin" data-coin="BTC">Bitcoin (BTC)</button>
                  <button className="btn btn-default btn-block buy_coin" data-coin="DOGE">Dogecoin (DOGE)</button>
                  <button className="btn btn-default btn-block buy_coin" data-coin="HUSH">Hushcoin (HUSH)</button>
                  <button className="btn btn-default btn-block buy_coin" data-coin="DGB">Digibyte (DGB)</button>
                  <button className="btn btn-default btn-block buy_coin" data-coin="MZC">Mazacoin (MZC)</button>
                  <button className="btn btn-default btn-block buy_coin" data-coin="SYS">Syscoin (SYS)</button>
                  <button className="btn btn-default btn-block buy_coin" data-coin="UNO">Unobtanium (UNO)</button>
                  <button className="btn btn-default btn-block buy_coin" data-coin="ZET">Zetacoin (ZET)</button>
                  <button className="btn btn-default btn-block buy_coin" data-coin="ZEC">Zcash (ZEC)</button>
                  <button className="btn btn-default btn-block buy_coin" data-coin="BTM">Bitmark (BTM)</button>
                  <button className="btn btn-default btn-block buy_coin" data-coin="CARB">Carboncoin (CARB)</button>
                  <button className="btn btn-default btn-block buy_coin" data-coin="ANC">Anoncoin (ANC)</button>
                  <button className="btn btn-default btn-block buy_coin" data-coin="FRK">Franko (FRK)</button>
                  <button className="btn btn-default btn-block buy_coin" data-coin="GAME">Gamecredits (GAME)</button>
                  <button className="btn btn-default btn-block buy_coin" data-coin="LTC">Litecoin (LTC)</button>
                  <button className="btn btn-default btn-block buy_coin" data-coin="REVS">REV SHARE (REVS)</button>
                  <button className="btn btn-default btn-block buy_coin" data-coin="JUMBLR">JUMBLR (JUMBLR)</button>
                  <button className="btn btn-default btn-block buy_coin" data-coin="SUPERNET">SUPERNET (SUPERNET)</button>
                  <button className="btn btn-default btn-block buy_coin" data-coin="WLC">Wireless (WLC)</button>
                  <button className="btn btn-default btn-block buy_coin" data-coin="PANGEA">Pangea (PANGEA)</button>
                  <button className="btn btn-default btn-block buy_coin" data-coin="DEX">InstantDEX (DEX)</button>
                  <button className="btn btn-default btn-block buy_coin" data-coin="BET">BET (BET)</button>
                  <button className="btn btn-default btn-block buy_coin" data-coin="CRYPTO">Crypto777 (CRYPTO)</button>
                  <button className="btn btn-default btn-block buy_coin" data-coin="HODL">HODL (HODL)</button>
                  <button className="btn btn-default btn-block buy_coin" data-coin="SHARK">SHARK (SHARK)</button>
                  <button className="btn btn-default btn-block buy_coin" data-coin="BOTS">BOTS (BOTS)</button>
                  <button className="btn btn-default btn-block buy_coin" data-coin="MGW">MultiGateway (MGW)</button>
                  <button className="btn btn-default btn-block buy_coin" data-coin="MVP">MVP Lineup (MVP)</button>
                  <button className="btn btn-default btn-block buy_coin" data-coin="KV">KeyValue (KV)</button>
                  <button className="btn btn-default btn-block buy_coin" data-coin="CEAL">Ceal.io (CEAL)</button>
                  <button className="btn btn-default btn-block buy_coin" data-coin="MESH">SuperMesh (MESH)</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="row" style={{ paddingTop: '10px' }}>
              <div className="col-sm-6">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <strong>Sell Orders</strong>
                    <span style={{ float: 'right' }}>
                      Total Aks: <span className="orderbook_numasks"></span>
                    </span>
                  </div>
                  <div>
                    <table className="table table-fixed orderbook_asks" style={{ marginBottom: '0' }}>
                      <thead>
                        <th className="col-xs-6">
                          Price in <span className="orderbook_rel_coin"></span>
                        </th>
                        <th className="col-xs-6">
                          <span className="orderbook_base_coin"></span>
                        </th>
                      </thead>
                      <tbody>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <strong>Buy Orders</strong>
                    <span style={{ float: 'right' }}>
                      Total Bids: <span className="orderbook_numbids"></span>
                    </span>
                  </div>
                  <div>
                    <table className="table table-fixed orderbook_bids" style={{ marginBottom: '0' }}>
                      <thead>
                        <th className="col-xs-6">
                          Price in <span className="orderbook_rel_coin"></span>
                        </th>
                        <th className="col-xs-6">
                          <span className="orderbook_base_coin"></span>
                        </th>
                      </thead>
                      <tbody>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <strong>Show Swap Status</strong>
                  </div>
                  <div className="panel-body">
                    <div className="col-sm-6">
                      <p>
                        This section will show you information when coin swap is activated and is in process. Use the refrehs swap list button to get updated information.<br />
                        You'll need to press this refresh button again to get latest updates.
                      </p>
                      <button className="btn btn-default refresh_swap_list_btn">Refresh Swap List</button>
                      <form className="form-inline" style={{ paddingTop: '12px' }}>
                        <div className="form-group">
                          <label for="swap_request_id">Request ID</label>
                          <input type="text" className="form-control" id="swap_request_id" placeholder="requestid" />
                        </div>
                        <div className="form-group">
                          <label for="swap_quote_id">Quote ID</label>
                          <input type="email" className="form-control" id="swap_quote_id" placeholder="quoteid" />
                        </div>
                        <button className="btn btn-default check_swap_status_btn">Check Swap Status</button>
                      </form>
                    </div>
                    <div className="col-md-6">
                      <pre className="checkswaplist-output"></pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" style={{ marginTop: '12px' }}>
              <div className="col-md-12">
                <pre className="initcoinswap-output"></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderBalanceTab() {
    return (
      <div className="container-fluid section section-balances">
        <div className="row">
          <h1 style={{ textAlign: 'center', fontWeight: '200' }}>BALANCES, DEPOSITS &amp; WITHDRAWALS</h1>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                <strong>DEX Coins Status</strong>&nbsp;
                <button
                  className="btn btn-default btn-sm refresh_dex_balances"
                  style={{ float: 'right', fontSize: '13px', padding: '0 5px' }}>Refresh</button>
              </div>
              <div>
                <table
                  className="table table-striped dex_balances_tbl"
                  style={{ marginBottom: '0' }}>
                  <thead>
                    <tr>
                      <th>Coin</th>
                      <th>Name</th>
                      <th>Total Balance</th>
                      <th>Deposit Address</th>
                      <th>Status</th>
                      <th>txfee</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderMyPricesTab() {
    return (
      <div className="container-fluid section section-myprices">
        <div className="row">
          <h1 style={{ textAlign: 'center', fontWeight: '200' }}>MY PRICES</h1>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                <strong>My DEX Coins Prices</strong>&nbsp;
                <button
                  className="btn btn-default btn-sm refresh_dex_myprices"
                  style={{ float: 'right', fontSize: '13px', padding: '0 5px' }}>Refresh</button>
              </div>
              <div>
                <table
                  className="table table-striped dex_myprices_tbl"
                  style={{ marginBottom: '0' }}>
                  <thead>
                    <tr>
                      <th>Base</th>
                      <th>Rel</th>
                      <th>Bid</th>
                      <th>Ask</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderDexTab() {
    switch (this.state.activeTab) {
      case 0:
        return this.renderExchangeTab();
        break;
      case 1:
        return this.renderBalanceTab();
        break;
      case 2:
        return this.renderMyPricesTab();
        break;
    }
  }

  render() {
    return (
      <div className="dex">
        { this.renderNavMenu() }
        { this.renderDexTab() }
      </div>
    );
  }
}

export default DEX;
