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
    const toggleTodo = (id) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    const editTodo = (id, newText) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, text: newText } : todo
            )
        );
    };

    return (
        <TodoContext.Provider
            value={{ todos, addTodo, toggleTodo, deleteTodo, editTodo }}
        >
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
