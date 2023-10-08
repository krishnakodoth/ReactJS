import React, { useState } from 'react';
import './App.css';
import Pagination from './Pagination';

function App() {
  const [currentPage,setCurrentPage] = useState(1);

  const handlePageNumber = (userSelectedPage: number) => {
    setCurrentPage(userSelectedPage)
  };

  return (
    <div className="App">
      <header className="App-header">
        Pagination
      </header>
      <div className="content-wraper">
      content-wraper
      </div>
      <Pagination 
        totalCount={58}
        perPage={10} 
        currentPage={currentPage}
        pageClick={(pageNumber) => {
          handlePageNumber(pageNumber);
        }}
        />
    </div>
  );
}

export default App;
