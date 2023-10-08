"use client"
import React, { useState } from 'react';
import TodoList from "./TodoList";
import Pagination from './Pagination';
type toDoProps = {
  userId:string
  id: string;
  title: string;
  completed: boolean;
}

const Todos = ({todos}:{todos:toDoProps[]}) => {
  
  const [currentPage,setCurrentPage] = useState(1);
  let todosCopy = [...todos];
  // Pagination
  const perPage = 10;
  const numberOfRecords = todosCopy.length;
  const pages = Math.ceil(numberOfRecords/perPage);
  
  const startIndex = (currentPage*10) - perPage;
  const endIndex = startIndex + perPage
  todosCopy = todosCopy.slice(startIndex,endIndex);

  const todoItems: React.ReactElement[] = todosCopy.map((todo) => (
    <TodoList key={todo.id} todo={todo} />
  ));
  
  return (
    <>
      <h1>Todos</h1>
      <div>
        {todoItems}
      </div>
      <Pagination paginate={setCurrentPage} totalPages={pages} currentPage={currentPage} />
    </>
  )
}

export default Todos