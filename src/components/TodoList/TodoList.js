import { useSelector } from "react-redux";
import { TodoItem } from "../TodoItem/TodoItem";
import "./TodoList.scss";



export default function TodoList() {
    const todos = useSelector((state) => state.todoList);

    const todoClone = [...todos]

    

    return (
        <div className="todoList">
            {todos.length === 0 ? (
                <h2>Add todo now!!!</h2>
            ) : (
                todoClone.map((todo) => {
                    return <TodoItem key={todo.id} todoItem={todo} />;
                })
            )}
        </div>
    );
};
