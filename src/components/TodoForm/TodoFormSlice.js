import { createSlice } from "@reduxjs/toolkit/dist/createSlice";
import { act } from "react-dom/test-utils";

export const addTodos = (todoList, todo) => {
  return [todo, ...todoList];
};

export const TodoFormSlice = createSlice({
  name: "form",
  initialState: {
    todoList: [],
  },
  reducers: {
    AddTodo: (state, action) => {
      state.todoList = [...state.todoList, action.payload];
    },
    UpdateTodo: (state, action) => {
      state.todoList = action.payload;
    },
  },
});
