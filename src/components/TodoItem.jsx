import iconCross from "../assets/images/icon-cross.svg";

const TodoItem = ({ todo }) => {
  return (
    <li key={todo.id}>
      <input type="checkbox" />
      <p>{todo.title}</p>
      <button type="button">
        <img src={iconCross} alt="Delete todo" />
      </button>
    </li>
  );
};

export default TodoItem;
