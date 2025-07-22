export default function ThemeToggler() {
  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="themeToggler"
      />
      <label className="form-check-label" htmlFor="themeToggler">
        Dark
      </label>
    </div>
  );
}
