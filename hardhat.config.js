require('@nomiclabs/hardhat-waffle')
require('dotenv').config()

module.exports = {
  solidity: '0.8.3',
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    ropsten: {
      url: process.env.ROPSTEN_API,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
}
