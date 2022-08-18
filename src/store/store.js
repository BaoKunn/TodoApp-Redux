import { configureStore } from "@reduxjs/toolkit";
import { TodoListSlice } from "./todoSlice";

const store = configureStore({
  reducer: {
    list: TodoListSlice.reducer,
  },
});

export default store;
