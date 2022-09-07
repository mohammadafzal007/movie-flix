import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import '../App.css';
import Loading from './Loading';
import {Link} from 'react-router-dom';
const SMovie = () => {
    // const {movies}=useContext(AppContext);
    const{imdbID}=useParams();
// const[loading,setLoading]=useState(true);
const [movie,setMovie]=useState([]);


const getmovies=async ()=>{
//   setLoading(true);
    const res= await fetch(`http://www.omdbapi.com/?apikey=fa79736a&i=${imdbID}&type=movie`);
    const data= await res.json();
    console.log(data);
    setMovie(data);
    // setLoading(false);
}
useEffect(()=>{
    let time=setTimeout(
        getmovies(),1000

    )
    return ()=>clearTimeout(time);
},[movie])
const {Title,Poster,Year,Released,Rated,Genre,Language}=movie;
  return (
    
    <>
  {/* <Loading/> */}
    <div className="smovie">
        <div className='detail'>
            <div className="poster">

        <img src={Poster}/>
            </div>
        <div className="info">

        <h1 style={{textDecoration:"underline"}}>{Title}</h1>
        <h1>Year: {Year}</h1>
        <h1>Released On: {Released}</h1>
        <h1>Rating : {Rated}</h1>
        <h1>Genre :{Genre}</h1>
        <h1>Language :{Language}</h1>
        {/* {imdbID} */}
        </div>
        </div>

        </div>
        <Link to="/home">

        <button id="Goback" type="button">Go Back</button>
        </Link>
        </>
  )
}

export default SMovie;