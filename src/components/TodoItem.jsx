import { useState } from "react";
import { useTodos } from "../contexts/TodoContext";

export default function TodoItem({ todo }) {
    const { toggleTodo, deleteTodo, editTodo } = useTodos();
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    const handleEdit = () => {
        if (isEditing && newText.trim()) {
            editTodo(todo.id, newText);
        }
        setIsEditing(!isEditing);
    };

    return (
        <li>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
            />
            {isEditing ? (
                <input
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                />
            ) : (
                <span>{todo.text}</span>
            )}
            <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
    );
}
