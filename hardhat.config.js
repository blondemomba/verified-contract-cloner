require('dotenv').config();

require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "rinkeby",
  solidity: {
    compilers:  [
      {
        version: "0.5.5",
      },
      {
        version: "0.6.12",
      }, 
      {
        version: "0.7.3",
      },
      {
        version: "0.8.0",
      },
      {
        version: "0.8.9",
      }
    ]
  },
  networks: {
    rinkeby: {
      url: process.env.RINKEBY_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
