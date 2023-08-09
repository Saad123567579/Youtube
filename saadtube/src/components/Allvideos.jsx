import React from 'react';
import { useSelector } from 'react-redux';
import Videoitem from './Videoitem';

const Allvideos = () => {
    const videos = useSelector((state) => state?.video?.videos);

    if (!videos || videos.length === 0) {
        // Handle the case where videos are not available or empty
        return <p>No videos available.</p>;
    }

    const vid = videos[0];

    return (
        <div>
            {vid && <Videoitem video={vid} />}
        </div>
    );
}

export default Allvideos;
