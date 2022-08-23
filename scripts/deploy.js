const hre = require('hardhat')
const fs = require('fs/promises')

// Run this file if you need to configure solidity versions after downloading & resolving source code
async function main() {

    const solFile = await fs.readdir('./contracts')
    const contract = solFile.toString().replace('.sol', '')

    const CloneContract = await hre.ethers.getContractFactory(contract)
    const cloneContract = await CloneContract.deploy()
    await cloneContract.deployed()

    console.log(`${contract} deployed to: ${cloneContract.address}`)
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })