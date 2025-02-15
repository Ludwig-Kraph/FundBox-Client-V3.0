import React, { useState } from "react";
import { ethers } from "ethers";

const TransferFunds = () => {
    const [recipient, setRecipient] = useState("");
    const [amount, setAmount] = useState("");

    const transferFunds = async () => {
        if (!window.ethereum) return alert("Please install MetaMask.");
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const tx = await signer.sendTransaction({
                to: recipient,
                value: ethers.utils.parseEther(amount),
            });
            await tx.wait();
            alert(`Transferred ${amount} ETH to ${recipient}!`);
        } catch (error) {
            console.error("Transfer failed:", error);
        }
    };

    return (
        <div>
            <h3>Transfer Funds</h3>
            <input type="text" placeholder="Recipient Address" onChange={(e) => setRecipient(e.target.value)} />
            <input type="number" placeholder="Amount (ETH)" onChange={(e) => setAmount(e.target.value)} />
            <button onClick={transferFunds}>Transfer</button>
        </div>
    );
};

export default TransferFunds;
