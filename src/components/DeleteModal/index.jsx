import React from "react";
import classes from "./style.module.scss";

function DeleteModal(props) {
  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
      <img src={require("../../assets/danger.png")} alt="" />
        <h1>{props.title}</h1>
        <div className={classes.buttons}>
          <button onClick={props.onClose}>Cancel</button>
          <button onClick={props.onApprove}>Approve</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
