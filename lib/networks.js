/** @module networks */

module.exports = {
  /** @type {Network} */
  qredit: {
    messagePrefix: '\x18Qredit Signed Message:\n',
    bip32: {
      public: 46090600, // base58
      private: 46089520 // base58Priv
    },
    name: 'mainnet',
    nethash: '7fadccaae136bfa7655aa1e1f2de440804abbf64af9f380ccfbef916e18b485c',
    token: 'Qredit',
    symbol: 'XQR',
    pubKeyHash: 0x4b, // Addresses will begin with 'X'
    explorer: 'https://qredit.cloud',
    wif: 0x1a, // Network prefix for wif generation
    activePeer: {
      ip: 'https://qredit.cloud',
      port: null
    },
    peers: [
      { "ip": "95.217.235.75", "port": 5103 },
      { "ip": "116.203.70.214", "port": 5103 },
      { "ip": "78.47.141.58", "port": 5103 },
      { "ip": "135.181.106.105", "port": 5103 },
      { "ip": "95.217.186.135", "port": 5103 }
    ],
  }
}
