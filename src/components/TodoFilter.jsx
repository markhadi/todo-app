const TodoFilter = ({ currentFilter, onFilterChange }) => {
  return (
    <div>
      <button type="button" onClick={() => onFilterChange("all")}>
        All
      </button>
      <button type="button" onClick={() => onFilterChange("active")}>
        Active
      </button>
      <button type="button" onClick={() => onFilterChange("completed")}>
        Completed
      </button>
    </div>
  );
};

export default TodoFilter;
