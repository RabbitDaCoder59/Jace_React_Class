import { useEffect, useState } from "react";

const JaceTodo = () => {
  // useState
  // useRef
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [change, setChange] = useState();

  const handleChangeInput = (e) => {
    setTodoInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todoInput.trim()) {
      alert("Please enter a todo item");
      return;
    }

    // Create a new todo object
    const todoObj = {
      id: Date.now().toString(),
      content: todoInput,
      isCompleted: false,
      date: new Date(),
    };

    setTodos((prevTodos) => [...prevTodos, todoObj]);

    // Set the todoInput to empty string
    setTodoInput("");
  };

  // Update todo
  const handleUpdate = () => {
    // Get Index
    const todoIndex = todos.findIndex((todo) => todo.id === change?.id);

    const prevTodos = [...todos];
    // 1st Method
    // prevTodos[todoIndex] = change
    // setTodos(prevTodos)

    // 2nd Method
    prevTodos.splice(todoIndex, 1, change);
    setTodos(prevTodos);

    // Reset the change state
    setChange(null);
  };

  // Delete todo
  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    console.log(change);
  }, [change]);

  return (
    <div>
      <h2>Todo APP</h2>

      <form onSubmit={handleSubmit}>
        <input value={todoInput} type="text" onChange={handleChangeInput} />
        <button>Add Item</button>
      </form>

      <div>
        {/* 
          [ 
            { id, content, isCompleted, date },
            { id, content, isCompleted, date },
            { id, content, isCompleted, date },
          ] 
        */}
        {todos.length ? (
          todos.map((todo) => (
            <>
              {change && change?.id === todo.id ? (
                <div>
                  <input
                    value={change.content}
                    onChange={(e) =>
                      setChange((prev) => {
                        console.log("PREV => ", prev);
                        return { ...prev, content: e.target.value };
                      })
                    }
                  />
                  <button onClick={() => setChange(null)}>Cancel</button>
                  <button onClick={handleUpdate}>Save</button>
                </div>
              ) : (
                <div>
                  <p>{todo.content}</p>
                  <button onClick={() => setChange(todo)}>Edit</button>
                  <button onClick={() => handleDelete(todo.id)}>Delete</button>
                </div>
              )}
            </>
          ))
        ) : (
          <p>No todo found.</p>
        )}
      </div>
    </div>
  );
};

export default JaceTodo;
