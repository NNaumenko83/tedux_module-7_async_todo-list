import React from "react";
import { addTask } from "../../redux/operations";
import { useDispatch } from "react-redux";

export const AddTodoForm = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const task = e.target.elements.task.value;
    console.log(task);
    dispatch(addTask(task));
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
