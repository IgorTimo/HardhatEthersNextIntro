const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("Greeter", function () {
  it("Deployed from corret address", async function () {
   const account = await ethers.getSigner();



    expect(account.address).to.equal("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
  });
});