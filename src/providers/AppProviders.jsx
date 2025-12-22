import { TodoProvider } from "../contexts/TodoContext";
import { FilterProvider } from "../contexts/TodoContext";
import { ThemeProvider } from "../contexts/TodoContext";

export default function AppProviders({ children }) {
    return (
        <TodoProvider>
            <FilterProvider>
                <ThemeProvider>{children}</ThemeProvider>
            </FilterProvider>
        </TodoProvider>
    );
}
