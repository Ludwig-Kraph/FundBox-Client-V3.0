import React, { useState } from "react";

const SkrillConnect = () => {
    const [skrillEmail, setSkrillEmail] = useState("");

    const connectSkrill = () => {
        if (skrillEmail) {
            alert(`Skrill account linked: ${skrillEmail}`);
        } else {
            alert("Please enter your Skrill email.");
        }
    };

    return (
        <div>
            <h3>Connect Skrill</h3>
            <input type="email" placeholder="Enter Skrill Email" onChange={(e) => setSkrillEmail(e.target.value)} />
            <button onClick={connectSkrill}>Link Skrill</button>
        </div>
    );
};

export default SkrillConnect;
