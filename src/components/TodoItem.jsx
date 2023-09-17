import iconCross from "../assets/images/icon-cross.svg";
import iconCheck from "../assets/images/icon-check.svg";

import { useState } from "react";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const TodoItem = ({ todo, onDelete, onToggleComplete }) => {
  const [preventDrag, setPreventDrag] = useState(false);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: todo.id.toString(),
      disabled: preventDrag,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <>
      <li
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className="flex items-center gap-3 px-5 py-4 relative sm:px-6 sm:py-5 sm:gap-6 cursor-grab active:cursor-grabbing"
      >
        <input
          type="checkbox"
          id={`todo-${todo.id}`}
          checked={todo.completed}
          onChange={() => onToggleComplete(todo.id)}
        />
        <label
          htmlFor={`todo-${todo.id}`}
          className="checkbox_custom"
          // Disable drag when the mouse is over this label
          onMouseEnter={() => setPreventDrag(true)}
          onMouseLeave={() => setPreventDrag(false)}
        >
          {todo.completed ? (
            <img src={iconCheck} alt="checked" className="z-10" />
          ) : (
            ""
          )}
        </label>
        <p
          onClick={() => onToggleComplete(todo.id)}
          className={`${todo.completed ? "completed" : ""} cursor-pointer`}
          // Disable drag when the mouse is over this label
          onMouseEnter={() => setPreventDrag(true)}
          onMouseLeave={() => setPreventDrag(false)}
        >
          {todo.title}
        </p>
        <button
          type="button"
          className="delete_todo absolute right-5 sm:right-6"
          // Disable drag when the mouse is over this label
          onMouseEnter={() => setPreventDrag(true)}
          onMouseLeave={() => setPreventDrag(false)}
        >
          <img
            src={iconCross}
            alt="Delete todo"
            onClick={() => onDelete(todo.id)}
          />
        </button>
      </li>
      <hr className="border_bottom" />
    </>
  );
};

export default TodoItem;
