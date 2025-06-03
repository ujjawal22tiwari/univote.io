// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.28",
// };

// require("@nomicfoundation/hardhat-toolbox");

// module.exports = {
//   solidity: "0.8.24",
//   networks: {
//     sepolia: {
//       url: "https://sepolia.infura.io/v3/089316d7dccc46c5acba3ccadfe7d15c", // replace
//       accounts: ["b4eb632a6704896fe7badd7ea357eec389ddae352a7572e9290efab39f59278c"], // replace with your private key
//     },
//   },
// };

require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.24",
  networks: {
    baseSepolia: {
      url: "https://sepolia.base.org", // ✅ Official Base Sepolia RPC
      accounts: ["b4eb632a6704896fe7badd7ea357eec389ddae352a7572e9290efab39f59278c"], // or hardcoded (not recommended)
    },
  },
};
