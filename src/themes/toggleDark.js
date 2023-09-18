import React from "react";
import Toggle from "react-toggle";
import { useColorScheme } from "./useColorScheme";

import './toggleDark.css'

export const DarkModeToggle = () => {
    const { isDark, setIsDark } = useColorScheme();

    const handleToggleChange = (event) => {
        setIsDark(event.target.checked);
    };


    return (
            <div className="toggle-container ">
            <Toggle 
                className="toggle slider"
                checked={isDark}
                onChange={handleToggleChange}
                icons={{ checked: "🌙", unchecked: "🔆" }} 
                aria-label="Dark mode toggle"
                />
            </div>
    );
};
