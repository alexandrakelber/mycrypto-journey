import { useState } from 'react';
import { ethers } from 'ethers';

function App() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [error, setError] = useState(null);

  async function connectWallet() {
    if (!window.ethereum) {
      setError("Please install MetaMask to use this app.");
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      setWalletAddress(accounts[0]);
      setError(null); // Clear error if successful
    } catch (err) {
      setError("Wallet connection failed.");
    }
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>🚀 MyCrypto Journey</h1>
      <p>Learn Web3 interactively.</p>

      <button onClick={connectWallet}>
        {walletAddress ? "Wallet Connected ✅" : "Connect Wallet"}
      </button>

      {walletAddress && (
        <p><strong>Address:</strong> {walletAddress}</p>
      )}

      {error && (
        <p style={{ color: "red" }}>{error}</p>
      )}
    </div>
  );
}

export default App;
