import './App.css';
import { useState } from 'react';
import SearcInput from './components/SearchInput';
import List from './components/List';
import useDebounce from './hooks/useDebounce';


function App() {
  const [searchValue,setSearchValue] = useState();
  const debouncedSearchValue = useDebounce(searchValue,1000);
  return (
    <>
    <SearcInput
    searchValue={searchValue}
    setSearchValue={setSearchValue}
     />
     <List searchTerm={debouncedSearchValue} />
    </>
  );
}

export default App;
