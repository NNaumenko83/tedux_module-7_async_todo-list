import React from "react";
import { TodoList } from "./components/TodoList/TodoList";
import { useSelector } from "react-redux";
import { addTodo, deleteTodo, getTodos } from "./redux/todoSlice";
import { AddTodoForm } from "./components/AddTodoForm/AddTodoForm";
import { useDispatch } from "react-redux";

function App() {
  const todos = useSelector(getTodos);
  const dispatch = useDispatch();

  const addTodoTask = (value) => {
    dispatch(addTodo(value));
  };

  const deleteTodoTask = (id) => {
    dispatch(deleteTodo(id));
    console.log(id);
  };

  return (
    <>
      <h1>Todo list</h1>
      <AddTodoForm onSubmit={addTodoTask} />
      <TodoList todos={todos} deleteTodoTask={deleteTodoTask} />
    </>
  );
}

export default App;
