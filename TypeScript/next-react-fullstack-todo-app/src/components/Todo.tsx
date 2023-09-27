import React, { useState } from "react";
import classes from "../styles/Todo.module.css";
import PageTitle from "./PageTitle";
import ListTodos from "./ListTodos";
import { Toaster } from "react-hot-toast";
import ActionBar from "./ActionBar";
import Modal from "./UI/Modal";
import AddTodo from "./AddTodo";

const Todo = () => {
  const [filter, setFilter] = useState("All");
  const [addNewItem, setAddNewItem] = useState(false);
  const onCloseHander = () => {
    setAddNewItem(false);
  };
  return (
    <>
      <div className={classes.todo_wraper}>
        <PageTitle title="Todo App (NEXTJS)" />
        <ListTodos filterState={filter} />
        <ActionBar onFilterChange={setFilter} onAddNewItem={setAddNewItem} />
        {addNewItem && <AddTodo onClose={onCloseHander} />}
      </div>
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </>
  );
};

export default Todo;
