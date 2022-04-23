import React, { useState } from "react";
import { useTodoContext } from "../../Context";
import classes from "./style.module.scss";

function DropDown({ setSelected, selected, selectedEdit, setSelectedEdit }) {
  const [dropdown, setDropdown] = useState(false);
  const { priorities } = useTodoContext();

  return (
    <div className={classes.jobdrop}>
      <div className={classes.dropdown} onClick={() => setDropdown(!dropdown)}>
        {selected?.name || selectedEdit || "Choose one"}
      </div>
      {!selectedEdit && dropdown && (
        <div className={classes.dropdownopen}>
          {priorities.map((priority, index) => (
            <div
              className={`${
                priority.name === selected?.name ? classes.active : ""
              }`}
              key={index}
              onClick={() => {
                setSelected(priority);
                setDropdown(false);
              }}
            >
              {priority.name}
            </div>
          ))}
        </div>
      )}
      {selectedEdit && dropdown && (
        <div className={classes.dropdownopen}>
          {priorities.map((priority, index) => (
            <div
              className={`${
                priority.name === selectedEdit ? classes.active : ""
              }`}
              key={index}
              onClick={() => {
                setSelectedEdit(priority.name);
                setDropdown(false);
              }}
            >
              {priority.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropDown;
