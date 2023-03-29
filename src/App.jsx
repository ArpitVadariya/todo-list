import React, { useState } from "react";
import ToDoLists from "./ToDoLists";

function App() {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listofItems = () => {
    if (inputList === "") {
      console.log("pass");
    } else {
      setItems((oldItems) => {
        return [...oldItems, inputList];
      });
      setInputList("");
    }
  };

  const deleteItem = (id) => {
    console.log("deleted");

    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>Todo List</h1>
          <br />
          <input
            type="text"
            placeholder="add Item"
            onChange={itemEvent}
            value={inputList}
          />
          <button className="newBtn" onClick={listofItems}>
            {" "}
            +{" "}
          </button>
          <ol>
            {/* <li>{inputList}</li> */}
            {Items.map((itemval, index) => {
              // return <li> {itemval} </li>;
              return (
                <ToDoLists
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
