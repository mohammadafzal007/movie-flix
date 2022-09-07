import React, { useContext } from 'react';
import { AppContext } from '../App';
import {Link} from 'react-router-dom';


const MovieDetail = (props) => {
  const{Title,Poster,imdbID}=props.item;
  // console.log(props.item);
    return (
    <>
    <Link to={`/movie/${imdbID}`} key={imdbID}>
    
    <div className="card" key={imdbID}>
      <div className="img_box">
        <img src={(Poster==='N/A')?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwjYtmaFK4pyechNfE4S3iw1r1R6isxP7e1Q&usqp=CAU":Poster} />
      </div>
        <h1>{Title}</h1>
    </div>
    </Link>
       
    {/* </div> */}
    </>
  )
}

export default MovieDetail;