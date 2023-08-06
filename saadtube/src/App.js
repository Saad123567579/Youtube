import './index.css';
import React from 'react';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Signup from "./components/Signup";
import Login from "./components/Login";
import Comment from "./components/Comment";
import Test from './components/Test';
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='grid grid-cols-6'>
        <div className='col-start-1 col-end-2'><Menu /></div>
        <div className='col-start-2 col-end-7'>
          <Routes>
            <Route exact path="/" component={Comment} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
          </Routes>
        </div>
      </div>


    </BrowserRouter>
  );
}

export default App;

