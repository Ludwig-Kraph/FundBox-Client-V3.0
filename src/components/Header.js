import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
    return (
        <header style={styles.header}>
            <img src={logo} alt="Fundbox Logo" style={styles.logo} />
            <h1>Fundbox Dashboard</h1>
        </header>
    );
};

const styles = {
    header: { display: "flex", alignItems: "center", padding: "10px", background: "#333", color: "white" },
    logo: { width: "50px", marginRight: "10px" }
};

export default Header;
