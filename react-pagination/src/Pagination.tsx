import React, { useState } from 'react';

interface PaginationProps {
    totalCount: number;
    perPage: number;
    currentPage: number
    pageClick: (page: number) => void;
}


const arrayRange = (start:number, stop:number, step:number) =>
    Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
    );

const Pagination = (props: PaginationProps) => {
    const { totalCount, perPage, currentPage, pageClick } = props;
    const totalPages = Math.ceil(totalCount / perPage);

    

    const [pages,setPages] = useState(arrayRange(1,totalPages > 10 ? 10 : totalPages,1));

    const handlePrevClick = (currentPage: number) => {
        pageClick(currentPage - 1);
    }
    const handleNextClick = (currentPage: number) => {
        pageClick(currentPage + 1);
    }
    const handlePageClick = (currentPage: number) => {
        /* const midIndex = (pages.length) / 2;
        if(currentPage > pages[midIndex-1]){
            const prevPages = [...pages];
            setPages(arrayRange(midIndex-1,perPage+5,1))
        } */
        pageClick(currentPage);
    }

    return (
        <div className="pagination">
            <button onClick={() => handlePrevClick(currentPage)} disabled={currentPage === 1}>Prev</button>
            {
                pages.map((pageNum) => (
                    <button className={currentPage === pageNum ? 'active' : ''} key={`page-${pageNum}`} onClick={() => handlePageClick(pageNum)}>{pageNum}</button>
                ))
            }

            {totalPages > 10 &&
                <button className="placeholder"> ... </button>
            }
            <button onClick={() => handleNextClick(currentPage)} disabled={currentPage === totalPages}>Next</button>
        </div>
    )
}

export default Pagination;