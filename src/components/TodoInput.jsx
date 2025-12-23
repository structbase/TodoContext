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
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="input-group input-group-lg">
                <input
                    type="text"
                    className="form-control"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Add a todo... "
                />
                <button className="btn btn-primary" type="submit">
                    Add
                </button>
            </div>
        </form>
    );
}
