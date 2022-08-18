import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import Header from "./components/Header/Header";
import TabFilter from "./components/TabFilter/TabFilter";
import TodoList from "./components/TodoList/TodoList";
import { getTodosThunk } from "./store/thunk";

toast.configure();

function App() {
  const loading = useSelector((state) => state.loading);
  const success = useSelector((state) => state.success);
  const todoList = useSelector((state) => state.list.todoList);

  console.log(todoList);

  const dispatch = useDispatch();

  const [filterState, setFilterState] = useState("all");

  //get Todo
  useEffect(() => {
    dispatch(getTodosThunk(todoList));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  //Toast noti
  useEffect(() => {
    if (success) {
      toast.success(loading, { autoClose: 2000 });
    }
  }, [loading, success, todoList]);

  return (
    <div className="App">
      <div className="todo">
        <div
          style={{
            width: "50%",
            padding: "24px",
            borderRight: "1px solid #ccc",
          }}
        >
          <ToastContainer />
          <Header />
          <TabFilter setFilterState={setFilterState} />
        </div>
        <div style={{ width: "100%" }}>
          <TodoList filterState={filterState} />
        </div>
      </div>
    </div>
  );
}

export default App;
