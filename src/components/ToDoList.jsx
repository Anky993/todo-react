import { motion, AnimatePresence } from "framer-motion";

import ToDoItem from "./ToDoItem"
import { useContext } from "react";
import ToDoContext from "../context/ToDoContext";

const ToDoList = () => {
  const { list } = useContext(ToDoContext);
  console.log('dasd', list)
  return (
    <div className="to-do-list done col-10 col-md-8 mx-auto">
        {list.some(taks => !taks.done) &&  <h2>New</h2>}

        <AnimatePresence>
        {list.map((item) => (
          !item.done && 
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
          <ToDoItem
            key={item.id}
            id={item.id}
            title={item.title} 
          />
          </motion.div>
        ))}
        </AnimatePresence>
    </div>
  )
}

export default ToDoList
