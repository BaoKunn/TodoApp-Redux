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
  const todoList = useSelector((state) => state.list.todoList);

  const dispatch = useDispatch();
  const [filterState, setFilterState] = useState("all");

  //get Todo
  useEffect(() => {
    dispatch(getTodosThunk(todoList));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className="App">
      <div className="todo">
        <div className="function_Filter">
          <ToastContainer />
          <Header />
          <TabFilter setFilterState={setFilterState} />
        </div>
        <div className="function_Item">
          <TodoList filterState={filterState} />
        </div>
      </div>
    </div>
  );
}

export default App;
