import { createContext, useContext, useState } from "react";

const TodoContext = createContext(null);

export function TodoProvider({ children }) {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        const newTodo = {
            id: Date.now(),
            text,
            completed: false,
        };

        setTodos((prev) => [...prev, newTodo]);
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo }}>
            {children}
        </TodoContext.Provider>
    );
}

export function useTodos() {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error("useTodos must be used inside TodoProvider");
    }
    return context;
}
