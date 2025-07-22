import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ThemeToggler() {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="themeToggler"
        checked={theme === "dark"}
        onChange={() => changeTheme(theme === "dark" ? "light" : "dark")}
      />
      <label
        className="form-check-label text-capitalize"
        htmlFor="themeToggler"
      >
        {theme}
      </label>
    </div>
  );
}
