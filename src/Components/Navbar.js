import React,{useContext,useRef} from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../App';
const Navbar = () => {
  const {setQuery,query,setPage}=useContext(AppContext);
  // const name=useRef();
  return (
    <>
    <div className="nav">
      <h1 className="logo">
        Movie-Flix
      </h1>
    
      <form  action="#" onSubmit={(e)=>
        e.preventDefault()}>
      <div className="search">
      <input type="search" placeholder="Search Here" autoComplete="off"  onChange={(e)=> {
        e.preventDefault(); 
        setQuery(e.target.value); setPage(1)}} />
      {/* <label onClick={(e)=>{
        e.preventDefault(); 
        setQuery(e.currentTarget.value);
        }}><i className="fa-solid fa-magnifying-glass"></i></label> */}
      </div>
      </form>
    </div>
    
    </>
  )
}

export default Navbar