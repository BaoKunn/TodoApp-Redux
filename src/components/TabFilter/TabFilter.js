import "./TabFilter.scss";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function TabFilter({ setFilterState }) {
  const [status, setStatus] = useState("all");

  const clickAll = () => {
    setFilterState("all");
    setStatus("all");
  };

  const clickACtive = () => {
    setFilterState("active");
    setStatus("active");
  };

  const clickComplete = () => {
    setFilterState("complete");
    setStatus("complete");
  };

  const todoList = useSelector((state) => state.list.todoList);
  return (
    <div className="filter">
      <button
        className={classNames(" btn-filter", {
          btn__active: status === "all",
        })}
        onClick={clickAll}
      >
        All ({todoList.length})
      </button>
      <button
        className={classNames(" btn-filter", {
          btn__active: status === "active",
        })}
        onClick={clickACtive}
      >
        Active ({todoList.filter((todo) => todo.isCompleted === false).length})
      </button>
      <button
        className={classNames(" btn-filter", {
          btn__active: status === "complete",
        })}
        onClick={clickComplete}
      >
        Completed ({todoList.filter((todo) => todo.isCompleted === true).length}
        )
      </button>
    </div>
  );
}
