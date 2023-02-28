import React from "react";
import { TodoItem } from "../TodoItem/TodoItem";

export const TodoList = ({ todos, deleteTodoTask }) => {
  console.log(todos);
  return (
    <div>
      <h1>Your tasks</h1>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            title={todo.title}
            id={todo.id}
            deleteTodoTask={deleteTodoTask}
          />
        ))}
      </ul>
    </div>
  );
};
