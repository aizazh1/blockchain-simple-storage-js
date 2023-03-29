# Simple Storage Smart Contract

This simple blockchain project demonstrates the creation of a smart contract, compilation of the contract to produce its ABI and binary files, encrypting your account's private key with a password, deploying the contract using your wallet's encrypted private key, contract's abi and binary files, and finally outputting the deployed contract's address and interacting with it.

Manual testing was performed using alchemy Sepolia network, and a personal metamask wallet.

## Technologies used

This project makes use of the following technologies:

- Node.js
- Solidity v0.8.8
- Ethers.js
- Yarn
- Solc

## Steps

Install the dependencies using the following command:

```
yarn install
```

Create a .env file at the root of the project with the same format as the .env.example file provided

Run the following command to encrypt your private key with a password:

```
yarn encryptKey
```

Compile the smart contract using the following command:

```
yarn compile
```

Run the following command to deploy the contract and interact with it:

```
yarn start
```
