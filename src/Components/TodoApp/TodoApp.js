import React, { useState } from "react";
import "./TodoApp.css";
import { FaTrash } from "react-icons/fa";

function TodoApp() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };
  const storeItems = (event) => {
    event.preventDefault();
    if (input !== "") {
      setItems([...items, input]);
      setInput("");
    }
  };
  const deleteItems = (key) => {
    setItems(items.filter((data, index) => index !== key));
  };

  return (
    <div className="container">
      <form className="input-section" onSubmit={storeItems}>
        <h1> Todolist Application</h1>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Enter item"
        />
      </form>

      <ul>
        {items.map((data, index) => (
          <li key={index}>
            <input type="checkbox" />{" "}
            <span className="data-section">{data}</span>
            <FaTrash
              className="trash-icon"
              onClick={() => deleteItems(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
