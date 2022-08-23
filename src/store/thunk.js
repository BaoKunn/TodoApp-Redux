import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { axiosInstance } from "../api/api";

export const getTodosThunk = createAsyncThunk("list", async () => {
  try {
    const response = await axiosInstance.get(`/todo`)
    toast.success("Get todo success", { autoClose: 1000 })
    return response.data
  } catch (error) {
    toast.error('Get todo error', { autoClose: 1000 })
  }
});

export const addTodoThunk = createAsyncThunk("add", async (todo) => {
  try {
    await axiosInstance.post(`/todo`, todo);
    const response = await axiosInstance.get(`/todo`);
    toast.success("Add todo success", { autoClose: 1000 })
    return response.data;
  } catch (error) {
    toast.error('Add todo error', { autoClose: 1000 })
  }
});

export const updateTodoThunk = createAsyncThunk("update", async (todo) => {
  try {
    await axiosInstance.put(`/todo/${todo.id}`, {
      title: todo.title,
      deadline: todo.deadline,
      isCompleted: todo.isCompleted,
    });
    const response = await axiosInstance.get(`/todo`);
    toast.success("Update todo success", { autoClose: 1000 })
    return response.data;
  } catch (error) {
    toast.error("Update todo error", { autoClose: 1000 })
  }
});

export const deleteTodoThunk = createAsyncThunk("delete", async (id) => {
  try {
    await axiosInstance.delete(`/todo/${id}`);
    const response = await axiosInstance.get("/todo");
    toast.success("Delete todo success", { autoClose: 1000 })
    return response.data;
  } catch (error) {
    toast.error("Delete todo error", { autoClose: 1000 })
  }
});

export const toggleTodoThunk = createAsyncThunk("toggle", async (todo) => {
  await axiosInstance.put(`/todo/${todo.id}`, {
    isCompleted: !todo.isCompleted,
  });
  const response = await axiosInstance.get("/todo");
  return response.data;
});