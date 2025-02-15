// Utility functions for FundBox Client

// Format large numbers into readable format (e.g., 1,000 -> 1K)
export const formatNumber = (num) => {
    return num >= 1000 ? (num / 1000).toFixed(1) + "K" : num.toString();
};

// Validate Ethereum address
export const isValidEthereumAddress = (address) => {
    return /^0x[a-fA-F0-9]{40}$/.test(address);
};

// Convert ETH to WEI
export const ethToWei = (ethAmount) => {
    return (ethAmount * 10 ** 18).toString();
};

// Convert WEI to ETH
export const weiToEth = (weiAmount) => {
    return (weiAmount / 10 ** 18).toFixed(6);
};
