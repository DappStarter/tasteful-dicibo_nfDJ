require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner argue tackle skull guard render remain minor gloom enrich orange gentle'; 
let testAccounts = [
"0x1a4f1a6890793561fd25a1cd1b3306be5d8317211d59891b3852f9c94ebf7b33",
"0x366e8da0a3a6c8f2c6ef565ef3bea8da581674ed1df3fe0e18683d72c69b99f4",
"0xda2ab51732dfc4db969b47700b853a6b040751ee2c9481fcc5d5b93d26326fbe",
"0x326b8959c8c1000082ba41bc9024e35c091212ab6111954e9f5f1a4ddbc38d08",
"0x5c9652da5da4e2018a153451355a967a60fdef6834dc722ba2d6d1b070364a63",
"0xb5712298326681a9ac39800e9d8f62131d7e0e509c23d6bde6cdb9d5de2cced5",
"0x6faced17e36764b25dc0dc15d43a482b58a96fb914bb58cf9294cb31751c3f44",
"0x5a909634cfd0407820240c21b9df61c1dcd05215a3964204990fb034e6aa56b5",
"0x9cf831de99144f022adf5e587c438ea7c873eef863d6b93dce102f7064cd14f1",
"0x098fa726358b6f4927c8419cf6a5e91bd67fd92a339b1804c1a08916eddc0a86"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


