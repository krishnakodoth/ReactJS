import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { Todos } from "../shared/Types";
import classes from "../styles/Todo.module.css";
import { toast } from "react-hot-toast";

const fetchTodos = async () => {
  return fetch(`api/todo`)
    .then((res) => res.json())
    .then((data) => data);
};
const ListTodos = ({ filterState }: { filterState: string }) => {
  const [todos, setTodos] = useState<Todos[]>([]);
  const [storedTodos, setStoredTodos] = useState<Todos[]>([]);
  useEffect(() => {
    fetchTodos().then((data) => {
      setStoredTodos(data);
      setTodos(data);
    });
  }, []);

  useEffect(() => {
    let updatedTodos = [...storedTodos];
    if (filterState === "Completed") {
      updatedTodos = updatedTodos.filter((todo) => todo.completed);
    }
    if (filterState === "Incompleted") {
      updatedTodos = updatedTodos.filter((todo) => !todo.completed);
    }
    setTodos(updatedTodos);
  }, [filterState]);

  const removeTodoItemFromList = (id: string) => {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);
    fetch(`api/todo/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((response) => {
        setTodos(updatedTodos);
        toast.success("Todo has been deleted !");
      });
  };

  return (
    <div className={classes.todoList}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={removeTodoItemFromList}
        />
      ))}
    </div>
  );
};

export default ListTodos;
