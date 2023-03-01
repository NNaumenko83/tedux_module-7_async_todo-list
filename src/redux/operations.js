import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// import {
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
// } from "./todoSlice";

axios.defaults.baseURL = "https://63d9ea6b2af48a60a7c1e509.mockapi.io";

// export const fetchTasks = () => async (dispatch) => {
//   try {
//     dispatch(fetchingInProgress());
//     const response = await axios.get("/todos ");
//     // console.log("response", response);
//     // console.log("response.data", response.data);
//     dispatch(fetchingSuccess(response.data));
//   } catch (error) {
//     dispatch(fetchingError(error.message));
//   }
// };

export const fetchTasks = createAsyncThunk(
  "tasks/fetchTasks",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/todos ");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "tasks / deleteTask",
  async (id, { rejectWithValue }) => {
    try {
      //   console.log(id);
      const response = await axios.delete(`/todos/${id}`);
      //   console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (text, { rejectWithValue }) => {
    try {
      const newTask = { title: `${text}`, completed: false };
      const response = await axios.post("/todos", newTask);
      console.log(response);
      return response.data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
