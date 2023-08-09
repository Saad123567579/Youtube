import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getidvideoAsync } from '../features/videoSlice';
import { parseISO, format } from 'date-fns';
import {toast} from "react-toastify"; 
import Comment from './Comment';
import Suggestions from './Suggestions';
const Videodisplay = () => {
    const video = useSelector((state) => state.video.currentVideo);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        const fetchVideo = async () => {
            await dispatch(getidvideoAsync(id));
        };
        fetchVideo();
    }, [id, dispatch]);

    function copyCurrentPageLink() {
        const currentPageLink = window.location.href;
      
        const tempInput = document.createElement('input');
        document.body.appendChild(tempInput);
        tempInput.value = currentPageLink;
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
      
        toast.success('Page link copied to clipboard ' );
      }
      

    return (
        <div className='mt-5'>
            {!video && <>Loading...</>}
            {video && (
                <div className="flex justify-center absolute ">
                    <div className="m-10 flex-col w-3/5">
                        <iframe
                            title="Embedded Video"
                            width="760"
                            height="515"
                            src={video.link}
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            sandbox="allow-same-origin allow-scripts"
                            loading="eager"
                        ></iframe>

                        <div className='flex'>
                            <h1 className="w-3/4 font-bold text-2xl">{video.title}</h1>
                            <div className="flex  ">
                                <div className="cursor-pointer flex m-2 ml-auto">
                                    <svg 
                                        className="w-6 h-6 mr-2 cursor-pointer text-gray-800 dark:text-white transition-colors duration-300 hover:text-black"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20"
                                    >
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.008 8.714c1-.097 1.96-.45 2.792-1.028a25.112 25.112 0 0 0 4.454-5.72 1.8 1.8 0 0 1 .654-.706 1.742 1.742 0 0 1 1.65-.098 1.82 1.82 0 0 1 .97 1.128c.075.248.097.51.065.767l-1.562 4.629M4.008 8.714H1v9.257c0 .273.106.535.294.728a.99.99 0 0 0 .709.301h1.002a.99.99 0 0 0 .71-.301c.187-.193.293-.455.293-.728V8.714Zm8.02-1.028h4.968c.322 0 .64.08.925.232.286.153.531.374.716.645a2.108 2.108 0 0 1 .242 1.883l-2.36 7.2c-.288.813-.48 1.354-1.884 1.354-2.59 0-5.39-1.06-7.504-1.66" />

                                    </svg>
                                    {video.likes}
                                </div>
                                <div className="cursor-pointer flex m-2">
                                    <svg
                                        className="mr-2 w-6 h-6 cursor-pointer text-gray-800 dark:text-white transition-colors duration-300 hover:text-black"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20"
                                    >
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.992 11.287c-1 .097-1.96.45-2.792 1.029a25.118 25.118 0 0 0-4.454 5.721 1.803 1.803 0 0 1-.655.705 1.742 1.742 0 0 1-1.648.096 1.786 1.786 0 0 1-.604-.457 1.874 1.874 0 0 1-.432-1.439l1.562-4.626m9.023-1.03H19V2.03c0-.273-.106-.535-.294-.728A.99.99 0 0 0 17.997 1h-1.002a.99.99 0 0 0-.71.301 1.042 1.042 0 0 0-.293.728v9.258Zm-8.02 1.03H3.003c-.322 0-.64-.08-.925-.233a2.022 2.022 0 0 1-.716-.645 2.108 2.108 0 0 1-.242-1.883l2.36-7.2C3.769 1.54 3.96 1 5.365 1c2.59 0 5.39 1.06 7.504 1.66" />

                                    </svg>
                                    {video.dislikes}
                                </div>
                                <div className="cursor-pointer flex m-2">
                                    <svg onClick={copyCurrentPageLink}
                                        className="w-6 h-6 mr-2 cursor-pointer text-gray-800 dark:text-white transition-colors duration-300 hover:text-black"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 18 18"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m5.953 7.467 6.094-2.612m.096 8.114L5.857 9.676m.305-1.192a2.581 2.581 0 1 1-5.162 0 2.581 2.581 0 0 1 5.162 0ZM17 3.84a2.581 2.581 0 1 1-5.162 0 2.581 2.581 0 0 1 5.162 0Zm0 10.322a2.581 2.581 0 1 1-5.162 0 2.581 2.581 0 0 1 5.162 0Z"
                                        />
                                    </svg>
                                   <span className='font-semibold'> Share</span>
                                </div>

                                <div className="cursor-pointer flex m-2">
                                    <svg
                                        className="w-6 h-6 mr-2 cursor-pointer text-gray-800 dark:text-white transition-colors duration-300 hover:text-black"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 20"
                                    >
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m13 19-6-5-6 5V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17Z" />

                                    </svg>
                                    Save
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center w-3/4 justify-between mt-2">
                            <div>
                                <h1>
                                    {video.views} views .{' '}
                                    {format(parseISO(video.createdAt), 'yyyy-MM-dd')}
                                </h1>
                            </div>
                        </div>

                        <div className="flex w-4/5 h-auto justify-start mt-4">
                            <div>
                                <img
                                    alt="img"
                                    src={video.createdBy?.image}
                                    className="rounded-full w-20 h-20 p-2"
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <h1 className="font-bold">{video.createdBy?.name}</h1>
                                <p className="font-semibold">
                                    {video.createdBy?.subscribedMe.length} Subscribers
                                </p>
                            </div>
                            <div className="flex-auto"></div>
                            <div >
                                <button className="bg-red-600 p-2  text-white hover:text-slate-3">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start m-5  max-w-7/8 overflow-y-auto">
                            {/* The area for adding comments */}
                            {/* Add your comment area here */}
                            <Comment />
                        </div>
                    </div>
                    <div className="flex flex-col  w-full pr- mr-2">
                        {/* the space for adding the video items */}
                        {/* Add video items here */}
                        <Suggestions />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Videodisplay;




{/* <div className="self-end flex ">
                        <div className="cursor-pointer flex m-2"><svg className="w-6 h-6 mr-2 cursor-pointer text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        </svg> {video.likes} </div>
                        <div className="cursor-pointer flex m-2"><svg className="mr-2 w-6 h-6 cursor-pointer text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        </svg> {video.dislikes}</div>
                        <div className="cursor-pointer flex m-2"><svg className="w-6 h-6 mr-2 cursor-pointer text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        </svg> Share</div>
                        <div className="cursor-pointer flex m-2"><svg className="w-6 h-6 mr-2 cursor-pointer text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 20">
                        </svg> Save</div>
                    </div> */}