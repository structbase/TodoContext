import { createContext, useContext, useState, useEffect } from "react";

const TodoContext = createContext(null);

export function TodoProvider({ children }) {
    // init todos from localStorage; empty list when none
    const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem("todos");
        return saved ? JSON.parse(saved) : [];
    });

    // create new todo item
    const addTodo = (text) => {
        const newTodo = {
            id: Date.now(),
            text,
            completed: false,
        };
        setTodos((prev) => [...prev, newTodo]);
    };

    // toggle completion state
    const toggleTodo = (id) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    // remove todo by id
    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    // edit todo text only
    const editTodo = (id, newText) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, text: newText } : todo
            )
        );
    };

    // persist todos for next visit
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <TodoContext.Provider
            value={{ todos, addTodo, toggleTodo, deleteTodo, editTodo }}
        >
            {children}
        </TodoContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTodos() {
    // guard to avoid usage outside provider
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error("useTodos must be used inside TodoProvider");
    }
    return context;
}
