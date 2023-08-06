import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Menu from './components/Menu';

function App() {
  return (
    <>
      <Navbar />
     
      <div className='grid grid-cols-6'>
        <div className='col-start-1 col-end-2'><Menu /></div>
      </div>
      
    </>
  );
}

export default App;
