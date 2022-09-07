import React,{useContext} from 'react';
// import ReactLoading from 'react-loading';
import GridLoader from "react-spinners/GridLoader";
import '../App.css';
import { AppContext } from '../App';


const Loading = () => {
  const {loading}=useContext(AppContext);
  return (
    <div className="loading">
  {/* <ReactLoading type="bubbles" color="111" height={'10%'} width={'20%'} /> */}
  <GridLoader color="#fff" loading={true}  size={50} />
   <h1 >Loading</h1>
    </div>
  )
}

export default Loading