import React, { useState } from "react";
import DropDown from "../Dropdown";
import classes from "./style.module.scss";

function EditModal(props) {
  const [selectedEdit, setSelectedEdit] = useState(props.editTodo.priority);

  const save = () => {
    const todo = { ...props.editTodo, priority: selectedEdit };

    props.onApprove(todo);
    props.onClose();
  };

  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        <div>
          <h1>Job Edit</h1>
          <div className={classes.jobnamearea}>
            <label>Job Name</label>
            <div className={classes.dropdown}>{props.editTodo.name}</div>
          </div>

          <div className={classes.jobpriorityarea}>
            <label>Job Priority</label>
            <DropDown
              setSelectedEdit={setSelectedEdit}
              selectedEdit={selectedEdit}
            />
          </div>
          <div className={classes.buttons}>
            <button onClick={props.onClose}>Cancel</button>
            <button onClick={save}>Approve</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
