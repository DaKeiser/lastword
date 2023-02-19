const { ethers } = require("hardhat");

async function main() {
  // Compile the contract
  const Will = await ethers.getContractFactory("Will");

  // Deploy the contract, passing in any constructor arguments
  const will = await Will.deploy({ value: ethers.utils.parseEther("1.0") });

  // Wait for the contract to be deployed, mined and confirmed
  await will.deployed();

  console.log("Will contract deployed to:", will.address);
}

// Run the deployment script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });