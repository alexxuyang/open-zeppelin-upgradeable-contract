const { ethers, upgrades } = require("hardhat");

const PROXY = "0x7c29d8e5e92338406cda011305f9e09aD8Ff41ED";

async function main() {
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  await upgrades.upgradeProxy(PROXY, BoxV2);
  console.log("Box upgraded");
}

main();
