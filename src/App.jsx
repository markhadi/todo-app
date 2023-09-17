import bgDesktopLight from "./assets/images/bg-desktop-light.jpg";
import bgDesktopDark from "./assets/images/bg-desktop-dark.jpg";
import bgMobileLight from "./assets/images/bg-mobile-light.jpg";
import bgMobileDark from "./assets/images/bg-mobile-dark.jpg";
import iconMoon from "./assets/images/icon-moon.svg";
import iconSun from "./assets/images/icon-sun.svg";

import data from "./data/data.json";

import TodoItem from "./components/TodoItem";
import TodoFilter from "./components/TodoFilter";

import { useTodo } from "./hooks/useTodo";
import useViewportWidth from "./hooks/useViewportWidth ";
import useDarkMode from "./hooks/useDarkMode";

import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

const App = () => {
  const {
    todoItems,
    setTodoItems,
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

  const [darkMode, toggleDarkMode] = useDarkMode();

  function handleDragEnd(event) {
    const { active, over } = event;

    const activeId = active.id.toString();
    const overId = over.id.toString();

    if (activeId !== overId) {
      setTodoItems((items) => {
        const oldIndex = items.findIndex(
          (item) => item.id.toString() === activeId
        );
        const newIndex = items.findIndex(
          (item) => item.id.toString() === overId
        );

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  return (
    <main>
      <picture>
        {darkMode ? (
          <>
            <source media="(min-width: 376px)" srcSet={bgDesktopDark} />
            <img src={bgMobileDark} alt="Background image for the app" />
          </>
        ) : (
          <>
            <source media="(min-width: 376px)" srcSet={bgDesktopLight} />
            <img src={bgMobileLight} alt="Background image for the app" />
          </>
        )}
      </picture>

      <section className="flex flex-col justify-center items-center w-full max-w-[540px] z-[1]">
        <div className="flex justify-between w-full mb-9 sm:mb-10">
          <h1>Todo</h1>
          <button type="button" onClick={toggleDarkMode}>
            {darkMode ? (
              <img src={iconSun} alt="Toggle theme" className="h-5 sm:h-max" />
            ) : (
              <img src={iconMoon} alt="Toggle theme" className="h-5 sm:h-max" />
            )}
          </button>
        </div>

        <form
          method="post"
          onSubmit={handleAddTodo}
          className="w-full mb-4 box_shadow sm:mb-6"
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

        <ul className="w-full bg-white rounded-md overflow-hidden mb-5 box_shadow sm:mb-[52px] dark:bg-neutral-dark-verydarkdesaturatedblue">
          <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={filteredTodos.map((todo) => todo.id.toString())}
              strategy={verticalListSortingStrategy}
            >
              {filteredTodos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggleComplete={handleToggleComplete}
                  onDelete={handleDeleteTodo}
                />
              ))}
            </SortableContext>
          </DndContext>

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
