import { useState } from "react";
import bgDesktopLight from "./assets/images/bg-desktop-light.jpg";
import bgMobileLight from "./assets/images/bg-mobile-light.jpg";
import iconMoon from "./assets/images/icon-moon.svg";

import data from "./data/data.json";

import TodoItem from "./components/TodoItem";
import TodoFilter from "./components/TodoFilter";

const App = () => {
  const [todoItems, setTodoItems] = useState(data.todos);

  const remainingTodos = todoItems.filter((todo) => !todo.completed).length;

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

        <form action="#" method="post" onSubmit={handleAddTodo}>
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
          {todoItems.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggleComplete={handleToggleComplete}
              onDelete={handleDeleteTodo}
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
