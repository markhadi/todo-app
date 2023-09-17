const TodoFilter = ({ currentFilter, onFilterChange }) => {
  return (
    <div>
      <button
        type="button"
        onClick={() => onFilterChange("all")}
        className={
          currentFilter === "all"
            ? "text-primary-blue"
            : "text-neutral-light-darkgrayishblue"
        }
      >
        All
      </button>
      <button
        type="button"
        onClick={() => onFilterChange("active")}
        className={
          currentFilter === "active"
            ? "text-primary-blue"
            : "text-neutral-light-darkgrayishblue"
        }
      >
        Active
      </button>
      <button
        type="button"
        onClick={() => onFilterChange("completed")}
        className={
          currentFilter === "completed"
            ? "text-primary-blue"
            : "text-neutral-light-darkgrayishblue"
        }
      >
        Completed
      </button>
    </div>
  );
};

export default TodoFilter;
