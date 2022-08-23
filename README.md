# Verified Contract Cloner
## A tool to download FOSS smart contract source code from Etherscan (and mass produce redeployed copies)
 
***For research purposes only. Write-up below***

### To run:
First clone this repo:

```git clone```

Install dependencies:

```npm install```

Set target contract address to be cloned, @variable in line 9 of pullAndDeploy.js script. Also set target network to deploy to; after configuring networks in hardhat.config.js and providing API/private keys in a .env file, run the script:

```npx hardhat run scripts/pullAndDeploy.js```

Known bug:

If script returns HardHat error HH606, it is simply due to compiler being unable to compile file structures with differing import pragmas. For now, manually update Solidity versions of dependencies to match. Will rewrite this implementation 100% in solidity using assembly + bytecode onchain to deploy rather than rely on off-chain structures.