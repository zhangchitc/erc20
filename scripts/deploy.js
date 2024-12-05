const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const token = await ethers.deployContract("LineaToken", [
    "WOO Test Token",  // name
    "WOO",              // symbol
    1000000            // initial supply (1 million tokens)
  ]);

  await token.waitForDeployment();
  console.log("Token deployed to:", await token.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 