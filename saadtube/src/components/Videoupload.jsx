import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import app from "../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const Videoupload = () => {
  const user = useSelector((state) => state.user.user);
  const {
    register,
    handleSubmit,
  } = useForm();

  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isVideoUploading, setIsVideoUploading] = useState(false);
  const [videoprogress, setvideoProgress] = useState(0);
  const onSubmit = async (data) => {
    const obj = {};
    obj.title = data.title;
    obj.createdBy = user;
    const thumbnailFile = data.thumbnail[0];
    const videoFile = data.video[0];
    const storage = getStorage(app);

    const thumbnailRef = ref(storage, `thumbnails/${thumbnailFile.name}`);
    const thumbnailUploadTask = uploadBytesResumable(thumbnailRef, thumbnailFile);

    setIsUploading(true);
    thumbnailUploadTask.on('state_changed',
      (snapshot) => {
        
        const progressPercent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progressPercent);
      },
      (error) => {
        setIsUploading(false);
        toast.error('Thumbnail upload failed: ' + error.message);
        return ;
      },
      () => {
        // toast.success('Thumbnail uploaded successfully!');
        getDownloadURL(thumbnailRef).then((url) => {
          console.log("The thumbnail url is ", url);
          setIsUploading(false);
          obj.thumbnail = url ;
        });
      }
    );

    const videoRef = ref(storage, `videos/${videoFile.name}`);
    const videoUploadTask = uploadBytesResumable(videoRef, videoFile);
    videoUploadTask.on('state_changed',
      (snapshot) => {
        setIsVideoUploading(true);

        const progressPercent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setvideoProgress(progressPercent);
      },
      (error) => {
        setIsVideoUploading(false);
        toast.error('Video upload failed: ' + error.message);
        return ;
      },
      () => {
        // toast.success('Video uploaded successfully!');
        getDownloadURL(videoRef).then(async(url) => {
          console.log("The video url is ", url);
          setIsVideoUploading(false);
          obj.link = url;
          console.log(obj);
          let u = "http://localhost:8080/video/createvideo";
        const response = await fetch(u, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                // Add any additional headers if needed
            },
            body: JSON.stringify(obj),
        });
        const d = await response.json();
        if(d=="Internal Server Error") {toast.error("Error in uploading the video.Please Try Again")}
        if(d=="video uploaded"){ toast.success("The video has been uploaded");return;}
        });
      }
      

    );
   
    
  };

  return (
    <>
      {user ? (
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold mb-4">Upload Your Video</h1>
          <form onSubmit={handleSubmit(onSubmit)} >
            <div className="mb-4">
              <label htmlFor="title" className="block font-medium mb-1">
                Title:
              </label>
              <input
                type="text"
                id="title"
                {...register("title", { required: true, minLength: 3 })}
                className="border border-gray-300 p-2 rounded-md w-full"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="thumbnail" className="block font-medium mb-1">
                Thumbnail:
              </label>
              <input
                type="file"
                id="thumbnail"
                accept="image/*"
                {...register("thumbnail", { required: true })}
                className="w-full"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="videoFile" className="block font-medium mb-1">
                Video File:
              </label>
              <input
                type="file"
                id="videoFile"
                accept="video/*"
                {...register("video", { required: true })}
                className="w-full"
                required
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                disabled={isVideoUploading===true}
              >
                
                Upload
              </button>
              {isUploading ? `Thumbnail Uploading... ${progress.toFixed(2)}%` : ''}
                {isVideoUploading ? `Video Uploading... ${videoprogress.toFixed(2)}%` : ''}
            </div>
          </form>
        </div>
      ) : (
        <div className="flex flex-col justify-start align-middle text-center" >
          <h1 className='font-bold p-5'>Please Signup To Upload Any Video </h1>
          <Link to="/signup" className='border-2 p-5 border-black hover:bg-black hover:text-white cursor-pointer'>Sign Up</Link>
        </div>
      )}
    </>
  );
};

export default Videoupload;
