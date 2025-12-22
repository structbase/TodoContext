import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";
import "./App.css";

function App() {
    return (
        <>
            <TodoInput />
            <FilterButtons />
            <TodoList />
        </>
    );
}

export default App;
