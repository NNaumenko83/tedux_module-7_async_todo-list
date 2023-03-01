import React from "react";
import { TodoList } from "./components/TodoList/TodoList";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "./redux/todoSlice";
import { AddTodoForm } from "./components/AddTodoForm/AddTodoForm";
import { useEffect } from "react";
import { fetchTasks } from "./redux/operations";

function App() {
  const { items, isLoading, error } = useSelector(getTodos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  // const addTodoTask = (value) => {
  //   // dispatch(addTodo(value));
  //   console.log("addTodoTask");
  // };

  return (
    <>
      <h1>Todo list</h1>
      <AddTodoForm />
      <div>
        {isLoading && <p>Loading tasks...</p>}
        {error && <p>{error}</p>}
        <TodoList todos={items} />
      </div>

      {/* <AddTodoForm onSubmit={addTodoTask} /> */}
    </>
  );
}

export default App;
