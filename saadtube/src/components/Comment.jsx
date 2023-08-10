import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {toast} from "react-toastify";
import { createcommentAsync } from '../features/commentSlice';
import {getcommentbyvideoAsync} from "../features/videoSlice";
import { differenceInDays } from "date-fns";

const Comment = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user?.user);
  const video = useSelector((state) => state?.video?.currentVideo);
  const comments = useSelector((state)=>state?.video?.comments);
  useEffect(() => {
    console.log(comments);
  }, [comments])
  
  useEffect(() => {
    const fetchComment = async() =>{
      const data =await  dispatch(getcommentbyvideoAsync());
      console.log(data.payload);
    }
    fetchComment();
  }, [])
  
  if(!video){return (<>Loading...</>)}
  
  

  const handlePost = async() => {
    let comment = document.getElementById('comment').value ;
    if(comment=='') return toast.error("Please Write Something");
    let obj = {};
    obj.text = comment;
    obj.video = video._id;
    obj.user = user._id;
    let create = await dispatch(createcommentAsync(obj));
    console.log(create);
    if(create.payload=="Internal Server Error") return toast.error("Internal Server Error. Please Try Again");
    await  dispatch(getcommentbyvideoAsync());
    document.getElementById('comment').value = '';
    return toast.success("Comment Added");
    
  }

  return (
    <div className="flex flex-col justify-start m-5 w-3/4">
      {user ? (
        <div className="flex">
          <div className="flex-shrink-0">
            <img
              alt="img"
              src={user.image}
              className="rounded-full w-20 h-20 p-2"
            />
          </div>
          <input
            type="text"
            name=""
            id="comment"
            className="border-2 p-2 rounded-full flex-grow"
            placeholder="Add a comment..."
          />
          <button onClick={handlePost} className="border-2 p-1 pl-5 pr-5 ml-2 border-black text-black hover:bg-black hover:text-white">
            Post
          </button>
        </div>
      ) : (
        <div className="flex flex-col justify-start items-start">
          <h1 className="font-semibold">Please Signup To Post A Comment</h1>
          <Link
            to="/signup"
            className="mt-2 p-2 border-2 border-black hover:text-white hover:bg-black"
          >
            Sign up
          </Link>
        </div>
      )}

      <br />

      { (comments && comments.length) && comments.length ? (
        comments.map((comment) => (
          <div className="flex justify-start" key={comment.id}>
            <div className="flex-shrink-0">
              <img
                alt="img"
                src={comment.user.image}
                className="rounded-full w-20 h-20 p-2"
              />
            </div>
            <div
              className="flex flex-col justify-start"
              style={{ width: 'calc(100% - 80px)' }}
            >
              {/* Fixed width of 80px to account for the image size */}
              <div className="flex flex-row">
                <h1 className="font-bold pr-3">{comment.user.name}</h1>
                <h1>{differenceInDays(new Date(), new Date(comment.createdAt))?(differenceInDays(new Date(), new Date(comment.createdAt))):(<>1</>)} days ago</h1>
              </div>
              <h1 className="">
                {comment.text}
              </h1>
            </div>
          </div>
        ))
      ) : (
        <>
          <h1 className="font-bold text-lg">No Comments Found</h1>
        </>
      )}
    </div>
  );
};

export default Comment;
