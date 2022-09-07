import React,{useContext}from 'react';
import { AppContext } from '../App';
import "../App.css";

const Pagination = () => {
    const {page,prev,next,totalPages}=useContext(AppContext);

  

  return (
    <div className="pagination">
        <button disabled={page<=1} onClick={()=>prev()}>Prev</button>
        <span> {page} of   {totalPages}</span>
        <button disabled={page>=totalPages} onClick={()=>next()}>Next</button>
    </div>
  )
}

export default Pagination;