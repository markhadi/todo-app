import { useState } from "react";

export const useTodo = (initialData) => {
  const [todoItems, setTodoItems] = useState(initialData);
  const [currentTodo, setCurrentTodo] = useState("");
  const [currentFilter, setCurrentFilter] = useState("all");

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

  const handleDeleteTodo = (id) => {
    const updatedTodos = todoItems.filter((todo) => todo.id !== id);
    setTodoItems(updatedTodos);
  };

  const handleToggleComplete = (id) => {
    const updatedTodos = todoItems.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodoItems(updatedTodos);
  };

  const clearCompletedTodos = () => {
    const activeTodos = todoItems.filter((todo) => !todo.completed);
    setTodoItems(activeTodos);
  };

  return {
    todoItems,
    currentTodo,
    handleInputChange,
    handleAddTodo,
    handleDeleteTodo,
    handleToggleComplete,
    currentFilter,
    setCurrentFilter,
    clearCompletedTodos,
  };
};
