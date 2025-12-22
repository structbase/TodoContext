import { createContext, useContext, useState } from "react";

const FilterContext = createContext(null);

export function FilterProvider({ children }) {
    const [filter, setFilter] = useState("all");

    return (
        <FilterContext.Provider value={{ filter, setFilter }}>
            {children}
        </FilterContext.Provider>
    );
}

export function useFilter() {
    const context = useContext(FilterContext);

    if (!context) {
        throw new Error("useFilter must be used inside FilterProvider");
    }
    return context;
}
