import { TodoProvider } from "../contexts/TodoContext";
import { FilterProvider } from "../contexts/FilterContext";
import { ThemeProvider } from "../contexts/ThemeContext";

export default function AppProviders({ children }) {
    return (
        // provider stack keeps global state tidy
        <TodoProvider>
            {/* filter layer sits above todos */}
            <FilterProvider>
                {/* theme last so UI reads the current mode */}
                <ThemeProvider>{children}</ThemeProvider>
            </FilterProvider>
        </TodoProvider>
    );
}
