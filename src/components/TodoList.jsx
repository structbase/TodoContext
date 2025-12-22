import { useTodos } from "../contexts/TodoContext";
import { useFilter } from "../contexts/FilterContext";
import TodoItem from "./TodoItem";

export default function TodoList() {
    const { todos } = useTodos();
    const { filter } = useFilter();

    const filteredTodos = todos.filter((todo) => {
        if (filter === "all") return true;
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
    });

    if (filteredTodos.length === 0) return <p>No todos yet! Add one above.</p>;

    return (
        <ul>
            {filteredTodos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
}
