import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://62e263ce3891dd9ba8e6e43b.mockapi.io',
    timeout: 2000,
    headers: { "X-Custom-Header": "foobar" },
});
export const getTodosAPI = () => {
    return axiosInstance.get(`/todo`);
};

export const addTodoAPI = (todo) => {
    return axiosInstance.post(`/todo`, todo);
};

export const deleteTodoAPI = (id) => {
    return axiosInstance.delete(`/todo/${id}`);
};

export const updateTodoAPI = (todo) => {
    return axiosInstance.put(`/todo/${todo.id}`, {
        title: todo.title,
        isCompleted: todo.isCompleted,
        deadline: todo.deadline,
    });
};
