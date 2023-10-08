import classes from './todos.module.css';
import Todos from '../../../components/todos/Todos';

async function getTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Page() {
  const data = await getTodos();
  return(
    <div className={classes.todoWrapper}>
      <Todos todos={data} />
    </div>
  );
}
