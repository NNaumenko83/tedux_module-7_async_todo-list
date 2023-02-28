import { configureStore } from "@reduxjs/toolkit";
import { todosSliceReducer } from "./todoSlice";

export const store = configureStore({
  reducer: { todos: todosSliceReducer },
});
