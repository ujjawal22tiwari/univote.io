require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/YOUR_INFURA_KEY", // replace
      accounts: ["YOUR_PRIVATE_KEY"], // replace with your private key
    },
  },
};
