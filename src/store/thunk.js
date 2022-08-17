import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../api/api";

export const getTodosThunk = createAsyncThunk("list", async () => {
  const response = await axiosInstance.get(`/todo`);
  return response.data;
});

export const addTodoThunk = createAsyncThunk("add", async (todo) => {
  await axiosInstance.post(`/todo`, todo);
  const response = await axiosInstance.get(`/todo`);
  return response.data;
});

export const updateTodoThunk = createAsyncThunk("update", async (todo) => {
  await axiosInstance.put(`/todo/${todo.id}`, {
    title: todo.title,
    deadline: todo.deadline,
    isCompleted: todo.isCompleted,
  });
  const response = await axiosInstance.get(`/todo`);
  return response.data;
});


export const deleteTodoThunk = createAsyncThunk("delete", async (id) => {
  await axiosInstance.delete(`/todo/${id}`);
  const response = await axiosInstance.get("/todo");
  return response.data;
});


export const toggleTodoThunk = createAsyncThunk("toggle", async (todo) => {
    await axiosInstance.put(`/todo/${todo.id}`,{
        isCompleted: !todo.isCompleted,
    })
    const response = await axiosInstance.get('/todo');
   return response.data;
});
