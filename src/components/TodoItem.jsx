import iconCross from "../assets/images/icon-cross.svg";

const TodoItem = ({ todo, onDelete, onToggleComplete }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleComplete(todo.id)}
      />
      <p>{todo.title}</p>
      <button type="button">
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
