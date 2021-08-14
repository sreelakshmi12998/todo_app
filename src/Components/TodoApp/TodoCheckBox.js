import React, { useState } from "react";
import "./TodoApp.css";
import { FaTrash } from "react-icons/fa";

function TodoApp() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [check, setCheck] = useState(false);
  const [strike, setStrike] = useState("none");

  const handleChange = (event) => {
    setInput(event.target.value);
  };
  const storeItems = (event) => {
    event.preventDefault();
    if (input) {
      setItems([...items, input]);
      setInput("");
    }
  };
  const deleteTodo = (todoToBeDeleted) => {
    setItems(items.filter((data, index) => index !== todoToBeDeleted));
  };
  const onCheck = (item) => {
    setCheck({ check: !check });
    if (strike === "none") {
      setStrike({ strike: "line-through" });
    } else {
      setStrike({ strike: "none" });
    }
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
            <input
              className="checkbox-section"
              type="checkbox"
              checked={check}
              onChange={() => onCheck(items)}
            />
            <span className="data-section">{data}</span>

            <FaTrash className="trash-icon" onClick={() => deleteTodo(index)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
