import { useTheme } from "../contexts/ThemeContext";

export default function ThemeToggleButton() {
    const { theme, toggleTheme } = useTheme();

    return (
        // switch between light/dark theme
        <button
            className="btn btn-outline-secondary btn-sm"
            onClick={toggleTheme}
        >
            {theme === "light" ? "🌙" : "☀️"}{" "}
            {theme === "light" ? "Dark" : "Light"} Mode
        </button>
    );
}
