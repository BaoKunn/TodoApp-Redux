import { createSlice } from "@reduxjs/toolkit";
import {
  addTodoThunk,
  deleteTodoThunk,
  getTodosThunk,
  updateTodoThunk,
  toggleTodoThunk,
} from "./thunk";

export const TodoListSlice = createSlice({
  name: "list",
  initialState: {
    todoList: [],
    filter: "all",
    todoListFilter: [],
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTodosThunk.fulfilled, (state, action) => {
        state.todoList = action.payload;
      })
      .addCase(addTodoThunk.fulfilled, (state, action) => {
        state.todoList = action.payload;
      })
      .addCase(updateTodoThunk.fulfilled, (state, action) => {
        state.todoList = action.payload;
      })
      .addCase(deleteTodoThunk.fulfilled, (state, action) => {
        state.todoList = action.payload;
      })
      .addCase(toggleTodoThunk.fulfilled, (state, action) => {
        state.todoList = action.payload;
      });
  },
});
