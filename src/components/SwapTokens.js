import React, { useState } from "react";
import { ethers } from "ethers";
import { SWAP_POOL_ADDRESS } from "../config";

const SwapTokens = () => {
    const [amount, setAmount] = useState("");

    const swapTokens = async () => {
        if (!window.ethereum) return alert("Please install MetaMask.");
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(SWAP_POOL_ADDRESS, [
                "function swap(uint256 amount) public"
            ], signer);

            const tx = await contract.swap(ethers.utils.parseEther(amount));
            await tx.wait();
            alert(`Swapped ${amount} GEN Tokens for ETH!`);
        } catch (error) {
            console.error("Swap failed:", error);
        }
    };

    return (
        <div>
            <h3>Swap Tokens</h3>
            <input type="number" placeholder="Enter amount" onChange={(e) => setAmount(e.target.value)} />
            <button onClick={swapTokens}>Swap</button>
        </div>
    );
};

export default SwapTokens;
