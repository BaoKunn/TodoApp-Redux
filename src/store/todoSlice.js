import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
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
        toast.success("Get todo success", { autoClose: 1000 });
      })
      .addCase(getTodosThunk.rejected, () => {
        toast.error("Cannot get todo!", { autoClose: 1000 });
      })
      .addCase(addTodoThunk.fulfilled, (state, action) => {
        state.todoList = action.payload;
        toast.success("Add todo success", { autoClose: 1000 });
      })
      .addCase(addTodoThunk.rejected, () => {
        toast.error("Cannot add todo", { autoClose: 1000 });
      })
      .addCase(updateTodoThunk.fulfilled, (state, action) => {
        state.todoList = action.payload;
        toast.success("Update todo success", { autoClose: 1000 });
      })
      .addCase(updateTodoThunk.rejected, () => {
        toast.error("Cannot update todo", { autoClose: 1000 });
      })
      .addCase(deleteTodoThunk.fulfilled, (state, action) => {
        state.todoList = action.payload;
        toast.success("Delete todo success", { autoClose: 1000 });
      })
      .addCase(deleteTodoThunk.rejected, () => {
        toast.error("Cannot delete todo", { autoClose: 1000 });
      })
      .addCase(toggleTodoThunk.fulfilled, (state, action) => {
        state.todoList = action.payload;
        toast.success("Check todo success", { autoClose: 1000 });
      });
  },
});
