import React, { useState } from "react";

const Settings = () => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
        document.body.className = theme;
    };

    return (
        <div>
            <h1>Settings</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};

export default Settings;
