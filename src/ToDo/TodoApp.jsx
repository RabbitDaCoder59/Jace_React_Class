import { useEffect, useState } from "react";
import "./todo.css";
import { BsSearch } from "react-icons/bs";

const TodoApp = () => {
  // useState
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const handleChangeInput = (e) => {
    setTodoInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // create a new todo object

    // check if the input is empty
    if (!todoInput.trim()) {
      alert("Please Enter a message");
      return;
    }
    setTodoInput("");
    const todoOBJ = {
      id: Date.now().toString(),
      content: todoInput,
      isComplete: false,
      date: new Date(),
    };
    // add the new todo to the todos array
    setTodos((prev) => [...prev, todoOBJ]);
  };
  // useRef

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="Container">
      <h1 className="Title">My Todo APP</h1>

      <div className="inputCon">
        <form onSubmit={handleSubmit}>
          <input
            className="formControl"
            value={todoInput}
            type="text"
            onChange={handleChangeInput}
            placeholder="Add Task...."
          />
          <button className="formBtn">Add Item</button>
        </form>
        <BsSearch className="icon" />
      </div>

      <div className="cardContainer">
        <div className="card">
          <div className="task-row edit">
            <input value="" type="text" className="edit-input" />
            <div className="options">
              <button className="optionBtn green"></button>
              <button className="optionBtn red"></button>
            </div>
          </div>

          <div className="task-row preview">
            <p className="text"></p>
            <div className="options">
              <button className="optionBtn blue"></button>
              <button className="optionBtn red"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
