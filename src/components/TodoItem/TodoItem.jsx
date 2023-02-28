import React from "react";

export const TodoItem = ({ title, id, deleteTodoTask }) => {
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
