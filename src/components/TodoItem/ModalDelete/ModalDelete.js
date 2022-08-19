import * as React from "react";
import "./ModalDelete.scss";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { deleteTodoThunk } from "../../../store/thunk";

const ModalDelete = ({ todoItem, close, open }) => {
  const dispatch = useDispatch();
  const handleClickDelete = () => {
    dispatch(deleteTodoThunk(todoItem.id));
  };

  return (
    <div
      className={classNames("modal", {
        modal__hidden: !close,
      })}
    >
      <div className="modal__overlay" onClick={() => open(false)}></div>
      <div className="modal__delete">
        <div className="modal__title">Do you want delete todo ?</div>
        <form className="form__input" >
        <input
          type="text"
          className="todo-name"
          required
          value={todoItem.title}
        />
        <div className="todo-form__deadline">
          <h2>Deadline:</h2>
        </div>
        <input
          type="datetime-local"
          className="todo-deadline"
          value={todoItem.deadline}
        />
      </form>
        <div className="form__control">
          <input
            type="button"
            className="btn btn-cancel"
            value="Cancel"
            onClick={() => open(false)}
          />

          <input
            type="submit"
            className="btn btn-delete"
            value="Delete"
            onClick={handleClickDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;


