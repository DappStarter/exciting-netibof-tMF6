require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip notice crime remember smile inner enrich orange smile'; 
let testAccounts = [
"0x47aaddf1d7ec5439bbda416225484ffb9396dddc82050a88555450b2eb5d6f23",
"0xc6d7c279209293cb56a4b63156d3f6cb9baeb64d5b5eb136236cbca3b78fefaa",
"0x7f3647146ad8f5e707f42379471df40e86a155428bf56a7b2367158965e9dcca",
"0xbf1ce8b6731082c59f4c76f3ef2800292210f6872990889ae1845c181c805777",
"0x23811bf0ec9eb9858724f129961d2f0c1f89fe7de45cac7267a021d5ce9ba394",
"0x23feabca2b6a1abef4a2f06fb8b9e5d13387bf6a5d0c00b0fa3fbffe302a987b",
"0xc1c94106ccb2e7c7a04175cefdbb0b85bf358907518174328936d05326c46673",
"0x88d33094536aba09b6dd97d372efd9d32b5006946ba8755deab89ab01d0af411",
"0xef4c28e9edbba2ac4a1f745204459746550471e2a960b6e122e6cd6af32569f3",
"0x32df2bec5b42d0017b32de4600ecb2fabf996b518f2f55c5164219414fe9974f"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

