const { ethers , run , network } = require("hardhat");

async function DeployContract() {
    const SimpleStorage = await ethers.getContractFactory(
        "SimpleStorage"
    )

    console.log("Contract Deploying ... Wait!!")
    const contractdeploy = await SimpleStorage.deploy();
    await contractdeploy.waitForDeployment();
    const contractAddress = await contractdeploy.getAddress();
    console.log("Contract deployed at:", contractAddress);
    console.log(network.config);
    // await verify(contractAddress,"");
}

async function verify( contractAddress,args) {
    console.log("Verifying Contract");

    try{
        await run("verify:verify", {
          address: contractAddress,
          constructorArguments: args,
        });
        console.log("Contract verifed Successfully");
    }catch(error){
        if(error.message.toLowerCase().includes("already verified")){
            console.log("contract already verified");
        }
        else{
            console.log(error);
        }
    }
}

DeployContract()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error);
        process.exit(1);
    })