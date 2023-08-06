import './index.css';
import React from 'react';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Signup from "./components/Signup";
import Login from "./components/Login";
import Comment from "./components/Comment";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
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

