import React from "react";

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p>&copy; 2025 Fundbox. All rights reserved.</p>
        </footer>
    );
};

const styles = {
    footer: { textAlign: "center", padding: "10px", background: "#333", color: "white", marginTop: "20px" }
};

export default Footer;
