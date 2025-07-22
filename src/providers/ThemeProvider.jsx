import { useEffect, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const storageTheme = localStorage.getItem("theme");
    if (storageTheme) changeTheme(storageTheme);
  }, []);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);

    const html = document.querySelector("html");
    html.setAttribute("data-bs-theme", newTheme);

    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
