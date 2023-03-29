import React from "react";

const ToDoLists = (props) => {
  return (
    <>
      <div className="todo_style">
        <button
          className="deleteIcon"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          X
        </button>
        <li> {props.text} </li>
      </div>
    </>
  );
};

export default ToDoLists;
