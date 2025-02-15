import React, { useState } from "react";
import { ethers } from "ethers";

const WalletConnect = () => {
    const [walletAddress, setWalletAddress] = useState("");

    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
                setWalletAddress(accounts[0]);
            } catch (error) {
                console.error("Wallet connection failed:", error);
            }
        } else {
            alert("Please install MetaMask.");
        }
    };

    return (
        <div>
            <h3>Connect Wallet</h3>
            <button onClick={connectWallet}>Connect MetaMask</button>
            {walletAddress && <p>Connected: {walletAddress}</p>}
        </div>
    );
};

export default WalletConnect;
