import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import WalletConnect from "./components/WalletConnect";
import SkrillConnect from "./components/SkrillConnect";
import GenerateTokens from "./components/GenerateTokens";
import SwapTokens from "./components/SwapTokens";
import TransferFunds from "./components/TransferFunds";
import Home from "./pages/Home";
import About from "./pages/About";
import Settings from "./pages/Settings";
import "./assets/styles.css";

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/wallet" element={<WalletConnect />} />
          <Route path="/skrill" element={<SkrillConnect />} />
          <Route path="/generate" element={<GenerateTokens />} />
          <Route path="/swap" element={<SwapTokens />} />
          <Route path="/transfer" element={<TransferFunds />} />
          <Route path="/about" element={<About />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
