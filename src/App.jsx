import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";
import ThemeToggleButton from "./components/ThemeToggleButton";
import { useTheme } from "./contexts/ThemeContext";
import "./App.css";

function App() {
    const { theme } = useTheme();

    return (
        <div className={theme === "light" ? "light-theme" : "dark-theme"}>
            <ThemeToggleButton />
            <TodoInput />
            <FilterButtons />
            <TodoList />
        </div>
    );
}

export default App;
