import React, { useState } from "react";
import "./TodoApp.css";
import { FaClosedCaptioning, FaTrash } from "react-icons/fa";

function TodoApp() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const changeStatus = (isChecked, index) => {
    const newItems = [...items];
    newItems[index].isDone = isChecked;
    setItems(newItems);
  };

  const storeItems = (event) => {
    event.preventDefault();
    if (input) {
      setItems([...items, { text: input, isDone: false }]);
      setInput("");
    }
  };
  const deleteTodo = (todoToBeDeleted) => {
<<<<<<< HEAD
    setItems(items.filter((data, index) => index !== todoToBeDeleted));
=======
    setItems(items.filter((data, index) => index !== todoToBedeleted));
>>>>>>> f82493d822a7127e43c84a4b09939a50fedcabbb
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
<<<<<<< HEAD
            <div class="wrap">
              <div class="blocks">
                <input
                  onChange={(e) => {
                    changeStatus(e.target.checked, index);
                  }}
                  type="checkbox"
                />
                <span className="data-section">{data.text}</span>

                <FaTrash
                  className="trash-icon"
                  onClick={() => deleteTodo(index)}
                />
              </div>
              <div
                class="completed-blocks"
                style={{ display: data.isDone ? "block" : "none" }}
              >
                <button key={index} className="completed">
                  Completed
                </button>
              </div>
            </div>
=======
            <input type="checkbox" />{" "}
            <span className="data-section">{data}</span>
            <FaTrash
              className="trash-icon"
              onClick={() => deleteTodo(index)}
            />
>>>>>>> f82493d822a7127e43c84a4b09939a50fedcabbb
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
