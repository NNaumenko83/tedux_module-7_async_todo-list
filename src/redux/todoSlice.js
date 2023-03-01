import { createSlice } from "@reduxjs/toolkit";

// Імпортуємо операцію
import { addTask, fetchTasks } from "./operations";
import { deleteTask } from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  extraReducers: {
    [fetchTasks.pending]: handlePending,
    [fetchTasks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchTasks.rejected]: handleRejected,
    [deleteTask.pending]: handlePending,
    [deleteTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = false;
      const deletedId = state.items.findIndex(
        (item) => item.id === +action.payload.id
      );

      state.items.splice(deletedId, 1);
    },
    [deleteTask.rejected]: handleRejected,
    [addTask.pending]: handlePending,
    [addTask.fulfilled](state, action) {
      state.isLoading = false;
      console.log(action.payload);
      state.items.push(action.payload);
    },
    [addTask.rejected]: handleRejected,
  },
  //   reducers: {
  //     // Виконається в момент старту HTTP-запиту
  //     fetchingInProgress(state) {
  //       state.isLoading = true;
  //     },
  //     // Виконається якщо HTTP-запит завершився успішно
  //     fetchingSuccess(state, action) {
  //       state.isLoading = false;
  //       state.error = null;
  //       state.items = action.payload;
  //     },
  //     // Виконається якщо HTTP-запит завершився з помилкою
  //     fetchingError(state, action) {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     },
  //   },
  //   reducers: {
  //     addTodo: {
  //       reducer(state, action) {
  //         console.log(action.payload);
  //         state.items.push(action.payload);
  //       },
  //       prepare(title) {
  //         console.log(title);
  //         return {
  //           payload: {
  //             title,
  //             id: nanoid(),
  //             completed: false,
  //           },
  //         };
  //       },
  //     },
  //     deleteTodo(state, action) {
  //       const deletedIndex = state.items.findIndex(
  //         (todo) => todo.id === action.payload
  //       );
  //       state.items.splice(deletedIndex, 1);
  //     },
  //   },
});

// Action creators are generated for each case reducer function
// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   todosSlice.actions;

export const todosSliceReducer = todosSlice.reducer;

export const getTodos = (state) => state.todos;
