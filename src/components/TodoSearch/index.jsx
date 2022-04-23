import React from "react";
import classes from "./style.module.scss";

function TodoSearch(props) {
  return (
    <div className={classes.searcharea}>
       <img src={require("../../assets/search.png")} alt="" />
      <input type="text" className={classes.searchinput} value={props.searchText} placeholder="Search according to Priority or Job Name" onChange={(e) => props.setSearchText(e.target.value)} />
    </div>
  );
}

export default TodoSearch;
