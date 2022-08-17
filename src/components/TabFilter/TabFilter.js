
import "./TabFilter.scss";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
export default function TabFilter() {
    const dispatch = useDispatch();

    const filter = useSelector((state) => state.filter);

    const todoList = useSelector((state) => state.list.todoList);
    return (
        <div className="filter">
            <button
                className={classNames(" btn-filter", {
                    btn__active: filter === "all",
                })}
                onClick={() => dispatch(("all"))}
            >
                All ({todoList.length})
            </button>
            <button
                className={classNames(" btn-filter", {
                    btn__active: filter === "active",
                })}
                onClick={() => dispatch(("active"))}
            >
                Active ({todoList.filter((todo) => todo.isCompleted === false).length})
            </button>
            <button
                className={classNames(" btn-filter", {
                    btn__active: filter === "complete",
                })}
                onClick={() => dispatch(("complete"))}
            >
                Completed ({todoList.filter((todo) => todo.isCompleted === true).length}
                )
            </button>
        </div>
    );
};
