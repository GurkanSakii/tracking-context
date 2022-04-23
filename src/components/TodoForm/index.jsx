import React, { useState, useRef } from "react";
import { useTodoContext } from "../../Context";
import DropDown from "../Dropdown";
import classes from "./style.module.scss";

function TodoForm() {
  const [name, setName] = useState("");
  const [selected, setSelected] = useState(undefined);

  const { addTodo } = useTodoContext();

  const inputRef = useRef(null);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selected) {
      return false;
    }

    addTodo({
      id: Math.floor(Math.random() * 10000),
      name: name,
      priority: selected.name,
    });

    setName("");
    setSelected(undefined);
  };

  return (
    <>
      <div className={classes.formarea}>
        <h1>Create New Job</h1>
        <form onSubmit={handleSubmit} className={classes.todoform}>
          <div className={classes.namearea}>
            <label>Job Name</label>
            <input
              value={name}
              onChange={handleName}
              name="text"
              className={classes.todoinput}
              ref={inputRef}
            />
          </div>
          <div className={classes.priorityarea}>
            <div className={classes.prioritycontent}>
              <label>Job Priority</label>
              {<DropDown setSelected={setSelected} selected={selected} />}
            </div>
            <button className={classes.todobutton}>
              <img src={require("../../assets/plus.png")} alt="" />
              <span>Create</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default TodoForm;
