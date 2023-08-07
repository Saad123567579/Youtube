import './index.css';
import React,{useEffect} from 'react';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Signup from "./components/Signup";
import Login from "./components/Login";
import Comment from "./components/Comment";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  useEffect(() => {
    const Getdata = async() =>{
      let url = "http://localhost:8080/auth/getuser";
      const response = await fetch(url, {
        method: 'GET',
        credentials:'include',
        headers: {
            'Content-Type': 'application/json',
            // Add any additional headers if needed
        },
        
    });
    const d = await response.json();
    console.log(d);

    }
    Getdata();
  }, [])
  
  return (
    <BrowserRouter>
      <Navbar />
      <div className='grid grid-cols-6'>
        <div className='col-start-1 col-end-2'><Menu /></div>
        <div className='col-start-2 col-end-6'>
          <Routes>
            
            <Route  path="/signup" element={<Signup/>} />
            <Route  path="/login" element={<Login/>} />
          </Routes>
        </div>
      </div>


    </BrowserRouter>
  );
}

export default App;

