import React, { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [showChild, toggleChildShow] = useState(true);
  return (
    <>
      <h2> Parent Component </h2>
      {
        showChild &&
        <div style={{ border: 'solid 1px', margin: '10px', padding: '10px' }}>
          <CompExample />
        </div>
      }
      <hr />
      <button onClick={() => toggleChildShow(!showChild)}>Toggle Child Component</button>
    </>
  )
}
const CompExample = () => {
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    console.log("componenDidMount");
  }, []);

  useEffect(() => {
    console.log("On counter Change");
  }, [counter]);

  useEffect(() => {
    console.log("componentDidUpdate");
  });

  useEffect(() => {
    return () => { console.log("componentWillUnmount"); }
  }, []);

  return (
    <>      
      <h1> React Hooks - CompExample</h1>
      <h2>Count : {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </>
  );
}
export default App;
