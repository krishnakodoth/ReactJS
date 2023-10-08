import React from 'react';
import styles from '@/styles/Todo.module.css'

type todoProp = {
  userId: string;
  id:number;
  title: string;
  completed: boolean;
}
type todosProps = todoProp[];
const ListOfTodos = ({todos}:{todos:todosProps}) => {
  
  const todoItems : React.ReactElement[] = todos.map(todo=> <li key={todo.id}>{todo.title}</li>)
  return (
    <div className={styles.main}>
      <h2>Todo List</h2>
      <ul>
        {todoItems}
      </ul>
    </div>
  )
}

export default ListOfTodos;

export async function getServerSideProps(){
  const response = await fetch('http://localhost:4000/todos');
  const data = await response.json();
  return {
    props:{
      todos:data
    }
  }
}