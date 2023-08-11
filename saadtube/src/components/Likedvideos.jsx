import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getlikedvideosAsync } from '../features/videoSlice';
import Videoitem from './Videoitem';

const Likedvideos = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user?.user);



  // Define videos as a state variable
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await dispatch(getlikedvideosAsync());
        console.log(data.payload.likeVids);
        setVideos(data.payload.likeVids); // Set the videos state
      } catch (error) {
        console.error('Error fetching liked videos:', error);
      }
    };
    fetchData();
  }, [user]);





  return (
    <>
      {!user && (<div className="flex flex-col justify-start align-middle text-center">
        <h1 className='font-bold p-5'>
          Please Signup To See Your Liked Videos
        </h1>
        <Link
          to="/signup"
          className='border-2 p-5 border-black hover:bg-black hover:text-white cursor-pointer'
        >
          Sign Up
        </Link>
      </div>)}
      {user && !videos && <div className='m-auto font-bold text-lg'>
        Loading...
      </div> }
      {user && videos && videos.length == 0 && <div className='m-auto font-bold text-lg'>
        There are no liked videos. Try liking one
      </div>}
      {user && videos && videos.length && (
      <>
      <h1 className='m-auto font-bold text-lg'>Your Liked Videos Are</h1>
      <div className="grid grid-cols-3 gap-4 p-4">
    {videos?.map((vid) => (
      <Videoitem key={vid.id} video={vid} />
    ))}
  </div>
  </>
  )}


    </>
  );
};

export default Likedvideos;
