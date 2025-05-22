import { useEffect, useState } from "react";

export const useTheme = () => {
  const [mode, setMode] = useState("light");

  function changeTheme() {
    const html = document.documentElement;
    const newMode = mode === "light" ? "dark" : "light";
    html.classList.remove(mode);
    html.classList.add(newMode);
    setMode(newMode);
    localStorage.setItem("mode", newMode);
  }

  useEffect(() => {
    const currentMode = localStorage.getItem("mode") || "light";
    document.documentElement.classList.add(currentMode);
    setMode(currentMode);
  }, []);

  return { changeTheme, mode };
}