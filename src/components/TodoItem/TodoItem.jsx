import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/operations";

export const TodoItem = ({ title, id }) => {
  const dispatch = useDispatch();

  const deleteTodoTask = (id) => {
    console.log(id);
    dispatch(deleteTask(id));
  };

  return (
    <div>
      <p>{title}</p>
      <button type="button" onClick={() => deleteTodoTask(id)}>
        Delete task
      </button>
      <hr />
    </div>
  );
};
