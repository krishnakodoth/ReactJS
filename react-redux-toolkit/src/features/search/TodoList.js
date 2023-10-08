import React, { useEffect, useState } from 'react';


const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [term, setTerm] = useState("");
    useEffect(() => {
        const fetchTodos = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/todos")
            const json = await res.json();
            setTodos(json);
            console.log(json)
        }
        fetchTodos();
    }, []);

    /* const renderUsers = users.map(user => {
        return (<div key={user.id}>
            <p><strong>{user.name}</strong></p>
        </div>);
    }) */

    let filteredTodos = todos.slice(0,10).filter(({ title })=> {
        return title.toLowerCase().indexOf(term.toLowerCase()) >= 0;
    })
    .map(todo => {
        return (<div key={todo.id}>
            <p><strong>{todo.title}</strong></p>
        </div>);
    });
return (
    <div className="">
        <h1>Todo List</h1>
        <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
        {filteredTodos}
    </div>
)
}

export default TodoList;
