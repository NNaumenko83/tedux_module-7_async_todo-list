import React from "react";

export const AddTodoForm = ({ onSubmit }) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const task = e.target.elements.task.value;
    onSubmit(task);
    e.target.reset();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label>
        Input your task:
        <input type="text" name="task" />
      </label>
      <button type="submit">Add task</button>
    </form>
  );
};
