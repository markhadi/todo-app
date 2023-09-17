import { useState } from "react";

export const useTodo = (initialData) => {
  const [todoItems, setTodoItems] = useState(initialData);
  const [currentTodo, setCurrentTodo] = useState("");

  const handleInputChange = (e) => {
    setCurrentTodo(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    const newTodoId = new Date().getTime();
    const newTodo = {
      id: newTodoId,
      title: currentTodo,
      completed: false,
    };
    setTodoItems([...todoItems, newTodo]);
    setCurrentTodo("");
  };

  return {
    todoItems,
    currentTodo,
    handleInputChange,
    handleAddTodo,
  };
};
