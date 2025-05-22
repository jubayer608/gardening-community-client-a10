// ThemeToggle.jsx
import React from "react";
import { useTheme } from "./UseTheme";


const ThemeToggle = () => {
  const { changeTheme, mode } = useTheme();

  return (
    <button
      onClick={changeTheme}
      className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
    >
      Switch to {mode === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeToggle;