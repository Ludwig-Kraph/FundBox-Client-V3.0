import React, { useState } from "react";
import { ethers } from "ethers";
import { GEN_TOKEN_ADDRESS, AUTO_GEN_TOKEN_ADDRESS } from "../config";

const GenerateTokens = () => {
    const [amount, setAmount] = useState("");

    const generateTokens = async () => {
        if (!window.ethereum) return alert("Please install MetaMask.");
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(GEN_TOKEN_ADDRESS, [
                "function mint(address to, uint256 amount) public"
            ], signer);

            const tx = await contract.mint(await signer.getAddress(), ethers.utils.parseEther(amount));
            await tx.wait();
            alert(`Generated ${amount} GEN Tokens!`);
        } catch (error) {
            console.error("Token generation failed:", error);
        }
    };

    return (
        <div>
            <h3>Generate Tokens</h3>
            <input type="number" placeholder="Enter amount" onChange={(e) => setAmount(e.target.value)} />
            <button onClick={generateTokens}>Generate</button>
        </div>
    );
};

export default GenerateTokens;
