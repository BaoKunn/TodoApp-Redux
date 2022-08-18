import { TodoItem } from "../TodoItem/TodoItem";
import "./TodoList.scss";
import { useSelector } from "react-redux/es/exports";

export default function TodoList({ filterState }) {
  const todos = useSelector((state) => state.list.todoList);

  const todoClone = [...todos];
  console.log(todoClone);
  return (
    <div className="todoList">
      {todoClone?.length === 0 ? (
        <h2>Add todo now!!!</h2>
      ) : (
        todoClone
          .filter(e =>
            filterState === "complete"
              ? e.isCompleted === true
              : filterState === "active"
              ? e.isCompleted=== false
              : e.isCompleted === false || e.isCompleted === true
          )
          .map((todo) => {
            return <TodoItem key={todo.id} todoItem={todo} />;
          })
          .reverse()
      )}
    </div>
  );
}
