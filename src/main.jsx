import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import List from "./homework/children/List.jsx";
import Todo from "./ToDo/TodoApp.jsx";
import LessonThree from "./Lesson3/LessonThree.jsx";
import JaceTodo from "./JaceTodo/JaceTodo.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <App /> */}
    {/* <TodoApp /> */}
    <JaceTodo />
    {/* <LessonThree /> */}
    {/* <List /> */}
  </>
);
