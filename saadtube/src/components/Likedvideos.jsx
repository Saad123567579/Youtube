import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Likedvideos = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <>
    {user ? (
      <div>saaad</div>
    ):(
      <div className="flex flex-col justify-start align-middle text-center" >
      <h1 className='font-bold p-5'>Please Signup To See Your Liked Videos</h1>
      <Link to="/signup" className='border-2 p-5 border-black hover:bg-black hover:text-white cursor-pointer'>Sign Up</Link>
      </div>
    )}
    </>
  )
}

export default Likedvideos
