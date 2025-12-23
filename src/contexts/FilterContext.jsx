import { createContext, useContext, useState } from "react";

const FilterContext = createContext(null);

export function FilterProvider({ children }) {
    // track which todos should display
    const [filter, setFilter] = useState("all");

    return (
        <FilterContext.Provider value={{ filter, setFilter }}>
            {children}
        </FilterContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useFilter() {
    // guard to ensure hook stays inside provider
    const context = useContext(FilterContext);

    if (!context) {
        throw new Error("useFilter must be used inside FilterProvider");
    }
    return context;
}
