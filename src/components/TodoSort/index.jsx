import React, {useState} from "react";
import classes from "./style.module.scss";

function TodoSort({sortType, setSortType}) {

  const [dropdown, setDropdown] = useState(false);
  const priorities = ["Priority (all)", "Name"];

  return (
    <div className={classes.sortarea}>
      <div className={classes.dropdown} onClick={() => setDropdown(!dropdown)}>
      {sortType}
      </div>
      {dropdown && (
        <div className={classes.dropdownopen}>
          {priorities.map((priority, index) => (
            <div
            className={`${
              priority === sortType ? classes.active : ""
            }`}
              key={index}
              onClick={() => {
                setSortType(priority);
                setDropdown(false);
              }}
            >
              {priority}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TodoSort;
