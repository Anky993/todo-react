import { useContext } from "react";
import ToDoContext from "../context/ToDoContext";
import ToDoItem from "./ToDoItem"

const ToDoDoneList = () => {
  const { list } = useContext(ToDoContext);
  return (
    <div className="col-10 col-sm-8 mx-auto">
        {list.some(taks => taks.done) &&  <h2>Done</h2>}
        {list.map((item) => (
          item.done && <ToDoItem key={item.id} id={item.id} title={item.title} done={item.done} />
        ))}
    </div>
  )
}

export default ToDoDoneList
