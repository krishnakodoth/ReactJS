import React, { Dispatch, SetStateAction } from 'react';
import classes from './todos.module.css';

type paginationProps = {
  totalPages:number;
  currentPage:number;
  paginate:Dispatch<SetStateAction<number>>
}

const Pagination = ({totalPages,currentPage,paginate}:paginationProps) => {
  const pages = Array.from({length: totalPages}, (_, i) => i + 1);
  return (
    <div className={classes.pagination}>
      <ul>
        {
          pages.map(page=>(
            <li key={`page-no-${page}`} className={`${page === currentPage ? classes.activePaginationLink:''}`} onClick={()=>paginate(page)}>{page}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Pagination