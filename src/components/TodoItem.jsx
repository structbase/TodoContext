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
        <li className="list-group-item d-flex align-items-center gap-3 mb-2 shadow-sm">
            <input
                type="checkbox"
                className="form-check-input flex-shrink-0"
                style={{ width: "1.25rem", height: "1.25rem" }}
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
            />
            {isEditing ? (
                <input
                    type="text"
                    className="form-control flex-grow-1"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") handleEdit();
                        if (e.key === "Escape") {
                            setNewText(todo.text);
                            setIsEditing(false);
                        }
                    }}
                    autoFocus
                />
            ) : (
                <span className={`flex-grow-1 ${todo.completed ? "text-decoration-line-through text-muted" : ""}`}>
                    {todo.text}
                </span>
            )}
            <button 
                className="btn btn-sm btn-outline-primary"
                onClick={handleEdit}
            >
                {isEditing ? "Save" : "Edit"}
            </button>
            <button 
                className="btn btn-sm btn-outline-danger"
                onClick={() => deleteTodo(todo.id)}
            >
                Delete
            </button>
        </li>
    );
}
