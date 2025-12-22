import { useState } from "react";
import { useTodos } from "../contexts/TodoContext";

export default function TodoInput() {
    const [text, setText] = useState("");
    const { addTodo } = useTodos();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;

        addTodo(text);
        setText("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a todo"
            />
            <button type="submit">Add</button>
        </form>
    );
}
