import React from 'react';
import WalletsBalance from '../walletsBalance/walletsBalance';
import WalletsNativeInfo from '../walletsNativeInfo/walletsNativeInfo';
import WalletsNativeSend from '../walletsNativeSend/walletsNativeSend';
import WalletsProgress from '../walletsProgress/walletsProgress';
import WalletsNativeTxHistory from '../walletsNativeTxHistory/walletsNativeTxHistory';
import ReceiveCoin from '../receiveCoin/receiveCoin';
import { getCoinTitle } from '../../../util/coinHelper';

const WalletsNativeRender = function() {
  const _coinStyle = getCoinTitle(this.props.ActiveCoin.coin);
  let coinLogoPath = _coinStyle.logo.indexOf('.svg') > -1 ? `assets/global/fonts/cryptoicons/${_coinStyle.logo}` : `assets/images/native/${this.defaultBG()}_header_title_logo.png`;

  return (
    <div className="page margin-left-0">
      <div className="padding-top-0">
        <div
          id="easydex-header-div"
          className="background-color-white"
          style={{ 'backgroundImage': `url("assets/images/bg/${this.defaultBG()}_transparent_header_bg.png")` }}>
          <ol className="breadcrumb">
            <li className="header-easydex-section">
              <img src={ coinLogoPath } align="middle" />
              <span
                className={ `easydex-section-image ${(this.props.ActiveCoin.coin === 'KMD' ? 'hide' : '')}` }
                style={{ marginLeft: '20px' }}>
                { this.props.ActiveCoin.coin }
              </span>
            </li>
          </ol>
        </div>
        <div className="page-content">
          <WalletsProgress {...this.props} />
          <div className="row">
            <WalletsBalance {...this.props} />
            <ReceiveCoin {...this.props.ActiveCoin} />
            <WalletsNativeTxHistory {...this.props} />
            <WalletsNativeSend {...this.props} />
            <WalletsNativeInfo {...this.props} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletsNativeRender;