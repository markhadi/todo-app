import bgDesktopLight from "./assets/images/bg-desktop-light.jpg";
import bgMobileLight from "./assets/images/bg-mobile-light.jpg";
import iconMoon from "./assets/images/icon-moon.svg";

import data from "./data/data.json";

import TodoItem from "./components/TodoItem";
import TodoFilter from "./components/TodoFilter";

import { useTodo } from "./hooks/useTodo";

const App = () => {
  const {
    todoItems,
    currentTodo,
    handleInputChange,
    handleAddTodo,
    handleDeleteTodo,
    handleToggleComplete,
    currentFilter,
    setCurrentFilter,
    clearCompletedTodos,
  } = useTodo(data.todos);

  let filteredTodos;

  switch (currentFilter) {
    case "active":
      filteredTodos = todoItems.filter((todo) => !todo.completed);
      break;
    case "completed":
      filteredTodos = todoItems.filter((todo) => todo.completed);
      break;
    default:
      filteredTodos = todoItems;
      break;
  }

  const remainingTodos = data.todos.filter((todo) => !todo.completed).length;

  return (
    <main>
      <picture>
        <source media="(min-width: 376px)" srcSet={bgDesktopLight} />
        <img src={bgMobileLight} alt="Background image for the app" />
      </picture>

      <section>
        <div>
          <h1>Todo</h1>
          <button type="button">
            <img src={iconMoon} alt="Toggle theme" />
          </button>
        </div>

        <form method="post" onSubmit={handleAddTodo}>
          <input
            type="text"
            id="todo"
            name="todo"
            placeholder="Create a new todo..."
            value={currentTodo}
            onChange={handleInputChange}
          />
        </form>

        <ul>
          {filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={handleDeleteTodo}
              onToggleComplete={handleToggleComplete}
            />
          ))}

          <div>
            <span>{remainingTodos} items left</span>
            <TodoFilter
              currentFilter={currentFilter}
              onFilterChange={setCurrentFilter}
            />
            <button type="button" onClick={clearCompletedTodos}>
              Clear completed
            </button>
          </div>
        </ul>

        <span>Drag and drop to reorder list</span>
      </section>
    </main>
  );
};

export default App;
