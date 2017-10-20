// TODO: merge check functions
//			 move to nodejs

export function checkAC(coinVal) {
	if (coinVal === 'SUPERNET' ||
			coinVal === 'REVS' ||
			coinVal === 'WLC' ||
			coinVal === 'DEX' ||
			coinVal === 'PANGEA' ||
			coinVal === 'JUMBLR' ||
			coinVal === 'BET' ||
			coinVal === 'CRYPTO' ||
			coinVal === 'COQUI' ||
			coinVal === 'HODL' ||
			coinVal === 'SHARK' ||
			coinVal === 'BOTS' ||
			coinVal === 'MGW' ||
			coinVal === 'MVP' ||
			coinVal === 'KV' ||
			coinVal === 'CEAL' ||
			coinVal === 'MESH' ||
			coinVal === 'USD' ||
			coinVal === 'RON' ||
			coinVal === 'EUR' ||
			coinVal === 'JPY' ||
			coinVal === 'GBP' ||
			coinVal === 'AUD' ||
			coinVal === 'CAD' ||
			coinVal === 'CHF' ||
			coinVal === 'NZD' ||
			coinVal === 'CNY' ||
			coinVal === 'RUB' ||
			coinVal === 'MXN' ||
			coinVal === 'BRL' ||
			coinVal === 'INR' ||
			coinVal === 'HKD' ||
			coinVal === 'TRY' ||
			coinVal === 'ZAR' ||
			coinVal === 'PLN' ||
			coinVal === 'NOK' ||
			coinVal === 'SEK' ||
			coinVal === 'DKK' ||
			coinVal === 'CZK' ||
			coinVal === 'HUF' ||
			coinVal === 'ILS' ||
			coinVal === 'KRW' ||
			coinVal === 'MYR' ||
			coinVal === 'PHP' ||
			coinVal === 'SGD' ||
			coinVal === 'THB' ||
			coinVal === 'BGN' ||
			coinVal === 'IDR' ||
			coinVal === 'MNZ' ||
			coinVal === 'HRK')	{
		return true;
	} else {
		return false;
	}
}

export function checkCoinType(coin) {
	if (coin === 'USD' ||
			coin === 'RON' ||
			coin === 'RUB' ||
			coin === 'SEK' ||
			coin === 'SGD' ||
			coin === 'THB' ||
			coin === 'TRY' ||
			coin === 'ZAR' ||
			coin === 'CNY' ||
			coin === 'CZK' ||
			coin === 'DKK' ||
			coin === 'EUR' ||
			coin === 'GBP' ||
			coin === 'HKD' ||
			coin === 'HUF' ||
			coin === 'IDR' ||
			coin === 'ILS' ||
			coin === 'INR' ||
			coin === 'JPY' ||
			coin === 'KRW' ||
			coin === 'MXN' ||
			coin === 'MYR' ||
			coin === 'NOK' ||
			coin === 'NZD' ||
			coin === 'PHP' ||
			coin === 'PLN' ||
			coin === 'AUD' ||
			coin === 'BGN' ||
			coin === 'BRL' ||
			coin === 'CAD' ||
			coin === 'CHF') {
		return 'currency_ac';
	}

	if (coin === 'SUPERNET' ||
			coin === 'REVS' ||
			coin === 'SUPERNET' ||
			coin === 'PANGEA' ||
			coin === 'DEX' ||
			coin === 'JUMBLR' ||
			coin === 'BET' ||
			coin === 'CRYPTO' ||
			coin === 'COQUI' ||
			coin === 'HODL' ||
			coin === 'SHARK' ||
			coin === 'BOTS' ||
			coin === 'MGW' ||
			coin === 'MVP' ||
			coin === 'KV' ||
			coin === 'CEAL' ||
			coin === 'MESH' ||
			coin === 'WLC' ||
			coin === 'MNZ') {
		return 'ac';
	}

	if (coin === 'BTC' ||
			coin === 'BTCD' ||
			coin === 'LTC' ||
			coin === 'DOGE' ||
			coin === 'DGB' ||
			coin === 'MZC' ||
			coin === 'SYS' ||
			coin === 'UNO' ||
			coin === 'BTM' ||
			coin === 'CARB' ||
			coin === 'ANC' ||
			coin === 'FRK' ||
			coin === 'GAME' ||
			coin === 'ZEC' ||
			coin === 'KMD' ||
			coin === 'ZET') {
		return 'crypto';
	}
}

export function startCurrencyAssetChain(confpath, coin, mode) {
	let AddCoinDataPayload = {};
	let assetChainPorts;

  try {
    assetChainPorts = window.require('electron').remote.getCurrentWindow().assetChainPorts;
  } catch (e) {}

	let _payloadVar = {
		'userpass': tmpIguanaRPCAuth,
		'unitval': '20',
		'zcash': 1,
		'RELAY': mode,
		'VALIDATE': mode,
		'prefetchlag': -1,
		'poll': 100,
		'active': 1,
		'agent': 'iguana',
		'method': 'addcoin',
		'startpend': tmpPendValue,
		'endpend': tmpPendValue,
		'services': 129,
		'maxpeers': 8,
		'newcoin': coin,
		'name': coin,
		'hasheaders': 1,
		'useaddmultisig': 0,
		'netmagic': '2d8e7803',
		'p2p': 13966,
		'rpc': 13967,
		'pubval': 60,
		'p2shval': 85,
		'wifval': 188,
		'txfee_satoshis': '10000',
		'isPoS': 0,
		'minoutput': 10000,
		'minconfirms': 2,
		'genesishash': '027e3758c3a65b12aa1046462b486d0a63bfa1beae327897f56c5cfb7daaae71',
		'protover': 170002,
		'genesisblock': '0100000000000000000000000000000000000000000000000000000000000000000000003ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a000000000000000000000000000000000000000000000000000000000000000029ab5f490f0f0f200b00000000000000000000000000000000000000000000000000000000000000fd4005000d5ba7cda5d473947263bf194285317179d2b0d307119c2e7cc4bd8ac456f0774bd52b0cd9249be9d40718b6397a4c7bbd8f2b3272fed2823cd2af4bd1632200ba4bf796727d6347b225f670f292343274cc35099466f5fb5f0cd1c105121b28213d15db2ed7bdba490b4cedc69742a57b7c25af24485e523aadbb77a0144fc76f79ef73bd8530d42b9f3b9bed1c135ad1fe152923fafe98f95f76f1615e64c4abb1137f4c31b218ba2782bc15534788dda2cc08a0ee2987c8b27ff41bd4e31cd5fb5643dfe862c9a02ca9f90c8c51a6671d681d04ad47e4b53b1518d4befafefe8cadfb912f3d03051b1efbf1dfe37b56e93a741d8dfd80d576ca250bee55fab1311fc7b3255977558cdda6f7d6f875306e43a14413facdaed2f46093e0ef1e8f8a963e1632dcbeebd8e49fd16b57d49b08f9762de89157c65233f60c8e38a1f503a48c555f8ec45dedecd574a37601323c27be597b956343107f8bd80f3a925afaf30811df83c402116bb9c1e5231c70fff899a7c82f73c902ba54da53cc459b7bf1113db65cc8f6914d3618560ea69abd13658fa7b6af92d374d6eca9529f8bd565166e4fcbf2a8dfb3c9b69539d4d2ee2e9321b85b331925df195915f2757637c2805e1d4131e1ad9ef9bc1bb1c732d8dba4738716d351ab30c996c8657bab39567ee3b29c6d054b711495c0d52e1cd5d8e55b4f0f0325b97369280755b46a02afd54be4ddd9f77c22272b8bbb17ff5118fedbae2564524e797bd28b5f74f7079d532ccc059807989f94d267f47e724b3f1ecfe00ec9e6541c961080d8891251b84b4480bc292f6a180bea089fef5bbda56e1e41390d7c0e85ba0ef530f7177413481a226465a36ef6afe1e2bca69d2078712b3912bba1a99b1fbff0d355d6ffe726d2bb6fbc103c4ac5756e5bee6e47e17424ebcbf1b63d8cb90ce2e40198b4f4198689daea254307e52a25562f4c1455340f0ffeb10f9d8e914775e37d0edca019fb1b9c6ef81255ed86bc51c5391e0591480f66e2d88c5f4fd7277697968656a9b113ab97f874fdd5f2465e5559533e01ba13ef4a8f7a21d02c30c8ded68e8c54603ab9c8084ef6d9eb4e92c75b078539e2ae786ebab6dab73a09e0aa9ac575bcefb29e930ae656e58bcb513f7e3c17e079dce4f05b5dbc18c2a872b22509740ebe6a3903e00ad1abc55076441862643f93606e3dc35e8d9f2caef3ee6be14d513b2e062b21d0061de3bd56881713a1a5c17f5ace05e1ec09da53f99442df175a49bd154aa96e4949decd52fed79ccf7ccbce32941419c314e374e4a396ac553e17b5340336a1a25c22f9e42a243ba5404450b650acfc826a6e432971ace776e15719515e1634ceb9a4a35061b668c74998d3dfb5827f6238ec015377e6f9c94f38108768cf6e5c8b132e0303fb5a200368f845ad9d46343035a6ff94031df8d8309415bb3f6cd5ede9c135fdabcc030599858d803c0f85be7661c88984d88faa3d26fb0e9aac0056a53f1b5d0baed713c853c4a2726869a0a124a8a5bbc0fc0ef80c8ae4cb53636aa02503b86a1eb9836fcc259823e2692d921d88e1ffc1e6cb2bde43939ceb3f32a611686f539f8f7c9f0bf00381f743607d40960f06d347d1cd8ac8a51969c25e37150efdf7aa4c2037a2fd0516fb444525ab157a0ed0a7412b2fa69b217fe397263153782c0f64351fbdf2678fa0dc8569912dcd8e3ccad38f34f23bbbce14c6a26ac24911b308b82c7e43062d180baeac4ba7153858365c72c63dcf5f6a5b08070b730adb017aeae925b7d0439979e2679f45ed2f25a7edcfd2fb77a8794630285ccb0a071f5cce410b46dbf9750b0354aae8b65574501cc69efb5b6a43444074fee116641bb29da56c2b4a7f456991fc92b2',
		'debug': 0,
		'seedipaddr': '78.47.196.146'
	};

	if (mode === '-1') {
		let _payloadVarRegular = Object.assign({}, _payloadVar);
		delete _payloadVarRegular.userpass;
		_payloadVarRegular.RELAY = -1;
		_payloadVarRegular.VALIDATE = 1;
		_payloadVarRegular.startpend = 4;
		_payloadVarRegular.endpend = 4;
		_payloadVarRegular.path = confpath;

		const USDDiff = {
			'coin': 'USD',
			'conf': 'USD.conf'
		};
		AddCoinDataPayload.USD = Object.assign({}, _payloadVarRegular, USDDiff);

		const RONDiff = {
			'coin': 'RON',
			'conf': 'RON.conf'
		};
		AddCoinDataPayload.RON = Object.assign({}, _payloadVarRegular, RONDiff);

		const RUBDiff = {
			'coin': 'RUB',
			'conf': 'RUB.conf'
		};
		AddCoinDataPayload.RUB = Object.assign({}, _payloadVarRegular, RUBDiff);

		const SEKDiff = {
			'coin': 'SEK',
			'conf': 'SEK.conf'
		};
		AddCoinDataPayload.SEK = Object.assign({}, _payloadVarRegular, SEKDiff);

		const SGDDiff = {
			'coin': 'SGD',
			'conf': 'SGD.conf'
		};
		AddCoinDataPayload.SGD = Object.assign({}, _payloadVarRegular, SGDDiff);

		const THBDiff = {
			'coin': 'THB',
			'conf': 'THB.conf'
		};
		AddCoinDataPayload.THB = Object.assign({}, _payloadVarRegular, THBDiff);

		const TRYDiff = {
			'coin': 'TRY',
			'conf': 'TRY.conf'
		};
		AddCoinDataPayload.TRY = Object.assign({}, _payloadVarRegular, TRYDiff);

		const ZARDiff = {
			'coin': 'ZAR',
			'conf': 'ZAR.conf'
		};
		AddCoinDataPayload.ZAR = Object.assign({}, _payloadVarRegular, ZARDiff);

		const CNYDiff = {
			'coin': 'CNY',
			'conf': 'CNY.conf'
		};
		AddCoinDataPayload.CNY = Object.assign({}, _payloadVarRegular, CNYDiff);

		const CZKDiff = {
			'coin': 'CZK',
			'conf': 'CZK.conf'
		};
		AddCoinDataPayload.CZK = Object.assign({}, _payloadVarRegular, CZKDiff);

		const DKKDiff = {
			'coin': 'DKK',
			'conf': 'DKK.conf'
		};
		AddCoinDataPayload.DKK = Object.assign({}, _payloadVarRegular, DKKDiff);

		const EURDiff = {
			'coin': 'EUR',
			'conf': 'EUR.conf'
		};
		AddCoinDataPayload.EUR = Object.assign({}, _payloadVarRegular, EURDiff);

		const GBPDiff = {
			'coin': 'GBP',
			'conf': 'GBP.conf'
		};
		AddCoinDataPayload.GBP = Object.assign({}, _payloadVarRegular, GBPDiff);

		const HKDDiff = {
			'coin': 'HKD',
			'conf': 'HKD.conf'
		};
		AddCoinDataPayload.HKD = Object.assign({}, _payloadVarRegular, HKDDiff);

		const HUFDiff = {
			'coin': 'HUF',
			'conf': 'HUF.conf'
		};
		AddCoinDataPayload.HUF = Object.assign({}, _payloadVarRegular, HUFDiff);

		const IDRDiff = {
			'coin': 'IDR',
			'conf': 'IDR.conf'
		};
		AddCoinDataPayload.IDR = Object.assign({}, _payloadVarRegular, IDRDiff);

		const ILSDiff = {
			'coin': 'ILS',
			'conf': 'ILS.conf'
		};
		AddCoinDataPayload.ILS = Object.assign({}, _payloadVarRegular, ILSDiff);

		const INRDiff = {
			'coin': 'INR',
			'conf': 'INR.conf'
		};
		AddCoinDataPayload.INR = Object.assign({}, _payloadVarRegular, INRDiff);

		const JPYDiff = {
			'coin': 'JPY',
			'conf': 'JPY.conf'
		};
		AddCoinDataPayload.JPY = Object.assign({}, _payloadVarRegular, JPYDiff);

		const KRWDiff = {
			'coin': 'KRW',
			'conf': 'KRW.conf'
		};
		AddCoinDataPayload.KRW = Object.assign({}, _payloadVarRegular, KRWDiff);

		const MXNDiff = {
			'coin': 'MXN',
			'conf': 'MXN.conf'
		};
		AddCoinDataPayload.MXN = Object.assign({}, _payloadVarRegular, MXNDiff);

		const MYRDiff = {
			'coin': 'MYR',
			'conf': 'MYR.conf'
		};
		AddCoinDataPayload.MYR = Object.assign({}, _payloadVarRegular, MYRDiff);

		const NOKDiff = {
			'coin': 'NOK',
			'conf': 'NOK.conf'
		};
		AddCoinDataPayload.NOK = Object.assign({}, _payloadVarRegular, NOKDiff);

		const NZDDiff = {
			'coin': 'NZD',
			'conf': 'NZD.conf'
		};
		AddCoinDataPayload.NZD = Object.assign({}, _payloadVarRegular, NZDDiff);

		const PHPDiff = {
			'coin': 'PHP',
			'conf': 'PHP.conf'
		};
		AddCoinDataPayload.PHP = Object.assign({}, _payloadVarRegular, PHPDiff);

		const PLNDiff = {
			'coin': 'PLN',
			'conf': 'PLN.conf'
		};
		AddCoinDataPayload.PLN = Object.assign({}, _payloadVarRegular, PLNDiff);

		const AUDDiff = {
			'coin': 'AUD',
			'conf': 'AUD.conf'
		};
		AddCoinDataPayload.AUD = Object.assign({}, _payloadVarRegular, AUDDiff);

		const BGNDiff = {
			'coin': 'BGN',
			'conf': 'BGN.conf'
		};
		AddCoinDataPayload.BGN = Object.assign({}, _payloadVarRegular, BGNDiff);

		const BRLDiff = {
			'coin': 'BRL',
			'conf': 'BRL.conf'
		};
		AddCoinDataPayload.BRL = Object.assign({}, _payloadVarRegular, BRLDiff);

		const CADDiff = {
			'coin': 'CAD',
			'conf': 'CAD.conf'
		};
		AddCoinDataPayload.CAD = Object.assign({}, _payloadVarRegular, CADDiff);

		const CHFDiff = {
			'coin': 'CHF',
			'conf': 'CHF.conf'
		};
		AddCoinDataPayload.CHF = Object.assign({}, _payloadVarRegular, CHFDiff);

		return AddCoinDataPayload[coin];
	}
}

export function startAssetChain(confpath, coin, mode, getSuppyOnly) {
	let assetChainPorts;

  try {
    assetChainPorts = window.require('electron').remote.getCurrentWindow().assetChainPorts;
  } catch (e) {}

	const _acPayloadOrigin = {
		'unitval': '20',
		'zcash': 1,
		'prefetchlag': -1,
		'poll': 100,
		'active': 1,
		'agent': 'iguana',
		'method': 'addcoin',
		'services': 129,
		'hasheaders': 1,
		'useaddmultisig': 0,
		'pubval': 60,
		'p2shval': 85,
		'wifval': 188,
		'txfee_satoshis': '10000',
		'isPoS': 0,
		'minoutput': 10000,
		'minconfirms': 2,
		'genesishash': '027e3758c3a65b12aa1046462b486d0a63bfa1beae327897f56c5cfb7daaae71',
		'protover': 170002,
		'genesisblock': '0100000000000000000000000000000000000000000000000000000000000000000000003ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a000000000000000000000000000000000000000000000000000000000000000029ab5f490f0f0f200b00000000000000000000000000000000000000000000000000000000000000fd4005000d5ba7cda5d473947263bf194285317179d2b0d307119c2e7cc4bd8ac456f0774bd52b0cd9249be9d40718b6397a4c7bbd8f2b3272fed2823cd2af4bd1632200ba4bf796727d6347b225f670f292343274cc35099466f5fb5f0cd1c105121b28213d15db2ed7bdba490b4cedc69742a57b7c25af24485e523aadbb77a0144fc76f79ef73bd8530d42b9f3b9bed1c135ad1fe152923fafe98f95f76f1615e64c4abb1137f4c31b218ba2782bc15534788dda2cc08a0ee2987c8b27ff41bd4e31cd5fb5643dfe862c9a02ca9f90c8c51a6671d681d04ad47e4b53b1518d4befafefe8cadfb912f3d03051b1efbf1dfe37b56e93a741d8dfd80d576ca250bee55fab1311fc7b3255977558cdda6f7d6f875306e43a14413facdaed2f46093e0ef1e8f8a963e1632dcbeebd8e49fd16b57d49b08f9762de89157c65233f60c8e38a1f503a48c555f8ec45dedecd574a37601323c27be597b956343107f8bd80f3a925afaf30811df83c402116bb9c1e5231c70fff899a7c82f73c902ba54da53cc459b7bf1113db65cc8f6914d3618560ea69abd13658fa7b6af92d374d6eca9529f8bd565166e4fcbf2a8dfb3c9b69539d4d2ee2e9321b85b331925df195915f2757637c2805e1d4131e1ad9ef9bc1bb1c732d8dba4738716d351ab30c996c8657bab39567ee3b29c6d054b711495c0d52e1cd5d8e55b4f0f0325b97369280755b46a02afd54be4ddd9f77c22272b8bbb17ff5118fedbae2564524e797bd28b5f74f7079d532ccc059807989f94d267f47e724b3f1ecfe00ec9e6541c961080d8891251b84b4480bc292f6a180bea089fef5bbda56e1e41390d7c0e85ba0ef530f7177413481a226465a36ef6afe1e2bca69d2078712b3912bba1a99b1fbff0d355d6ffe726d2bb6fbc103c4ac5756e5bee6e47e17424ebcbf1b63d8cb90ce2e40198b4f4198689daea254307e52a25562f4c1455340f0ffeb10f9d8e914775e37d0edca019fb1b9c6ef81255ed86bc51c5391e0591480f66e2d88c5f4fd7277697968656a9b113ab97f874fdd5f2465e5559533e01ba13ef4a8f7a21d02c30c8ded68e8c54603ab9c8084ef6d9eb4e92c75b078539e2ae786ebab6dab73a09e0aa9ac575bcefb29e930ae656e58bcb513f7e3c17e079dce4f05b5dbc18c2a872b22509740ebe6a3903e00ad1abc55076441862643f93606e3dc35e8d9f2caef3ee6be14d513b2e062b21d0061de3bd56881713a1a5c17f5ace05e1ec09da53f99442df175a49bd154aa96e4949decd52fed79ccf7ccbce32941419c314e374e4a396ac553e17b5340336a1a25c22f9e42a243ba5404450b650acfc826a6e432971ace776e15719515e1634ceb9a4a35061b668c74998d3dfb5827f6238ec015377e6f9c94f38108768cf6e5c8b132e0303fb5a200368f845ad9d46343035a6ff94031df8d8309415bb3f6cd5ede9c135fdabcc030599858d803c0f85be7661c88984d88faa3d26fb0e9aac0056a53f1b5d0baed713c853c4a2726869a0a124a8a5bbc0fc0ef80c8ae4cb53636aa02503b86a1eb9836fcc259823e2692d921d88e1ffc1e6cb2bde43939ceb3f32a611686f539f8f7c9f0bf00381f743607d40960f06d347d1cd8ac8a51969c25e37150efdf7aa4c2037a2fd0516fb444525ab157a0ed0a7412b2fa69b217fe397263153782c0f64351fbdf2678fa0dc8569912dcd8e3ccad38f34f23bbbce14c6a26ac24911b308b82c7e43062d180baeac4ba7153858365c72c63dcf5f6a5b08070b730adb017aeae925b7d0439979e2679f45ed2f25a7edcfd2fb77a8794630285ccb0a071f5cce410b46dbf9750b0354aae8b65574501cc69efb5b6a43444074fee116641bb29da56c2b4a7f456991fc92b2',
		'debug': 0,
		'seedipaddr': '78.47.196.146'
	};

	// TODO: move netmagic to node
	const acConfig = {
		'SUPERNET': {
			'name': 'SUPERNET',
			'supply': 816061,
			'AddCoinData': confpath ? Object.assign({}, _acPayloadOrigin, {'coin':'SUPERNET','conf':'SUPERNET.conf','path':confpath,'RELAY':-1,'VALIDATE':0,'startpend':4,'endpend':4,'maxpeers':32,'newcoin':'SUPERNET','name':'SUPERNET','netmagic':'cc55d9d4','p2p':assetChainPorts.SUPERNET - 1,'rpc':assetChainPorts.SUPERNET}) : {},
		},
		'REVS': {
			'name': 'REVS',
			'supply': 1300000,
			'AddCoinData': confpath ? Object.assign({}, _acPayloadOrigin, {'coin':'REVS','conf':'REVS.conf','path':confpath,'RELAY':-1,'VALIDATE':0,'startpend':4,'endpend':4,'maxpeers':8,'newcoin':'REVS','name':'REVS','netmagic':'905c3498','p2p':assetChainPorts.REVS - 1,'rpc':assetChainPorts.REVS}) : {},
		},
		'WLC': {
			'name': 'WIRELESS',
			'supply': 210000000,
			'AddCoinData': confpath ? Object.assign({}, _acPayloadOrigin, {'coin':'WLC','conf':'WLC.conf','path':confpath,'RELAY':-1,'VALIDATE':0,'startpend':4,'endpend':4,'maxpeers':8,'newcoin':'WLC','name':'WIRELESS','netmagic':'62071ed3','p2p':assetChainPorts.WLC - 1,'rpc':assetChainPorts.WLC}) : {},
		},
		'PANGEA': {
			'name': 'PANGEA',
			'supply': 999999,
			'AddCoinData': confpath ? Object.assign({}, _acPayloadOrigin, {'coin':'PANGEA','conf':'PANGEA.conf','path':confpath,'RELAY':-1,'VALIDATE':1,'startpend':4,'endpend':4,'maxpeers':8,'newcoin':'PANGEA','name':'PANGEA','netmagic':'5fa45ae8','p2p':assetChainPorts.PANGEA - 1,'rpc':assetChainPorts.PANGEA}) : {},
		},
		'DEX': {
			'name': 'DEX',
			'supply': 999999,
			'AddCoinData': confpath ? Object.assign({}, _acPayloadOrigin, {'coin':'DEX','conf':'DEX.conf','path':confpath,'RELAY':-1,'VALIDATE':1,'startpend':4,'endpend':4,'maxpeers':8,'newcoin':'DEX','name':'DEX','netmagic':'f2ae0516','p2p':assetChainPorts.DEX - 1,'rpc':assetChainPorts.DEX}) : {},
		},
		'JUMBLR': {
			'name': 'JUMBLR',
			'supply': 999999,
			'AddCoinData': confpath ? Object.assign({}, _acPayloadOrigin, {'coin':'JUMBLR','conf':'JUMBLR.conf','path':confpath,'RELAY':-1,'VALIDATE':1,'startpend':4,'endpend':4,'maxpeers':8,'newcoin':'JUMBLR','name':'JUMBLR','netmagic':'7223759e','p2p':assetChainPorts.JUMBLR - 1,'rpc':assetChainPorts.JUMBLR}) : {},
		},
		'BET': {
			'name': 'BET',
			'supply': 999999,
			'AddCoinData': confpath ? Object.assign({}, _acPayloadOrigin, {'coin':'BET','conf':'BET.conf','path':confpath,'RELAY':-1,'VALIDATE':1,'startpend':4,'endpend':4,'maxpeers':8,'newcoin':'BET','name':'BET','netmagic':'6b9e3e1b','p2p':assetChainPorts.BET - 1,'rpc':assetChainPorts.BET}) : {},
		},
		'CRYPTO': {
			'name': 'CRYPTO',
			'supply': 999999,
			'AddCoinData': confpath ? Object.assign({}, _acPayloadOrigin, {'coin':'CRYPTO','conf':'CRYPTO.conf','path':confpath,'RELAY':-1,'VALIDATE':1,'startpend':4,'endpend':4,'maxpeers':8,'newcoin':'CRYPTO','name':'CRYPTO','netmagic':'fced9e2a','p2p':assetChainPorts.CRYPTO - 1,'rpc':assetChainPorts.CRYPTO}) : {},
		},
		'HODL': {
			'name': 'HODL',
			'supply': 9999999,
			'AddCoinData': confpath ? Object.assign({}, _acPayloadOrigin, {'coin':'HODL','conf':'HODL.conf','path':confpath,'RELAY':-1,'VALIDATE':1,'startpend':4,'endpend':4,'maxpeers':8,'newcoin':'HODL','name':'HODL','netmagic':'9b13fb5f','p2p':assetChainPorts.HODL - 1,'rpc':assetChainPorts.HODL}) : {},
		},
		'SHARK': {
			'name': 'SHARK',
			'supply': 1401,
			'AddCoinData': confpath ? Object.assign({}, _acPayloadOrigin, {'coin':'SHARK','conf':'SHARK.conf','path':confpath,'RELAY':-1,'VALIDATE':1,'startpend':4,'endpend':4,'maxpeers':8,'newcoin':'SHARK','name':'SHARK','netmagic':'54a5e30c','p2p':assetChainPorts.SHARK - 1,'rpc':assetChainPorts.SHARK}) : {},
		},
		'BOTS': {
			'name': 'BOTS',
			'supply': 999999,
			'AddCoinData': confpath ? Object.assign({}, _acPayloadOrigin, {'coin':'BOTS','conf':'BOTS.conf','path':confpath,'RELAY':-1,'VALIDATE':1,'startpend':4,'endpend':4,'maxpeers':8,'newcoin':'BOTS','name':'BOTS','netmagic':'5bec8cf7','p2p':assetChainPorts.BOTS - 1,'rpc':assetChainPorts.BOTS}) : {},
		},
		'MGW': {
			'name': 'MGW',
			'supply': 999999,
			'AddCoinData': confpath ? Object.assign({}, _acPayloadOrigin, {'coin':'MGW','conf':'MGW.conf','path':confpath,'unitval':'20','zcash':1,'RELAY':-1,'VALIDATE':1,'startpend':4,'endpend':4,'maxpeers':8,'newcoin':'MGW','name':'MGW','netmagic':'6eea5dbb','p2p':assetChainPorts.MGW - 1,'rpc':assetChainPorts.MGW}) : {},
		},
		'MVP': {
			'name': 'MVP',
			'supply': 1000000,
			'AddCoinData': confpath ? Object.assign({}, _acPayloadOrigin, {'coin':'MVP','conf':'MVP.conf','path':confpath,'RELAY':-1,'VALIDATE':1,'startpend':4,'endpend':4,'services':129,'maxpeers':8,'newcoin':'MVP','name':'MVP','netmagic':'dd5ce076','p2p':11675,'rpc':11676}) : {},
		},
		'KV': {
			'name': 'KV',
			'supply': 1000000,
			'AddCoinData': confpath ? Object.assign({}, _acPayloadOrigin, {'coin':'KV','conf':'KV.conf','path':confpath,'RELAY':-1,'VALIDATE':1,'startpend':4,'endpend':4,'maxpeers':8,'newcoin':'KV','name':'KV','netmagic':'b09a2d65','p2p':assetChainPorts.KV - 1,'rpc':assetChainPorts.KV}) : {},
		},
		'CEAL': {
			'name': 'CEAL',
			'supply': 366666666,
			'AddCoinData': confpath ? Object.assign({}, _acPayloadOrigin, {'coin':'CEAL','conf':'CEAL.conf','path':confpath,'RELAY':-1,'VALIDATE':1,'startpend':4,'endpend':4,'maxpeers':8,'newcoin':'CEAL','name':'CEAL','netmagic':'09e51af8','p2p':assetChainPorts.CEAL - 1,'rpc':assetChainPorts.CEAL}) : {},
		},
		'MESH': {
			'name': 'MESH',
			'supply': 1000007,
			'AddCoinData': confpath ? Object.assign({}, _acPayloadOrigin, {'coin':'MESH','conf':'MESH.conf','path':confpath,'RELAY':-1,'VALIDATE':1,'startpend':4,'endpend':4,'maxpeers':8,'newcoin':'MESH','name':'MESH','netmagic':'f0265c67','p2p':assetChainPorts.MESH - 1,'rpc':assetChainPorts.MESH}) : {},
		},
		'COQUI': {
			'name': 'COQUI',
			'supply': 72000000,
			'AddCoinData': confpath ? Object.assign({}, _acPayloadOrigin, {'coin':'COQUI','conf':'COQUI.conf','path':confpath,'RELAY':-1,'VALIDATE':1,'startpend':4,'endpend':4,'maxpeers':8,'newcoin':'COQUI','name':'COQUI','netmagic':'4cbd5ef4','p2p':assetChainPorts.COQUI - 1,'rpc':assetChainPorts.COQUI}) : {},
		},
		'MNZ': {
			'name': 'MNZ',
			'supply': 257142858,
			'AddCoinData': confpath ? Object.assign({}, _acPayloadOrigin, {'coin':'MNZ','conf':'MNZ.conf','path':confpath,'RELAY':-1,'VALIDATE':1,'startpend':4,'endpend':4,'maxpeers':8,'newcoin':'MNZ','name':'MNZ','netmagic':'4cbd5ef4','p2p':assetChainPorts.MNZ - 1,'rpc':assetChainPorts.MNZ}) : {},
		},
	};

	if (mode === '-1') {
		if (getSuppyOnly) {
			return acConfig[coin].supply;
		} else {
			return acConfig[coin].AddCoinData;
		}
	}
}

export function startCrypto(confpath, coin, mode) {
	let AddCoinData = {};

	if (coin === 'KMD') {
		AddCoinData.KMD = {'coin':'KMD','conf':'komodo.conf','path':confpath,'unitval':'20','zcash':1,'RELAY':-1,'VALIDATE':0,'prefetchlag':-1,'poll':10,'active':1,'agent':'iguana','method':'addcoin','startpend':8,'endpend':8,'services':0,'maxpeers':32,'newcoin':'KMD','name':'Komodo','hasheaders':1,'useaddmultisig':0,'netmagic':'f9eee48d','p2p':7770,'rpc':7771,'pubval':60,'p2shval':85,'wifval':188,'txfee_satoshis':'10000','isPoS':0,'minoutput':10000,'minconfirms':2,'genesishash':'027e3758c3a65b12aa1046462b486d0a63bfa1beae327897f56c5cfb7daaae71','protover':170002,'genesisblock':'0100000000000000000000000000000000000000000000000000000000000000000000003ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a000000000000000000000000000000000000000000000000000000000000000029ab5f490f0f0f200b00000000000000000000000000000000000000000000000000000000000000fd4005000d5ba7cda5d473947263bf194285317179d2b0d307119c2e7cc4bd8ac456f0774bd52b0cd9249be9d40718b6397a4c7bbd8f2b3272fed2823cd2af4bd1632200ba4bf796727d6347b225f670f292343274cc35099466f5fb5f0cd1c105121b28213d15db2ed7bdba490b4cedc69742a57b7c25af24485e523aadbb77a0144fc76f79ef73bd8530d42b9f3b9bed1c135ad1fe152923fafe98f95f76f1615e64c4abb1137f4c31b218ba2782bc15534788dda2cc08a0ee2987c8b27ff41bd4e31cd5fb5643dfe862c9a02ca9f90c8c51a6671d681d04ad47e4b53b1518d4befafefe8cadfb912f3d03051b1efbf1dfe37b56e93a741d8dfd80d576ca250bee55fab1311fc7b3255977558cdda6f7d6f875306e43a14413facdaed2f46093e0ef1e8f8a963e1632dcbeebd8e49fd16b57d49b08f9762de89157c65233f60c8e38a1f503a48c555f8ec45dedecd574a37601323c27be597b956343107f8bd80f3a925afaf30811df83c402116bb9c1e5231c70fff899a7c82f73c902ba54da53cc459b7bf1113db65cc8f6914d3618560ea69abd13658fa7b6af92d374d6eca9529f8bd565166e4fcbf2a8dfb3c9b69539d4d2ee2e9321b85b331925df195915f2757637c2805e1d4131e1ad9ef9bc1bb1c732d8dba4738716d351ab30c996c8657bab39567ee3b29c6d054b711495c0d52e1cd5d8e55b4f0f0325b97369280755b46a02afd54be4ddd9f77c22272b8bbb17ff5118fedbae2564524e797bd28b5f74f7079d532ccc059807989f94d267f47e724b3f1ecfe00ec9e6541c961080d8891251b84b4480bc292f6a180bea089fef5bbda56e1e41390d7c0e85ba0ef530f7177413481a226465a36ef6afe1e2bca69d2078712b3912bba1a99b1fbff0d355d6ffe726d2bb6fbc103c4ac5756e5bee6e47e17424ebcbf1b63d8cb90ce2e40198b4f4198689daea254307e52a25562f4c1455340f0ffeb10f9d8e914775e37d0edca019fb1b9c6ef81255ed86bc51c5391e0591480f66e2d88c5f4fd7277697968656a9b113ab97f874fdd5f2465e5559533e01ba13ef4a8f7a21d02c30c8ded68e8c54603ab9c8084ef6d9eb4e92c75b078539e2ae786ebab6dab73a09e0aa9ac575bcefb29e930ae656e58bcb513f7e3c17e079dce4f05b5dbc18c2a872b22509740ebe6a3903e00ad1abc55076441862643f93606e3dc35e8d9f2caef3ee6be14d513b2e062b21d0061de3bd56881713a1a5c17f5ace05e1ec09da53f99442df175a49bd154aa96e4949decd52fed79ccf7ccbce32941419c314e374e4a396ac553e17b5340336a1a25c22f9e42a243ba5404450b650acfc826a6e432971ace776e15719515e1634ceb9a4a35061b668c74998d3dfb5827f6238ec015377e6f9c94f38108768cf6e5c8b132e0303fb5a200368f845ad9d46343035a6ff94031df8d8309415bb3f6cd5ede9c135fdabcc030599858d803c0f85be7661c88984d88faa3d26fb0e9aac0056a53f1b5d0baed713c853c4a2726869a0a124a8a5bbc0fc0ef80c8ae4cb53636aa02503b86a1eb9836fcc259823e2692d921d88e1ffc1e6cb2bde43939ceb3f32a611686f539f8f7c9f0bf00381f743607d40960f06d347d1cd8ac8a51969c25e37150efdf7aa4c2037a2fd0516fb444525ab157a0ed0a7412b2fa69b217fe397263153782c0f64351fbdf2678fa0dc8569912dcd8e3ccad38f34f23bbbce14c6a26ac24911b308b82c7e43062d180baeac4ba7153858365c72c63dcf5f6a5b08070b730adb017aeae925b7d0439979e2679f45ed2f25a7edcfd2fb77a8794630285ccb0a071f5cce410b46dbf9750b0354aae8b65574501cc69efb5b6a43444074fee116641bb29da56c2b4a7f456991fc92b2','debug':0}
	}
	if (coin === 'CHIPS') {
		AddCoinData.KMD = {'coin':'CHIPS','conf':'chips.conf','path':confpath,'unitval':'20','zcash':1,'RELAY':-1,'VALIDATE':0,'prefetchlag':-1,'poll':10,'active':1,'agent':'iguana','method':'addcoin','startpend':8,'endpend':8,'services':0,'maxpeers':32,'newcoin':'CHIPS','name':'Chips','hasheaders':1,'useaddmultisig':0,'netmagic':'f9eee48d','p2p':57775,'rpc':57776,'pubval':60,'p2shval':85,'wifval':188,'txfee_satoshis':'10000','isPoS':0,'minoutput':10000,'minconfirms':2,'genesishash':'027e3758c3a65b12aa1046462b486d0a63bfa1beae327897f56c5cfb7daaae71','protover':170002,'genesisblock':'0100000000000000000000000000000000000000000000000000000000000000000000003ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a000000000000000000000000000000000000000000000000000000000000000029ab5f490f0f0f200b00000000000000000000000000000000000000000000000000000000000000fd4005000d5ba7cda5d473947263bf194285317179d2b0d307119c2e7cc4bd8ac456f0774bd52b0cd9249be9d40718b6397a4c7bbd8f2b3272fed2823cd2af4bd1632200ba4bf796727d6347b225f670f292343274cc35099466f5fb5f0cd1c105121b28213d15db2ed7bdba490b4cedc69742a57b7c25af24485e523aadbb77a0144fc76f79ef73bd8530d42b9f3b9bed1c135ad1fe152923fafe98f95f76f1615e64c4abb1137f4c31b218ba2782bc15534788dda2cc08a0ee2987c8b27ff41bd4e31cd5fb5643dfe862c9a02ca9f90c8c51a6671d681d04ad47e4b53b1518d4befafefe8cadfb912f3d03051b1efbf1dfe37b56e93a741d8dfd80d576ca250bee55fab1311fc7b3255977558cdda6f7d6f875306e43a14413facdaed2f46093e0ef1e8f8a963e1632dcbeebd8e49fd16b57d49b08f9762de89157c65233f60c8e38a1f503a48c555f8ec45dedecd574a37601323c27be597b956343107f8bd80f3a925afaf30811df83c402116bb9c1e5231c70fff899a7c82f73c902ba54da53cc459b7bf1113db65cc8f6914d3618560ea69abd13658fa7b6af92d374d6eca9529f8bd565166e4fcbf2a8dfb3c9b69539d4d2ee2e9321b85b331925df195915f2757637c2805e1d4131e1ad9ef9bc1bb1c732d8dba4738716d351ab30c996c8657bab39567ee3b29c6d054b711495c0d52e1cd5d8e55b4f0f0325b97369280755b46a02afd54be4ddd9f77c22272b8bbb17ff5118fedbae2564524e797bd28b5f74f7079d532ccc059807989f94d267f47e724b3f1ecfe00ec9e6541c961080d8891251b84b4480bc292f6a180bea089fef5bbda56e1e41390d7c0e85ba0ef530f7177413481a226465a36ef6afe1e2bca69d2078712b3912bba1a99b1fbff0d355d6ffe726d2bb6fbc103c4ac5756e5bee6e47e17424ebcbf1b63d8cb90ce2e40198b4f4198689daea254307e52a25562f4c1455340f0ffeb10f9d8e914775e37d0edca019fb1b9c6ef81255ed86bc51c5391e0591480f66e2d88c5f4fd7277697968656a9b113ab97f874fdd5f2465e5559533e01ba13ef4a8f7a21d02c30c8ded68e8c54603ab9c8084ef6d9eb4e92c75b078539e2ae786ebab6dab73a09e0aa9ac575bcefb29e930ae656e58bcb513f7e3c17e079dce4f05b5dbc18c2a872b22509740ebe6a3903e00ad1abc55076441862643f93606e3dc35e8d9f2caef3ee6be14d513b2e062b21d0061de3bd56881713a1a5c17f5ace05e1ec09da53f99442df175a49bd154aa96e4949decd52fed79ccf7ccbce32941419c314e374e4a396ac553e17b5340336a1a25c22f9e42a243ba5404450b650acfc826a6e432971ace776e15719515e1634ceb9a4a35061b668c74998d3dfb5827f6238ec015377e6f9c94f38108768cf6e5c8b132e0303fb5a200368f845ad9d46343035a6ff94031df8d8309415bb3f6cd5ede9c135fdabcc030599858d803c0f85be7661c88984d88faa3d26fb0e9aac0056a53f1b5d0baed713c853c4a2726869a0a124a8a5bbc0fc0ef80c8ae4cb53636aa02503b86a1eb9836fcc259823e2692d921d88e1ffc1e6cb2bde43939ceb3f32a611686f539f8f7c9f0bf00381f743607d40960f06d347d1cd8ac8a51969c25e37150efdf7aa4c2037a2fd0516fb444525ab157a0ed0a7412b2fa69b217fe397263153782c0f64351fbdf2678fa0dc8569912dcd8e3ccad38f34f23bbbce14c6a26ac24911b308b82c7e43062d180baeac4ba7153858365c72c63dcf5f6a5b08070b730adb017aeae925b7d0439979e2679f45ed2f25a7edcfd2fb77a8794630285ccb0a071f5cce410b46dbf9750b0354aae8b65574501cc69efb5b6a43444074fee116641bb29da56c2b4a7f456991fc92b2','debug':0}
	}
	if (coin === 'ZEC') {
		AddCoinData.ZEC = {'coin':'ZEC','conf':'zcash.conf','path':confpath,'unitval':'20','zcash':1,'RELAY':-1,'VALIDATE':0,'prefetchlag':-1,'poll':10,'active':1,'agent':'iguana','method':'addcoin','startpend':8,'endpend':8,'services':129,'maxpeers':32,'newcoin':'ZEC','name':'Zcash','hasheaders':0,'useaddmultisig':0,'netmagic':'24e92764','p2p':8233,'rpc':8232,'pubval':184,'p2shval':189,'wifval':128,'txfee_satoshis':'10000','isPoS':0,'minoutput':10000,'minconfirms':2,'genesishash':'00040fe8ec8471911baa1db1266ea15dd06b4a8a5c453883c000b031973dce08','protover':170002,'genesisblock':'040000000000000000000000000000000000000000000000000000000000000000000000db4d7a85b768123f1dff1d4c4cece70083b2d27e117b4ac2e31d087988a5eac4000000000000000000000000000000000000000000000000000000000000000090041358ffff071f5712000000000000000000000000000000000000000000000000000000000000fd4005000a889f00854b8665cd555f4656f68179d31ccadc1b1f7fb0952726313b16941da348284d67add4686121d4e3d930160c1348d8191c25f12b267a6a9c131b5031cbf8af1f79c9d513076a216ec87ed045fa966e01214ed83ca02dc1797270a454720d3206ac7d931a0a680c5c5e099057592570ca9bdf6058343958b31901fce1a15a4f38fd347750912e14004c73dfe588b903b6c03166582eeaf30529b14072a7b3079e3a684601b9b3024054201f7440b0ee9eb1a7120ff43f713735494aa27b1f8bab60d7f398bca14f6abb2adbf29b04099121438a7974b078a11635b594e9170f1086140b4173822dd697894483e1c6b4e8b8dcd5cb12ca4903bc61e108871d4d915a9093c18ac9b02b6716ce1013ca2c1174e319c1a570215bc9ab5f7564765f7be20524dc3fdf8aa356fd94d445e05ab165ad8bb4a0db096c097618c81098f91443c719416d39837af6de85015dca0de89462b1d8386758b2cf8a99e00953b308032ae44c35e05eb71842922eb69797f68813b59caf266cb6c213569ae3280505421a7e3a0a37fdf8e2ea354fc5422816655394a9454bac542a9298f176e211020d63dee6852c40de02267e2fc9d5e1ff2ad9309506f02a1a71a0501b16d0d36f70cdfd8de78116c0c506ee0b8ddfdeb561acadf31746b5a9dd32c21930884397fb1682164cb565cc14e089d66635a32618f7eb05fe05082b8a3fae620571660a6b89886eac53dec109d7cbb6930ca698a168f301a950be152da1be2b9e07516995e20baceebecb5579d7cdbc16d09f3a50cb3c7dffe33f26686d4ff3f8946ee6475e98cf7b3cf9062b6966e838f865ff3de5fb064a37a21da7bb8dfd2501a29e184f207caaba364f36f2329a77515dcb710e29ffbf73e2bbd773fab1f9a6b005567affff605c132e4e4dd69f36bd201005458cfbd2c658701eb2a700251cefd886b1e674ae816d3f719bac64be649c172ba27a4fd55947d95d53ba4cbc73de97b8af5ed4840b659370c556e7376457f51e5ebb66018849923db82c1c9a819f173cccdb8f3324b239609a300018d0fb094adf5bd7cbb3834c69e6d0b3798065c525b20f040e965e1a161af78ff7561cd874f5f1b75aa0bc77f720589e1b810f831eac5073e6dd46d00a2793f70f7427f0f798f2f53a67e615e65d356e66fe40609a958a05edb4c175bcc383ea0530e67ddbe479a898943c6e3074c6fcc252d6014de3a3d292b03f0d88d312fe221be7be7e3c59d07fa0f2f4029e364f1f355c5d01fa53770d0cd76d82bf7e60f6903bc1beb772e6fde4a70be51d9c7e03c8d6d8dfb361a234ba47c470fe630820bbd920715621b9fbedb49fcee165ead0875e6c2b1af16f50b5d6140cc981122fcbcf7c5a4e3772b3661b628e08380abc545957e59f634705b1bbde2f0b4e055a5ec5676d859be77e20962b645e051a880fddb0180b4555789e1f9344a436a84dc5579e2553f1e5fb0a599c137be36cabbed0319831fea3fddf94ddc7971e4bcf02cdc93294a9aab3e3b13e3b058235b4f4ec06ba4ceaa49d675b4ba80716f3bc6976b1fbf9c8bf1f3e3a4dc1cd83ef9cf816667fb94f1e923ff63fef072e6a19321e4812f96cb0ffa864da50ad74deb76917a336f31dce03ed5f0303aad5e6a83634f9fcc371096f8288b8f02ddded5ff1bb9d49331e4a84dbe1543164438fde9ad71dab024779dcdde0b6602b5ae0a6265c14b94edd83b37403f4b78fcd2ed555b596402c28ee81d87a909c4e8722b30c71ecdd861b05f61f8b1231795c76adba2fdefa451b283a5d527955b9f3de1b9828e7b2e74123dd47062ddcc09b05e7fa13cb2212a6fdbc65d7e852cec463ec6fd929f5b8483cf3052113b13dac91b69f49d1b7d1aec01c4a68e41ce157','debug':0}
	}

	return AddCoinData[coin];
}