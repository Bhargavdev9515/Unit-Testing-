const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token contract", function () {
  // ...previous test...

  it("Should transfer tokens between accounts", async function() {
    const [owner, addr1, addr2,addr3] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("Token");

    const hardhatToken = await Token.deploy();

    // Transfer 50 tokens from owner to addr1
    await hardhatToken.transfer(addr1.address, 50);
    expect(await hardhatToken.balanceOf(addr1.address)).to.equal(50);

    // Transfer 50 tokens from addr1 to addr2
    await hardhatToken.connect(addr1).transfer(addr2.address, 50);
    expect(await hardhatToken.balanceOf(addr2.address)).to.equal(50);

  });

  it("Transferring to Address 3", async function(){
    //Signer is a object that represent ethereum address
    const[owner,addr3]=await ethers.getSigners();
    const Token=await ethers.getContractFactory("Token");
    const hardhatToken=await Token.deploy();

    await hardhatToken.transfer(addr3.address, 50);
     expect(await hardhatToken.balanceOf(addr3.address)).to.equal(50);
     await hardhatToken.setTokenName("local");
     expect(await hardhatToken.name()).to.equal("roman");
  });
});