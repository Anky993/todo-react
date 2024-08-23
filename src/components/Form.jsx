import { FaPlus } from "react-icons/fa";
import { useContext, useState } from "react";
import ToDoContext from "../context/ToDoContext";

function Form() {

  const { addToList } = useContext(ToDoContext);

  const [task, setTask] = useState("");

  const changeHandle = (e) => {
    const text = e.target.value;
    if (text.trim().length < 5) {
      console.log("Please write at least 5 characters");
    }
    setTask(text);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) {
      console.log("Please write something");
      return;
    }
    addToList(task);
    setTask("");
  }
  return (
    <div className="col-10 col-md-8 mx-auto">
      <form onSubmit={onSubmit} className="d-flex">
        <input type="text" value={task} onChange={changeHandle} placeholder="Add a new task" className="input col" />
        <button type="submit" className="submit-btn ms-2">
          <FaPlus />
        </button>
      </form>
    </div>
  );
}

export default Form;
