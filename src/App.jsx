import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";
import ThemeToggleButton from "./components/ThemeToggleButton";
import { useTheme } from "./contexts/ThemeContext";
import "./App.css";

function App() {
    const { theme } = useTheme();

    return (
        <div className={theme === "light" ? "light-theme" : "dark-theme"} style={{ minHeight: "100vh", padding: "2rem 0" }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-6">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h1 className="h2 mb-0">Todo App</h1>
                            <ThemeToggleButton />
                        </div>
                        <TodoInput />
                        <FilterButtons />
                        <TodoList />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
