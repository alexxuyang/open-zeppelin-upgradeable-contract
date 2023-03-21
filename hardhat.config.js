require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

const INFURA_URL = process.env.INFURA_URL;
const PRIVATE_KEY1 = process.env.PRIVATE_KEY1;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: INFURA_URL,
      accounts: [PRIVATE_KEY1]
    }
  },
  etherscan: {
    apiKey: {
      sepolia: ETHERSCAN_API_KEY
    },
  }
};
