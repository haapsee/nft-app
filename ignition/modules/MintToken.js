// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("MintTokenModule", (m) => {
  const mint = m.contract("MintToken", ["0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"]);

  return { mint };
});
