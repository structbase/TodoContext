import { useTodos } from "../contexts/TodoContext";

export default function TodoItem({ todo }) {
    const { toggleTodo, deleteTodo } = useTodos();

    return (
        <li>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
            />
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
    );
}
