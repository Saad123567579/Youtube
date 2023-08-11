import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getsubchannelsAsync } from '../features/videoSlice';
import Videoitem from './Videoitem';
const Subscriptions = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  // Define videos as a state variable
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await dispatch(getsubchannelsAsync());
        setVideos(data.payload.subscribedChannels); // Set the videos state
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
      </div>}
      {user && videos && videos.length == 0 && <div className='m-auto font-bold text-lg'>
        There are no liked videos. Try liking one
      </div>}
      {user && videos && videos.length && (
        <>
          <h1 className='m-auto font-bold text-lg'>Your Subscribed Channels Are </h1>
          <div className="grid grid-cols-3 gap-4 p-4">
            {videos?.map((vid) => (

              <div className=" flex flex-col justify-center items-center ">
                <div className="channel-image">
                  <img src={vid.image} alt='img' />
                </div>
                <div className="channel-details m-auto">
                  <h3 className="channel-name font-bold">{vid.name}</h3>
                  <p className="total-videos font-semibold">{vid.myVids.length} videos uploaded</p>
                </div>
              </div>
            )
            )}
          </div>
        </>
      )}


    </>

  )
}

export default Subscriptions
