# Verified Contract Cloner
## A tool to download FOSS smart contract source code from Etherscan (and mass produce redeployed copies)
 
***For research purposes only. Write-up below***

### To run:
First clone this repo:

```git clone```

Install dependencies:

```npm install```

Set target contract address to be cloned, @variable in line 9 of pullAndDeploy.js script. After configuring networks in hardhat.config.js and providing API/private keys in a .env file, run the script:

```npx hardhat run scripts/pullAndDeploy.js```


### On Why Sanctioning a Smart Contract is Useless

Yesterday the US Treasury made the very silly decision to sanction a smart contract by adding a specific Ethereum address to the SDN list. Had these officials been better advised on the technical workings of their sanction target, they likely would have chosen nearly any other approach.

Obviously I'd much rather be solving Ethernaut DamnVulnerableDefi challenges but apparently educating government officials is more important so here I am writing scripts and educational material on these matters.

For several reasons, sanctioning an open-source codebase that lives at a singular Ethereum address accomplishes nothing. In fact, in addition to time wasted, it's counterproductive and toes controversial lines of established precedent with regard to code-as-free-speech. Sanctioning a robot's codebase (while also toeing the cute line of granting a robot personhood!) is equivalent to outlawing both a specific set of words + punctuation as well as outlawing a specific very large number (in this case an Eth address).

### The common goal is to fight cybercriminals and avoid enabling human rights abusers

The Treasury has communicated that the intent of yesterday's action is to combat DPRK Advanced Persistent Threats and state-sponsored cybercriminals and yet this sanction accomplishes none of those goals. Instead, an on-chain tool for digital privacy used to protect things like your net-worth, porn purchases, browsing history, is being flailed at impotently by a government entity while cybercriminals simply raise their eyebrows and continue criming.

### The many unusual and often misunderstood properties of smart contracts

For those completely unfamiliar with smart contracts, imagine them as vending machines that live at an email address. They will execute a specific set of (virtual) machine instructions, like vending a can of coke, in service to internet users who interact with their specific address. Such an address is like an email address (it can be represented by a .eth domain much like email's .com) but is at its core simply a very, very large number. This means you can basically copy-paste your vending machine to a vast number of different email addresses, which is what this project does via automated script.

Smart contracts on Ethereum, once deployed, are unstoppable due to the base blockchain's decentralization. That is to say, the unnamed protocol is _still_ _functioning_ _as_ _designed_. While the frontend interface, a simple user-friendly website for netizens to use, has been taken down, numerous mirrors and other UIs to use the protocol exist elsewhere. I will not list them here, though they are not difficult to locate. Importantly, some of those reside on IPFS which is a decentralized alternative to https that is much more resilient to centralized actors like governments.

### The Proof of Concept provided by this project

Further, this project shows how trivial it is to spin up a script that extracts the source code + ABI from a **NON-SANCTIONED, obviously!** verified Etherscan smart contract and subsequently clone it into 5-12 new onchain instances per second. This means the Treasury would need to sanction 500,000-1,000,000 new Eth addresses per _day_ just to keep up.

AGAIN, THIS PROJECT IS MERELY A PROOF OF CONCEPT to show that sanctioning an ETH address is useless and impractical for combating DPRK hackers and cybercriminals in general. Please do not use it on any sanctioned addresses and get yourself or me into trouble.

For this demonstration, I picked a random verified ERC20 token called AnyOldERC20Token on Ethereum's Rinkeby testnet. This means that NO REAL FUNDS OR ILLEGAL MATERIAL is propagated by this script. 

##### ***  Note that this tool supports OpenZeppelin implementations by default- other libraries or dependencies may need to be installed via NPM after downloading source code from on-chain.  You will also likely need to reconfigure the Solidity compiler a bit as versions downloaded from on-chain will vary greatly with breaking changes


## SecBlinken, please help us help you
#### To be clear, the Web3 ecosystem welcomes sensible, effective regulation with open arms. Here are some ideas:

-Imposing regulations that require implementations to include rate limiting (in dollar amounts) to render these tools useless to criminals while preserving netizen privacy

-Any regulatory framework for open-source code that can be misused 

-Any regulatory process for developers whose code gets abused by criminals

-Sanctions on Advanced Persistent Threats, who are the malicious actors committing crimes in these scenarios

-Improving & strengthening advanced on-chain analysis of hacker behaviors and transaction-IP origination (where applicable) to prevent cybercrime

-Literally any other idea/technique that would be more effective than sanctioning a robotic contract used and developed by innocent netizens

Yesterday's announcement provides no productive solution to the cybercrime issue and instead only evidences a severe lack of technical understanding from the US government at its highest levels. 

## Read this far? 
Congratulations anon, you now understand smart contract protocols better than the current Secretary of State (apparently), who by the way accused innocent the American + European developers of the aforementioned sanctioned protocol to be DPRK state-sponsored cybercriminals. No public apology has yet been issued for this serious blunder. Let's do better.

Oh and go vote.
