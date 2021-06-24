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
    explorer: 'https://qredit.cloud/#',
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
  },
  ark: {
    messagePrefix: '\x18Ark Signed Message:\n',
    bip32: {
      public: 0x2bf4968, // base58 will have a prefix 'apub'
      private: 0x2bf4530 // base58Priv will have a prefix 'apriv'
    },
    name: 'mainnet',
    nethash: '6e84d08bd299ed97c212c886c98a57e36545c8f5d645ca7eeae63a8bd62d8988',
    token: 'ARK',
    symbol: 'Ѧ',
    pubKeyHash: 0x17, // Addresses will begin with 'A'
    explorer: 'https://explorer.ark.io',
    wif: 0xaa, // Network prefix for wif generation
    activePeer: {
      ip: 'node1.arknet.cloud',
      port: 4001
    },
    peers: [
      { ip: '5.39.9.240', port: 4001 },
      { ip: '5.39.9.241', port: 4001 },
      { ip: '5.39.9.242', port: 4001 },
      { ip: '5.39.9.243', port: 4001 },
      { ip: '5.39.9.244', port: 4001 },
      { ip: '5.39.9.250', port: 4001 },
      { ip: '5.39.9.251', port: 4001 },
      { ip: '5.39.9.252', port: 4001 },
      { ip: '5.39.9.253', port: 4001 },
      { ip: '5.39.9.254', port: 4001 },
      { ip: '5.39.9.255', port: 4001 },
      { ip: '5.39.53.48', port: 4001 },
      { ip: '5.39.53.49', port: 4001 },
      { ip: '5.39.53.50', port: 4001 },
      { ip: '5.39.53.51', port: 4001 },
      { ip: '5.39.53.52', port: 4001 },
      { ip: '5.39.53.53', port: 4001 },
      { ip: '5.39.53.54', port: 4001 },
      { ip: '5.39.53.55', port: 4001 },
      { ip: '37.59.129.160', port: 4001 },
      { ip: '37.59.129.161', port: 4001 },
      { ip: '37.59.129.162', port: 4001 },
      { ip: '37.59.129.163', port: 4001 },
      { ip: '37.59.129.164', port: 4001 },
      { ip: '37.59.129.165', port: 4001 },
      { ip: '37.59.129.166', port: 4001 },
      { ip: '37.59.129.167', port: 4001 },
      { ip: '37.59.129.168', port: 4001 },
      { ip: '37.59.129.169', port: 4001 },
      { ip: '37.59.129.170', port: 4001 },
      { ip: '37.59.129.171', port: 4001 },
      { ip: '37.59.129.172', port: 4001 },
      { ip: '37.59.129.173', port: 4001 },
      { ip: '37.59.129.174', port: 4001 },
      { ip: '37.59.129.175', port: 4001 },
      { ip: '193.70.72.80', port: 4001 },
      { ip: '193.70.72.81', port: 4001 },
      { ip: '193.70.72.82', port: 4001 },
      { ip: '193.70.72.83', port: 4001 },
      { ip: '193.70.72.84', port: 4001 },
      { ip: '193.70.72.85', port: 4001 },
      { ip: '193.70.72.86', port: 4001 },
      { ip: '193.70.72.87', port: 4001 },
      { ip: '193.70.72.88', port: 4001 },
      { ip: '193.70.72.89', port: 4001 },
      { ip: '193.70.72.90', port: 4001 }
    ]
  }
}