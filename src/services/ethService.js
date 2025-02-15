import { ethers } from "ethers";

const ALCHEMY_API_URL = process.env.REACT_APP_ALCHEMY_API_URL;

export const provider = new ethers.providers.JsonRpcProvider(ALCHEMY_API_URL);

export const getWalletBalance = async (walletAddress) => {
    try {
        const balance = await provider.getBalance(walletAddress);
        return ethers.utils.formatEther(balance);
    } catch (error) {
        console.error("Error fetching wallet balance:", error);
        throw error;
    }
};

export const sendTransaction = async (recipient, amount, privateKey) => {
    try {
        const wallet = new ethers.Wallet(privateKey, provider);
        const tx = await wallet.sendTransaction({
            to: recipient,
            value: ethers.utils.parseEther(amount),
        });
        await tx.wait();
        return tx.hash;
    } catch (error) {
        console.error("Error sending transaction:", error);
        throw error;
    }
};
