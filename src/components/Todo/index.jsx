import React from "react";
import classes from "./style.module.scss";

const Todo = ({ todo, removeTodo, updateTodo }) => {
  return (
    <div className={classes.todorow}>
      <div className={classes.todoleft}>
        <span className={classes.todoname}>{todo.name}</span>
        <span
          className={`${classes.priority} ${
            todo.priority === "Urgent" ? classes.urgent : ""
          } ${todo.priority === "Regular" ? classes.regular : ""} ${
            todo.priority === "Trivial" ? classes.trivial : ""
          }`}
        >
          {todo.priority}
        </span>
      </div>
      <div className={classes.todoright}>
        <div onClick={() => updateTodo(todo)}>
          <img src={require("../../assets/edit.png")} alt="" />
        </div>
        <div onClick={() => removeTodo(todo)}>
          <img src={require("../../assets/delete.png")} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Todo;
