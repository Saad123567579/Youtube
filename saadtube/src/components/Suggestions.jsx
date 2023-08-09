import React from 'react';
import { useSelector } from 'react-redux';
import { format, parseISO } from 'date-fns';
import { useNavigate } from 'react-router';

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const Suggestions = () => {
    const navigate = useNavigate();
    const videos = useSelector((state) => state.video.videos);
    if(!videos) {return (<>Loading...</>)}
    const shuffledVideos = shuffleArray([...videos]);

    const handleVideoClick = (videoId) => {
        navigate(`/video/${videoId}/`);
    };

    return (
        <>
            {!videos ? <>Loading...</> : shuffledVideos.map((video) => (
                <div
                    className="flex items-center bg-white rounded-lg w-full cursor-pointer"
                    key={video.id}
                    onClick={() => handleVideoClick(video._id)}
                >
                    <div className="flex-shrink-0 w-1/2 p-1">
                        <img
                            alt="pic"
                            src={video.thumbnail}
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                    <div className="w-1/2 max-w-1/2">
                        <h1 className="text-sm font-semibold">{video.title}</h1>
                        <p className="text-gray-600 text-sm">{video.views} views</p>
                        <p className="text-gray-600 text-sm">
                            {format(parseISO(video.createdAt), 'yyyy-MM-dd')}
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Suggestions;
