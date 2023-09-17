const TodoFilter = ({ currentFilter, onFilterChange }) => {
  return (
    <div className="todo_filter_container">
      <button
        type="button"
        onClick={() => onFilterChange("all")}
        className={
          currentFilter === "all"
            ? "text-primary-blue btn"
            : "text-neutral-light-darkgrayishblue btn"
        }
      >
        All
      </button>
      <button
        type="button"
        onClick={() => onFilterChange("active")}
        className={
          currentFilter === "active"
            ? "text-primary-blue btn"
            : "text-neutral-light-darkgrayishblue btn"
        }
      >
        Active
      </button>
      <button
        type="button"
        onClick={() => onFilterChange("completed")}
        className={
          currentFilter === "completed"
            ? "text-primary-blue btn"
            : "text-neutral-light-darkgrayishblue btn"
        }
      >
        Completed
      </button>
    </div>
  );
};

export default TodoFilter;
