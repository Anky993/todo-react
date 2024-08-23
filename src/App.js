import toDoData from "./data/todoList";
import { useEffect, useState } from "react";
import "./App.css";
import ToDoDoneList from "./components/ToDoDoneList";
import ToDoList from "./components/ToDoList";
import Form from "./components/Form";
import { ToDoProvider } from "./context/ToDoContext";

function App() {
  return (
    <ToDoProvider>
      <div className="App col-sm-8 mx-auto">
        <h1> ToDo App </h1>

        <Form />
        <ToDoList />
        <ToDoDoneList />
      </div>
    </ToDoProvider>
  );
}

export default App;
