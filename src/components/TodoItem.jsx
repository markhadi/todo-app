import iconCross from "../assets/images/icon-cross.svg";

const TodoItem = ({ todo, onDelete, onToggleComplete }) => {
  return (
    <li className="flex items-center gap-3 px-5 py-4 border_bottom relative sm:px-6 sm:py-5 sm:gap-6">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleComplete(todo.id)}
      />
      <p
        onClick={() => onToggleComplete(todo.id)}
        className={`${todo.completed ? "completed" : ""} cursor-pointer`}
      >
        {todo.title}
      </p>
      <button type="button" className="delete_todo absolute right-5 sm:right-6">
        <img
          src={iconCross}
          alt="Delete todo"
          onClick={() => onDelete(todo.id)}
        />
      </button>
    </li>
  );
};

export default TodoItem;
