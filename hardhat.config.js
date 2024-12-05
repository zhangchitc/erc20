require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
// const RPC_URL = "https://eth-sepolia.g.alchemy.com/v2/-Z5IK5ZknQgG4obvaW3fCSA92G8-5CPE"
const RPC_URL = "https://linea-sepolia.g.alchemy.com/v2/-Z5IK5ZknQgG4obvaW3fCSA92G8-5CPE";

module.exports = {
  solidity: "0.8.7",
  networks: {
    testnet: {
      url: RPC_URL,
      accounts: [PRIVATE_KEY],
    },
  },
}; 