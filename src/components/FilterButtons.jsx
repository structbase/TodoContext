import { useFilter } from "../contexts/FilterContext";

export default function FilterButtons() {
    const { filter, setFilter } = useFilter();

    return (
        <div className="btn-group mb-4" role="group">
            <button
                type="button"
                className={`btn ${filter === "all" ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() => setFilter("all")}
            >
                All
            </button>
            <button
                type="button"
                className={`btn ${filter === "active" ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() => setFilter("active")}
            >
                Active
            </button>
            <button
                type="button"
                className={`btn ${filter === "completed" ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() => setFilter("completed")}
            >
                Completed
            </button>
        </div>
    );
}
