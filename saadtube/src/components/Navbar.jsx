import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { logoutUserAsync } from '../features/userSlice';

const Navbar = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    const handleLogout = async() => {
        window.location.href="/";
        const d = await dispatch(logoutUserAsync());
        console.log(d);
        
    }
    return (
        <div className="flex w-full  justify-start items-center ">
            <div className="m-4">
                <div className="rounded-lg cursor-pointer hover:bg-slate-100 flex">
                    <span className="p-2">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 14 16">
                            <path d="M0 .984v14.032a1 1 0 0 0 1.506.845l12.006-7.016a.974.974 0 0 0 0-1.69L1.506.139A1 1 0 0 0 0 .984Z" />
                        </svg>
                    </span>
                    <Link className="p-2 font-bold" to="/" >SaadTube</Link>
                </div>
            </div>

            <div className="flex-auto flex justify-center m-4 rounded-full">
                <div className="flex items-center  pr-20">
                    <input className="border-2 p-2 pb-2 pt-2 pr-20  rounded-full h-full w-full" type="text" placeholder="How to" />
                    <span className="p-1">
                        <svg className=" cursor-pointer hover:shadow-lg rounded-full  w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </span>
                </div>
            </div>

            {user ? (
                <div className="flex justify-end m-4">
                    <img src={user.image} className='rounded-full border-2 w-12 h-12 mr-2' />
                    <button to="/signup" className="border-2 border-black p-2 -blue-100 hover:bg-black hover:text-white" onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div className="flex-auto flex justify-end m-4">
                    <Link to="/signup" className="border-2 border-black p-2 -blue-100 hover:bg-black hover:text-white">Sign Up</Link>
                </div>
            )}

        </div>

    )
}

export default Navbar