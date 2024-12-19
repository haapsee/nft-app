
import chai from "chai";
import { describe, it } from "mocha";
const { expect } = chai;

describe('MintToken', function () {
  it("Should mint token", async function () {
    // eslint-disable-next-line no-undef
    let ethers = hre.ethers;
    const [owner] = await ethers.getSigners();
    const MintToken = await ethers.getContractFactory("MintToken");
    const token = await MintToken.deploy(owner.address);

    const recipient = "0x1CBd3b2770909D4e10f157cABC84C7264073C9Ec";
    const uri = "image.webp";

    let balance = await token.balanceOf(recipient);
    expect(balance).to.equal(0);

    const newMintedToken = await token.safeMint(recipient, uri);
    await newMintedToken.wait();

    balance = await token.balanceOf(recipient);
    expect(balance).to.equal(1);
  })
});