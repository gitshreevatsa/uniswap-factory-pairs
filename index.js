const ethers = require("ethers");
const abi = require("./abi.json");
const express = require("express");

const app = express();

const ETHprovider = new ethers.JsonRpcProvider("https://rpc.ankr.com/eth");
const BSCprovider = new ethers.JsonRpcProvider("https://rpc.ankr.com/bsc");
const MATICprovider = new ethers.JsonRpcProvider(
  "https://rpc.ankr.com/polygon"
);

const contractAddressUniswap = "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f";
const contractAddressPancake = "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73";
const contractAddressQuickswap = "0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32";

const contractUniswap = new ethers.Contract(
  contractAddressUniswap,
  abi.abi,
  ETHprovider
);
const contractPancake = new ethers.Contract(
  contractAddressPancake,
  abi.abi,
  BSCprovider
);

const contractQuickswap = new ethers.Contract(
  contractAddressQuickswap,
  abi.abi,
  MATICprovider
);

contractUniswap.on("PairCreated", (token0, token1, pairAddress) => {
  console.log(token0, token1, pairAddress);
  // decode token0 and token1 and pairAddress
  console.log("PairCreated on ETH UNISWAP");
});

contractPancake.on("PairCreated", (token0, token1, pairAddress) => {
  console.log(token0, token1, pairAddress);
  // decode token0 and token1 and pairAddress
  console.log("PairCreated on BSC PANCAKE");
});

contractQuickswap.on("PairCreated", (token0, token1, pairAddress) => {
  console.log(token0, token1, pairAddress);
  // decode token0 and token1 and pairAddress
  console.log("PairCreated on MATIC QUICKSWAP");
});

app.listen(3002, () => {
  console.log("Listening on port 3000");
});
