import React from "react";
import WalletConnect from "./WalletConnect";
import SkrillConnect from "./SkrillConnect";
import GenerateTokens from "./GenerateTokens";
import SwapTokens from "./SwapTokens";
import TransferFunds from "./TransferFunds";

const Dashboard = () => {
    return (
        <div>
            <h2>Dashboard</h2>
            <WalletConnect />
            <SkrillConnect />
            <GenerateTokens />
            <SwapTokens />
            <TransferFunds />
        </div>
    );
};

export default Dashboard;
