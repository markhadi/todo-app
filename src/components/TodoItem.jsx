import iconCross from "../assets/images/icon-cross.svg";

const TodoItem = ({ todo, onToggleComplete, onDelete }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleComplete(todo.id)}
      />
      <p>{todo.title}</p>
      <img
        src={iconCross}
        alt="Delete todo"
        onClick={() => onDelete(todo.id)}
      />
    </li>
  );
};

export default TodoItem;
