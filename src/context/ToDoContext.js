import { v4 as uuidv4 } from "uuid";

import { createContext, useEffect, useState } from "react";

const ToDoContext = createContext();

const apiUrl = process.env.REACT_APP_API_URL

export const ToDoProvider = ({ children }) => {
  useEffect(() => {
    fetchList();
  }, []);

  const [list, setList] = useState([]);

  // fetch list from server
  const fetchList = async () => {
    console.log('apiUrl : ', apiUrl)
    const response = await fetch(`${apiUrl}/todoList`);
    const data = await response.json();
    setList(data);
  };

  // completeTask function
  const completeTask = async (id) => {
    const response = await fetch(`${apiUrl}/todoList/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ done: true }),
    })

    const updatedItem = await response.json();
    console.log(updatedItem);
    setList(list.map((item) => item.id === id ? { ...item, ...updatedItem} : item));
  };

  const deleteTask = async (id) => {
    const response = await fetch(`${apiUrl}/todoList/${id}`, {
      method: "DELETE",
    });
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
  };
  
  // addToList function
  const addToList = async (item) => {
    const response = await fetch(`${apiUrl}/todoList`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: item, done: false }),
    });
    const newItem = await response.json();
    setList([newItem, ...list]);
  };

  return (
    <ToDoContext.Provider value={{ list, completeTask, deleteTask, addToList }}>
      {children}
    </ToDoContext.Provider>
  );
};

export default ToDoContext;
