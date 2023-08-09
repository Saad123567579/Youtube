import React from 'react';
import { useSelector } from 'react-redux';
import Videoitem from './Videoitem';
import { useNavigate } from 'react-router';

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const Allvideos = () => {
    const navigate = useNavigate();

    const videos = useSelector((state) => state?.video?.videos);
    if (!videos) {
        return <div>Loading...</div>;
    }

    const shuffledVideos = shuffleArray([...videos]);

    return (
        <div className="grid grid-cols-3 gap-4 p-4">
            {shuffledVideos.map((vid) => (
                <Videoitem key={vid.id} video={vid} />
            ))}
        </div>
    );
}

export default Allvideos;
