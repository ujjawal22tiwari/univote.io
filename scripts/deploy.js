// // scripts/deploy.js

// const hre = require("hardhat");

// async function main() {
//   const Voting = await hre.ethers.getContractFactory("Voting");
//   const voting = await Voting.deploy();

//   await voting.deployed();

//   console.log(`Voting contract deployed to: ${voting.address}`);
// }

// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });
const hre = require("hardhat");

async function main() {
  // Get contract factory
  const Voting = await hre.ethers.getContractFactory("Voting");

  // Deploy contract
  const voting = await Voting.deploy();

  // Wait for deployment to finish
  await voting.waitForDeployment();

  // Get deployed address
  const address = await voting.getAddress();
  console.log("Contract deployed to:", address);
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});
