import './App.css';
import Navbar from './Components/Navbar';
import Movies from './Components/Movies';
import React ,{createContext,useEffect,useState}from 'react';
import Pagination from './Components/Pagination';
import Loading from './Components/Loading';
import Error  from './Components/Error';
import SMovie from './Components/SMovie';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

const AppContext=createContext();

const App=()=> {
  const [movies,setMovies]=useState([]);
  const[query,setQuery]=useState("Avengers");
const [page,setPage]=useState(1);
const[totalPages,setTotalPages]=useState(5);
const[loading,setLoading]=useState(true);
const[error,setError]=useState(false);


const getmovies=async ()=>{
  setLoading(true);
    const res= await fetch(`http://www.omdbapi.com/?apikey=fa79736a&s=${query}&type=movie&page=${page}`);
    const data= await res.json();
    console.log(data);
    // if(query===""){
    //   setQuery(
    //     "AVENGERS"
    //   );

    // }
    if(data.Response==="True")
    {
      setLoading(false);
    setMovies(data.Search);
    setError(false);

    }
    else{
    
      setLoading(false);
      setError(true);
      

    }
    

    setTotalPages(Math.ceil(data.totalResults/data.Search.length))
    // setPage(1);
  }

  const next=()=>{
    setPage(page+1);
    window.scroll({
      top: 0,
      left: 100,
      behavior: 'smooth'
    });
    console.log(page);
}

const prev=()=>{
  window.scroll({
    top: 0,
    left: 100,
    behavior: 'smooth'
  });
setPage(page-1);
}

useEffect(()=>{
let timeout=setTimeout(() => {
  getmovies();
  console.log(query);
}, 500);
return ()=>clearTimeout(timeout);
// getmovies();

},[query,page])
  return(
    <>
    
    <AppContext.Provider value={{movies,query,setQuery,page,setPage,totalPages,setTotalPages,prev,next,loading}}>
      <Navbar />
      
    { loading? <Loading /> 
    : 
    <> 
{error?<Error />
:
<>
<Router>
  <Routes>
    <Route exact path="/" element={<Movies />} />
    <Route exact path="/home" element={<Movies />} />
    <Route exact path="/movie/:imdbID" element={<SMovie />} />
    {/* <Route exact path="/" element={<Pagination />}/> */}

  </Routes>
</Router>
</>
}
</>
  
  } 
  {/* <Pagination /> */}
    </AppContext.Provider>

    </>
  );
}

export default App;
export {AppContext}
