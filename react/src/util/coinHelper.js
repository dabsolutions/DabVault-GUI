export function getCoinTitle(coin) {
  let coindList = {};

  try {
    coindList = window.require('electron').remote.getCurrentWindow().nativeCoindList;
  } catch (e) {
    console.warn('coindList', 'open gui via app');
  }

  let coinLogo;
  let coinName;

  if (coindList[coin.toLowerCase()]) {
    coinLogo = `${coin}.svg`;
    coinName = coindList[coin.toLowerCase()].name;
  }

  switch (coin) {
    case 'BTC':
      coinLogo = 'bitcoin';
      coinName = 'Bitcoin';
      break;
    case 'BTCD':
      coinLogo = 'bitcoindark';
      coinName = 'BitcoinDark';
      break;
    case 'LTC':
      coinLogo = 'litecoin';
      coinName = 'Litecoin';
      break;
    case 'VPN':
      coinLogo = 'vpncoin';
      coinName = 'VPNcoin';
      break;
    case 'SYS':
      coinLogo = 'syscoin';
      coinName = 'Syscoin';
      break;
    case 'ZEC':
      coinLogo = 'zcash';
      coinName = 'Zcash';
      break;
    case 'NMC':
      coinLogo = 'namecoin';
      coinName = 'Namecoin';
      break;
    case 'DEX':
      coinLogo = 'dex';
      coinName = 'InstantDEX';
      break;
    case 'DOGE':
      coinLogo = 'dogecoin';
      coinName = 'Dogecoin';
      break;
    case 'DGB':
      coinLogo = 'digibyte';
      coinName = 'Digibyte';
      break;
    case 'MZC':
      coinLogo = 'mazacoin';
      coinName = 'Mazacoin';
      break;
    case 'UNO':
      coinLogo = 'unobtanium';
      coinName = 'Unobtanium';
      break;
    case 'ZET':
      coinLogo = 'zetacoin';
      coinName = 'Zetacoin';
      break;
    case 'KMD':
      coinLogo = 'komodo';
      coinName = 'Komodo';
      break;
    case 'BTM':
      coinLogo = 'bitmark';
      coinName = 'Bitmark';
      break;
    case 'CARB':
      coinLogo = 'carboncoin';
      coinName = 'Carboncoin';
      break;
    case 'ANC':
      coinLogo = 'anoncoin';
      coinName = 'AnonCoin';
      break;
    case 'FRK':
      coinLogo = 'franko';
      coinName = 'Franko';
      break;
    case 'GAME':
      coinLogo = 'GAME';
      coinName = 'GameCredits';
      break;
    case 'SUPERNET':
      coinLogo = 'SUPERNET';
      coinName = 'SUPERNET';
      break;
    case 'REVS':
      coinLogo = 'REVS';
      coinName = 'REVS';
      break;
    case 'WLC':
      coinLogo = 'WLC';
      coinName = 'WIRELESS';
      break;
    case 'PANGEA':
      coinLogo = 'PANGEA';
      coinName = 'PANGEA';
      break;
    case 'JUMBLR':
      coinLogo = 'JUMBLR';
      coinName = 'JUMBLR';
      break;
    case 'BET':
      coinLogo = 'BET';
      coinName = 'BET';
      break;
    case 'CRYPTO':
      coinLogo = 'CRYPTO';
      coinName = 'CRYPTO';
      break;
    case 'HODL':
      coinLogo = 'HODL';
      coinName = 'HODL';
      break;
    case 'SHARK':
      coinLogo = 'SHARK';
      coinName = 'SHARK';
      break;
    case 'BOTS':
      coinLogo = 'BOTS';
      coinName = 'BOTS';
      break;
    case 'MGW':
      coinLogo = 'MGW';
      coinName = 'MultiGateway';
      break;
    case 'MVP':
      coinLogo = 'MVP';
      coinName = 'MVP Lineup';
      break;
    case 'KV':
      coinLogo = 'KV';
      coinName = 'KV';
      break;
    case 'CEAL':
      coinLogo = 'CEAL';
      coinName = 'CEAL NET';
      break;
    case 'MESH':
      coinLogo = 'MESH';
      coinName = 'SpaceMesh';
      break;
    case 'USD':
      coinLogo = 'usd';
      coinName = 'US Dollar';
      break;
    case 'RON':
      coinLogo = 'RON';
      coinName = 'Romanian Leu';
      break;
    case 'EUR':
      coinLogo = 'EUR';
      coinName = 'Euro';
      break;
    case 'JPY':
      coinLogo = 'JPY';
      coinName = 'Japanese Yen';
      break;
    case 'GBP':
      coinLogo = 'GBP';
      coinName = 'British Pound';
      break;
    case 'AUD':
      coinLogo = 'AUD';
      coinName = 'Australian Dollar';
      break;
    case 'CAD':
      coinLogo = 'CAD';
      coinName = 'Canadian Dollar';
      break;
    case 'CHF':
      coinLogo = 'CHF';
      coinName = 'Swiss Franc';
      break;
    case 'NZD':
      coinLogo = 'NZD';
      coinName = 'New Zealand Dollar';
      break;
    case 'CNY':
      coinLogo = 'CNY';
      coinName = 'Chinese Yuan';
      break;
    case 'RUB':
      coinLogo = 'RUB';
      coinName = 'Russian Ruble';
      break;
    case 'MXN':
      coinLogo = 'MXN';
      coinName = 'Mexican peso';
      break;
    case 'BRL':
      coinLogo = 'BRL';
      coinName = 'Brazilian Real';
      break;
    case 'INR':
      coinLogo = 'INR';
      coinName = 'Indian Rupee';
      break;
    case 'HKD':
      coinLogo = 'HKD';
      coinName = 'Hong Kong Dollar';
      break;
    case 'TRY':
      coinLogo = 'TRY';
      coinName = 'Turkish Lira';
      break;
    case 'ZAR':
      coinLogo = 'ZAR';
      coinName = 'South African Rand';
      break;
    case 'PLN':
      coinLogo = 'PLN';
      coinName = 'Polish Zloty';
      break;
    case 'NOK':
      coinLogo = 'NOK';
      coinName = 'Norwegian Krone';
      break;
    case 'SEK':
      coinLogo = 'SEK';
      coinName = 'Swedish Krona';
      break;
    case 'DKK':
      coinLogo = 'DKK';
      coinName = 'Danish Krone';
      break;
    case 'CZK':
      coinLogo = 'CZK';
      coinName = 'Czech Koruna';
      break;
    case 'HUF':
      coinLogo = 'HUF';
      coinName = 'Hungarian Forint';
      break;
    case 'ILS':
      coinLogo = 'ILS';
      coinName = 'Israeli Shekel';
      break;
    case 'KRW':
      coinLogo = 'KRW';
      coinName = 'Korean Won';
      break;
    case 'MYR':
      coinLogo = 'MYR';
      coinName = 'Malaysian Ringgit';
      break;
    case 'PHP':
      coinLogo = 'PHP';
      coinName = 'Philippine Peso';
      break;
    case 'SGD':
      coinLogo = 'SGD';
      coinName = 'Singapore Dollar';
      break;
    case 'THB':
      coinLogo = 'THB';
      coinName = 'Thai Baht';
      break;
    case 'BGN':
      coinLogo = 'BGN';
      coinName = 'Bulgarian Lev';
      break;
    case 'IDR':
      coinLogo = 'IDR';
      coinName = 'Indonesian Rupiah';
      break;
    case 'HRK':
      coinLogo = 'HRK';
      coinName = 'Croatian Kuna';
      break;
  }

  return {
    'logo': coinLogo,
    'name': coinName
  };
}

export function getModeInfo(mode) {
  let modeStyle = {
    code: null,
    tip: null,
    color: null,
  };

  switch (mode) {
    case 'native':
      modeStyle = {
        code: 'Native',
        tip: 'Native',
        color: 'primary',
      };
      break;
    case 'basilisk':
      modeStyle = {
        code: 'Basilisk',
        tip: 'Basilisk',
        color: 'info',
      };
      break;
    case 'full':
      modeStyle = {
        code: 'Full',
        tip: 'Full',
        color: 'success',
      };
      break;
    case 'virtual':
      modeStyle = {
        code: 'Virtual',
        tip: 'Virtual',
        color: 'danger',
      };
      break;
    case 'notarychains':
      modeStyle = {
        code: 'Notarychains',
        tip: 'Notarychains',
        color: 'dark',
      };
      break;
  }

  return {
    code: modeStyle.code,
    tip: modeStyle.tip,
    color: modeStyle.color,
  };
}