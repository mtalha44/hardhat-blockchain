const { ethers } = require("hardhat");

async function DeployContract() {
    const SimpleStorage = ethers.getContractFactory(
        "SimpleStorage"
    )

    console.log("Contract Deploying ... Wait!!")
    const contractdeploy = SimpleStorage.deploy();
    await contractdeploy.deployed();
    console.log("Contract deployed at:", contractdeploy.address);
}

DeployContract()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error);
        process.exit(1);
    })