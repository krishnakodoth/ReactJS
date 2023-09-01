import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import styles from "../styles/modules/app.module.scss";
import TodoItem from "./TodoItem";
import { RootState } from "../app/store";

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function AppContent() {
  const todoList = useSelector((state: RootState) => state.todo.todoList);
  const filterStatus = useSelector(
    (state: RootState) => state.todo.filterStatus
  );

  const sortedTodoList = [...todoList];
  sortedTodoList.sort(
    (a, b) => new Date(b.time).valueOf() - new Date(a.time).valueOf()
  );

  const filteredTodoList = sortedTodoList.filter((item) => {
    if (filterStatus === "all") {
      return true;
    }
    return item.status === filterStatus;
  });

  return (
    <motion.div
      className={styles.content__wrapper}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>
        {filteredTodoList && filteredTodoList.length > 0 ? (
          filteredTodoList.map((todo) => (
            // <motion.div key={todo.id} variants={child}>
            <TodoItem key={todo.id} todo={todo} />
            // </motion.div>
          ))
        ) : (
          <motion.p variants={child} className={styles.emptyText}>
            No Todos
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default AppContent;
