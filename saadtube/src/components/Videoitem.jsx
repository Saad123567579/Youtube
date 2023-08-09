import React from 'react';
import { differenceInDays } from 'date-fns';
import { Navigate, useNavigate } from 'react-router';
const VideoItem = (props) => {
    const navigate = useNavigate();
    const { video } = props;
    console.log("Views",video.views);
    const uploadDate = new Date(video.createdAt); 
    const currentDate = new Date();
    const daysDiff = differenceInDays(currentDate, uploadDate);
    const handleClick = () => {
        navigate(`video/${video._id}/`);
    }
   
    return (
        <div className="h-80 w-96 cursor-pointer hover:shadow-lg rounded-md overflow-hidden border border-gray-300" onClick={handleClick}>
            <div className="w-full h-full flex flex-col">
                <div className="relative h-2/3">
                    <img className="w-full h-full object-cover" alt="Video Thumbnail" src={video.thumbnail} />
                </div>
                <div className="flex items-center p-3">
                    <img
                        alt="Uploader Avatar"
                        src={video.createdBy.image}
                        className="rounded-full w-12 h-12 mr-3"
                    />
                    <div className="flex flex-col">
                        <h1 className="font-semibold text-sm">{video.title}</h1>
                        <p className="text-gray-600 text-xs"> {video.views} views . {daysDiff?(daysDiff):(1)} days ago </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoItem;
