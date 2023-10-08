import React, { useState } from 'react';
import './App.css';

export default function App() {
  const tasks = ['One', 'Two', 'Three'];
  const initialStringArray : string[] = [];

  const [toDo, setToDo] = useState(tasks);
  const [done, setDone] = useState(initialStringArray);
  const [toDoPrev, setToDoPrev] = useState(initialStringArray);
  const [donePrev, setDonePrev] = useState(initialStringArray);

  const handleDragOver = (event:any) => {
    event.preventDefault();
  };

  const handleDragStart = (task:string) => {
    return (event:any) => event.dataTransfer.setData('id', task);
  };

  const handleDoneDrop = (event:any) => {
    const data = event.dataTransfer.getData('id');
    // Take a copy toDo
    const todoCopy = [...toDo];
    const doneCopy = [...done];
    // Set previous state
    setToDoPrev((previous) => [...previous, JSON.stringify(todoCopy)]);
    setDonePrev((previous) => [...previous, JSON.stringify(doneCopy)]);
    setToDo((previous) => previous.filter((task) => task !== data));
    setDone((previous) => [...previous, data]);
  };

  const handleToDoDrop = (event:any) => {
    const data = event.dataTransfer.getData('id');
    setDone((previous) => previous.filter((task) => task !== data));
    setToDo((previous) => [...previous, data]);
  };


  const resetState = () => {
    const copyToDoPrev = [...toDoPrev];
    const prevTodo = JSON.parse(copyToDoPrev.splice(-1)[0]);
    setToDo(prevTodo);
    setToDoPrev(copyToDoPrev);

    const copyDonePrev = [...donePrev];
    const prevDone = JSON.parse(copyDonePrev.splice(-1)[0]);
    setDone(prevDone);
    setDonePrev(copyDonePrev);
  };
  return (
    <>
    <div className="list-card">
      <div
        className="card list-card-todo"
        onDragOver={handleDragOver}
        onDrop={handleToDoDrop}
      >
        <b>Todo</b>
        <div className="task-list">
          {toDo.map((task) => (
            <div className="task" draggable onDragStart={handleDragStart(task)}>
              {task}
            </div>
          ))}
        </div>
      </div>
      <div
        className="card list-card-done"
        onDragOver={handleDragOver}
        onDrop={handleDoneDrop}
      >
        <b>Done</b>
        <div className="task-list">
          {done.map((task) => (
            <div className="task" draggable onDragStart={handleDragStart(task)}>
              {task}
            </div>
          ))}
        </div>
      </div>
      <div>
        <button disabled={done.length===0} onClick={resetState}>Undo</button>
      </div>      
    </div>
    </>
  );
}