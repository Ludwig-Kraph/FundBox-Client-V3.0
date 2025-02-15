import React from "react";
import Dashboard from "../components/Dashboard";
import SwapTokens from "../components/SwapTokens";
import GenerateTokens from "../components/GenerateTokens";

const Home = () => {
    return (
        <div>
            <h1>Welcome to FundBox</h1>
            <Dashboard />
            <GenerateTokens />
            <SwapTokens />
        </div>
    );
};

export default Home;
