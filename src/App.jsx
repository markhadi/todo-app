import bgDesktopLight from "./assets/images/bg-desktop-light.jpg";
import bgMobileLight from "./assets/images/bg-mobile-light.jpg";
import iconMoon from "./assets/images/icon-moon.svg";

import data from "./data/data.json";

import TodoItem from "./components/TodoItem";
import TodoFilter from "./components/TodoFilter";

import { useTodo } from "./hooks/useTodo";
import useViewportWidth from "./hooks/useViewportWidth ";

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

  const width = useViewportWidth();
  const isMobile = width < 640;

  const remainingTodos = todoItems.filter((todo) => !todo.completed).length;

  return (
    <main>
      <picture>
        <source media="(min-width: 376px)" srcSet={bgDesktopLight} />
        <img src={bgMobileLight} alt="Background image for the app" />
      </picture>

      <section className="flex flex-col justify-center items-center w-full max-w-[540px] z-[1]">
        <div className="flex justify-between w-full mb-9">
          <h1>Todo</h1>
          <button type="button">
            <img src={iconMoon} alt="Toggle theme" className="h-5" />
          </button>
        </div>

        <form
          method="post"
          onSubmit={handleAddTodo}
          className="w-full mb-4 box_shadow"
        >
          <input
            type="text"
            id="todo"
            name="todo"
            placeholder="Create a new todo..."
            value={currentTodo}
            onChange={handleInputChange}
            className="todo_input"
          />
        </form>

        <ul className="w-full bg-white rounded-md overflow-hidden mb-5 box_shadow">
          {filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={handleDeleteTodo}
              onToggleComplete={handleToggleComplete}
            />
          ))}

          <div className="flex justify-between items-center px-5 py-[18px] text-neutral-light-darkgrayishblue text-[14px]">
            <span>{remainingTodos} items left</span>
            {!isMobile && (
              <TodoFilter
                currentFilter={currentFilter}
                onFilterChange={setCurrentFilter}
              />
            )}
            <button type="button" onClick={clearCompletedTodos} className="btn">
              Clear completed
            </button>
          </div>
        </ul>

        {isMobile && (
          // Mobile-only filter buttons
          <TodoFilter
            currentFilter={currentFilter}
            onFilterChange={setCurrentFilter}
          />
        )}

        <span className="text-[14px] text-neutral-light-darkgrayishblue">
          Drag and drop to reorder list
        </span>
      </section>
    </main>
  );
};

export default App;
