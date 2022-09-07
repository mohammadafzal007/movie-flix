import React,{useContext} from 'react';
import { AppContext } from '../App';
import MovieDetail from './MovieDetail';
import '../App.css';


const Movies = () => {
    const {movies}=useContext(AppContext);
    // console.log(movies);
  return (
    // console.log(movies);
    <div className="container">

    <>
{movies.map((item)=>{
    return (
        <>

  <MovieDetail item={item} />
    </>
    )
})}

    </>
        </div>
  )
}

export default Movies;