import React from "react";
import Toggle from "react-toggle";
import { useColorScheme } from "./useColorScheme";

import "./toggleDark.css";

export const DarkModeToggle = () => {
  const { isDark, setIsDark } = useColorScheme();

  const handleToggleChange = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="toggle-container">
      <Toggle
        className="toggle slider"
        id="toggle"
        checked={isDark}
        onChange={handleToggleChange}
        aria-label="Dark mode toggle"
        />
      <label htmlFor="toggle"></label>
    </div>
  );
};

        // icons={{
        //   checked: (
        //     <span role="img" aria-label="Dark mode icon">
        //       🌙
        //     </span>
        //   ),
        //   unchecked: (
        //     <span role="img" aria-label="Light mode icon">
        //       🔆
        //     </span>
        //   ),
        // }}