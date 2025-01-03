import WalletBalance from './WalletBalance';
import { useEffect, useState } from 'react';

import { ethers } from 'ethers';
import MintToken from '../../artifacts/contracts/MintToken.sol/MintToken.json';

const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const provider = new ethers.JsonRpcProvider("http://localhost:8545");
// const provider = new ethers.BrowserProvider(window.ethereum)
const signer = await provider.getSigner();
const contract = new ethers.Contract(contractAddress, MintToken.abi, signer);
// const contract = await ethers.getContractAt(
//   "MintToken",
//   contractAddress,
//   signer,
// )

function Home() {

  const [totalMinted, setTotalMinted] = useState(0);
  useEffect(() => {
    getCount();
  }, []);

  const getCount = async () => {
    console.log("CONTRACT", contract, contract.connect())
    const count = parseInt(await contract.count());
    console.log(count);
    setTotalMinted(count || 0);
  };

  return (
    <div>
        <WalletBalance />

        {Array(totalMinted + 1)
        .fill(0)
        .map((_, i) => (
            <div key={i}>
            <p>{i}</p>
            </div>
        ))}
    </div>
  );
}

export default Home;