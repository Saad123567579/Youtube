import './index.css';
import React,{useEffect} from 'react';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Signup from "./components/Signup";
import Login from "./components/Login";
import Comment from "./components/Comment";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getUserAsync } from './features/userSlice';
import { getallvideoAsync } from './features/videoSlice';
import { useDispatch } from 'react-redux';
import Videoupload from './components/Videoupload';
import Myvideos from "./components/Myvideos";
import Subscriptions from "./components/Subscriptions"
import Watchlater from "./components/Watchlater";
import Likedvideos from "./components/Likedvideos";
import Allvideos from './components/Allvideos';
import Videodisplay from './components/Videodisplay';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
   const getData = async()=>{
    const d = await  dispatch(getUserAsync());
    await dispatch(getallvideoAsync());
   

   }
   getData();

  }, [])
  
  return (
    <BrowserRouter>
      <Navbar />
      <div className='grid grid-cols-6'>
        <div className='col-start-1 col-end-2'><Menu /></div>
        <div className='col-start-2 col-end-6'>
          <Routes>
          <Route  path="/" element={<Allvideos/>} />
            <Route  path="/signup" element={<Signup/>} />
            <Route  path="/login" element={<Login/>} />
            <Route  path="/videoupload" element={<Videoupload/>} />
            <Route  path="/myvideos" element={<Myvideos/>} />
            <Route  path="/mysubscriptions" element={<Subscriptions/>} />
            <Route  path="/mylikedvideos" element={<Likedvideos/>} />
            <Route  path="/mywatchlater" element={<Watchlater/>} />
            <Route  path="/video/:id" element={<Videodisplay/>} />



          </Routes>
        </div>
      </div>


    </BrowserRouter>
  );
}

export default App;

