import { useState } from "react";

export default function TodoInput() {
    const [text, setText] = useState("");

    const handleSumbit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;

        setText;
    };
    return (
        <form onSubmit={handleSumbit}>
            <input
                type="text"
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a todo"
            />
            <button type="submit">Add</button>
        </form>
    );
}
