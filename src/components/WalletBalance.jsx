import { useState } from 'react';
import { ethers } from 'ethers';

function WalletBalance() {

    const [balance, setBalance] = useState();
    
    const getBalance = async () => {
        const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.JsonRpcProvider("http://localhost:8545");
        const balance = await provider.getBalance(account);
        setBalance(balance.toString());
    };
  
    return (
      <div>
          <h5>Your Balance: {balance}</h5>
          <button onClick={() => getBalance()}>Show My Balance</button>
      </div>
    );
  };
  
  export default WalletBalance;