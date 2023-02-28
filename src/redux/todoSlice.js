import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = [
  {
    title:
      "Repudiandae corrupti esse eum deserunt pariatur cupiditate esse quasi nulla.",
    completed: false,
    id: "20",
  },
  {
    title: "Deleniti quam distinctio eaque nisi voluptatem sunt recusandae.",
    completed: false,
    id: "21",
  },
  {
    title: "Earum aperiam voluptatem facere aperiam sed architecto ratione a.",
    completed: true,
    id: "22",
  },
  {
    title: "Deserunt delectus autem.",
    completed: true,
    id: "23",
  },
];

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      reducer(state, action) {
        console.log(action.payload);
        state.push(action.payload);
      },
      prepare(title) {
        console.log(title);
        return {
          payload: {
            title,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },
    deleteTodo(state, action) {
      const deletedIndex = state.findIndex(
        (todo) => todo.id === action.payload
      );
      state.splice(deletedIndex, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo } = todosSlice.actions;

export const todosSliceReducer = todosSlice.reducer;

export const getTodos = (state) => state.todos;
