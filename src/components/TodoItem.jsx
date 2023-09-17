import iconCross from "../assets/images/icon-cross.svg";

const TodoItem = ({ todo, onDelete }) => {
  return (
    <li>
      <input type="checkbox" />
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
