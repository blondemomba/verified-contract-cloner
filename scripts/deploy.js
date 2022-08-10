const hre = require('hardhat')

// Run this file if you need to configure solidity versions after downloading & resolving source code
async function main() {
    const AnyOldERC20Token = await hre.ethers.getContractFactory("AnyOldERC20Token")
    const anyOldERC20Token = await AnyOldERC20Token.deploy()
    await anyOldERC20Token.deployed()

    console.log(`AnyOldERC20Token deployed to: ${anyOldERC20Token.address}`)
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })