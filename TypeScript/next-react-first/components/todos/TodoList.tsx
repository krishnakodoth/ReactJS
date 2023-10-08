import React from 'react';
import classes from './todos.module.css';

type toDoProps = {
  userId:string
  id: string;
  title: string;
  completed: boolean;
}

const TodoList = ({todo}:{todo:toDoProps}) => {
  return (
    <div className={classes.todoList}>
      {todo.title}
    </div>
  )
}

export default TodoList