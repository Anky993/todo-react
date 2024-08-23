import { FaCheck } from "react-icons/fa";
import Card from "../shared/Card";
import { MdOutlineDelete } from "react-icons/md";
import { useContext } from "react";
import ToDoContext from "../context/ToDoContext";

function ToDoItem({ id, title, done }) {

  const { completeTask, deleteTask } = useContext(ToDoContext);

  return (
    <Card>
      <div key={id} className={`todo-list d-flex align-items-center justify-content-between ${done && "completed"}`}>
        <div className="title text-start text-break">{title}</div>

        {!done && <div className="action-btn d-flex col-3 col-lg-2 justify-content-around">
          <button type="button" className="check btn" onClick={() => completeTask(id)} >
            <FaCheck />
          </button>
          <button type="button" className="delete btn" onClick={() => deleteTask(id)}>
            <MdOutlineDelete />
          </button>
        </div>}
      </div>
    </Card>
  );
}

export default ToDoItem;
