import React from "react";
import { Todos } from "../shared/Types";
import Card from "./UI/Card";
import classes from "../styles/TodoItem.module.css";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import Button from "./UI/Button";
import { toast } from "react-hot-toast";

const TodoItem = ({
  todo,
  onDeleteTodo,
}: {
  todo: Todos;
  onDeleteTodo: (id: string) => void;
}) => {
  const handleEditClick = (id: string) => {
    toast.success("Some success message " + id);
  };
  return (
    <Card>
      <span className={classes.totItem}>
        <p>{todo.title}</p>
        <div className={classes.right}>
          <Button
            styles={["circle", "primary"]}
            onClick={() => handleEditClick(todo.id)}
          >
            <FaPencilAlt />
          </Button>
          <Button
            styles={["circle", "red"]}
            onClick={() => onDeleteTodo(todo.id)}
          >
            <FaTrashAlt />
          </Button>
        </div>
      </span>
    </Card>
  );
};

export default TodoItem;
