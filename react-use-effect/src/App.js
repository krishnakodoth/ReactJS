import { useState,useEffect } from 'react';
import './App.css';
import { useFetch } from './useFetch';

const useStopWatch = () => {
  const [count,setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(()=>{
      console.log(`count: ${count}`)
      // setCount(count+1);
      setCount((prevCount)=>prevCount+1);
    },1000);

    return () => clearInterval(interval);
  }, []);

  return count;
}


function App() {
  const [url, setUrl] = useState(null);

const count = useStopWatch();

  console.log("App is rendering..")



  /* const { data } = useFetch({
    url
  }) 
  // { url } - New object ref is sending on each time
  // So useEffect dependency array dep compare will fail
  // and end up with infinet loop
  */

  /* const myOption = useMemo(()=>({url}),[url]) */
  
  const { data } = useFetch({
    url,
    onSuccess: () => console.log("Success")
  })

  return (
    <div className="App">
      <div>Hello</div>
      <div>Count: {count}</div>
      <div>{JSON.stringify(data)}</div>
      <div>
        <button onClick={()=>setUrl('/krishna.json')}>Krishna</button>
        <button onClick={()=>setUrl('/prasad.json')}>Prasad</button>
        
      </div>
    </div>
  );
}

export default App;
