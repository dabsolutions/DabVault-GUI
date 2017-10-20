import React from 'react';
import WalletsBalance from '../walletsBalance/walletsBalance';
import WalletsInfo from '../walletsInfo/walletsInfo';
import SendCoin from '../sendCoin/sendCoin';
import WalletsProgress from '../walletsProgress/walletsProgress';
import WalletsData from '../walletsData/walletsData';
import ReceiveCoin from '../receiveCoin/receiveCoin';

const WalletsMainRender = function() {
  return (
    <div className="page margin-left-0">
      <div className="padding-top-0">
        <div
          id="easydex-header-div"
          className="background-color-white"
          style={ this.getCoinStyle('transparent') }>
          <ol className={ 'coin-logo breadcrumb' + (this.props.ActiveCoin.coin === 'KMD' || this.props.ActiveCoin.coin === 'JUMBLR' || this.props.ActiveCoin.coin === 'MESH' || this.props.ActiveCoin.coin === 'MVP' ? ' coin-logo-wide' : '') + ' native-coin-logo' }>
            <li className="header-easydex-section">
              { this.getCoinStyle('title') &&
                <img src={ this.getCoinStyle('title') } />
              }
              <span
                className={ `easydex-section-image ${(this.props.ActiveCoin.coin === 'KMD' || this.props.ActiveCoin.coin === 'JUMBLR' || this.props.ActiveCoin.coin === 'MESH' || this.props.ActiveCoin.coin === 'MVP' ? 'hide' : '')}` }
                style={{ marginLeft: '20px' }}>
                { this.props.ActiveCoin.coin }
              </span>
            </li>
          </ol>
        </div>
        <div className="page-content page-content-native">
          { this.props.ActiveCoin.mode !== 'spv' &&
            <WalletsProgress />
          }
          <div className="row">
            <WalletsBalance />
            <ReceiveCoin />
            <WalletsData />
            <SendCoin />
            <WalletsInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletsMainRender;