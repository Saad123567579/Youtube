import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getidvideoAsync } from '../features/videoSlice';
const Videodisplay = () => {
    const [video,setVideo] = useState(null);
    const dispatch = useDispatch();
    const {id} = useParams();
    useEffect(() => {
      const fetchVideo = async()=>{
        const data = await dispatch(getidvideoAsync(id));
        console.log(data.payload);
        console.log(data.payload.createdBy)
        setVideo(data);
      }
      fetchVideo();
    }, [])
    


    return (<>
    {!video && <>Loading...</>}
    {(video &&video.createdBy )&&  <div className="flex justify-center absolute">
            <div className="m-10 flex-col">
                <iframe width="860" height="515" src={video.link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <h1 className="w-3/4 font-semibold">{video.title}</h1>
                <div className="flex items-center w-3/4 justify-between">
                    <div>
                        <h1>{video.views} views . {video.createdAt}</h1>
                    </div>
                    <div className="self-end flex ">
                        <div className="cursor-pointer flex m-2"><svg className="w-6 h-6 mr-2 cursor-pointer text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.008 8.714c1-.097 1.96-.45 2.792-1.028a25.112 25.112 0 0 0 4.454-5.72 1.8 1.8 0 0 1 .654-.706 1.742 1.742 0 0 1 1.65-.098 1.82 1.82 0 0 1 .97 1.128c.075.248.097.51.065.767l-1.562 4.629M4.008 8.714H1v9.257c0 .273.106.535.294.728a.99.99 0 0 0 .709.301h1.002a.99.99 0 0 0 .71-.301c.187-.193.293-.455.293-.728V8.714Zm8.02-1.028h4.968c.322 0 .64.08.925.232.286.153.531.374.716.645a2.108 2.108 0 0 1 .242 1.883l-2.36 7.2c-.288.813-.48 1.354-1.884 1.354-2.59 0-5.39-1.06-7.504-1.66" />
                        </svg> {video.like} </div>
                        <div className="cursor-pointer flex m-2"><svg className="mr-2 w-6 h-6 cursor-pointer text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.992 11.287c-1 .097-1.96.45-2.792 1.029a25.118 25.118 0 0 0-4.454 5.721 1.803 1.803 0 0 1-.655.705 1.742 1.742 0 0 1-1.648.096 1.786 1.786 0 0 1-.604-.457 1.874 1.874 0 0 1-.432-1.439l1.562-4.626m9.023-1.03H19V2.03c0-.273-.106-.535-.294-.728A.99.99 0 0 0 17.997 1h-1.002a.99.99 0 0 0-.71.301 1.042 1.042 0 0 0-.293.728v9.258Zm-8.02 1.03H3.003c-.322 0-.64-.08-.925-.233a2.022 2.022 0 0 1-.716-.645 2.108 2.108 0 0 1-.242-1.883l2.36-7.2C3.769 1.54 3.96 1 5.365 1c2.59 0 5.39 1.06 7.504 1.66" />
                        </svg> {video.dislike}</div>
                        <div className="cursor-pointer flex m-2"><svg className="w-6 h-6 mr-2 cursor-pointer text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5.953 7.467 6.094-2.612m.096 8.114L5.857 9.676m.305-1.192a2.581 2.581 0 1 1-5.162 0 2.581 2.581 0 0 1 5.162 0ZM17 3.84a2.581 2.581 0 1 1-5.162 0 2.581 2.581 0 0 1 5.162 0Zm0 10.322a2.581 2.581 0 1 1-5.162 0 2.581 2.581 0 0 1 5.162 0Z" />
                        </svg> Share</div>
                        <div className="cursor-pointer flex m-2"><svg className="w-6 h-6 mr-2 cursor-pointer text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m13 19-6-5-6 5V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17Z" />
                        </svg> Save</div>
                    </div>
                </div>
                <br />
                <div className=" w-4/5 h-auto flex justify-start ">
                    <div><img alt="img" src={video.createdBy.image} className="rounded-full w-20 h-20 p-2" /></div>
                    <div className="flex flex-col justify-center">
                        <h1 className="font-bold">{video.createdBy.name}</h1>
                        <p className="font-semibold">120K Subscribers</p>
                    </div>
                    <div className="flex-auto"></div>
                    <div><button className="bg-red-600 p-2 justify-self-end text-white hover:text-slate-3">Subscribe</button></div>
                </div>
                <br /><br />
                <div className="flex flex-col justify-start m-5 w-3/4">
                    {/* The area for adding comments  */}
                    
                </div>

            </div>
            <div className="flex flex-col">
                {/* the space for adding the video items */}
                
            </div>


        </div>
    
    
    }
    
    
    
    </>
        

    )
}

export default Videodisplay