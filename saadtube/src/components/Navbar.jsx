import React from 'react'
import './App.css';
const Navbar = () => {
    return (
        <div className="flex w-full  justify-start items-center">
            <div className="m-4">
                <div className="rounded-lg cursor-pointer hover:bg-slate-100 flex">
                    <span className="p-2">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 14 16">
                            <path d="M0 .984v14.032a1 1 0 0 0 1.506.845l12.006-7.016a.974.974 0 0 0 0-1.69L1.506.139A1 1 0 0 0 0 .984Z" />
                        </svg>
                    </span>
                    <span className="p-2 font-bold">SaadTube</span>
                </div>
            </div>

            <div className="flex-auto flex justify-center m-4 rounded-full">
                <div className="flex items-center  pr-20">
                    <input className="border-2 p-2 pb-2 pt-2 pr-20  rounded-full h-full w-full" type="text" placeholder="How to" />
                    <span className="p-1">
                        <svg className=" cursor-pointer hover:shadow-lg rounded-full  w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </span>
                </div>
            </div>

            <div className="flex-auto flex justify-end m-4">
                <button className="border-2 border-black p-2 -blue-100 hover:bg-black hover:text-white">Sign Up</button>
            </div>
        </div>

    )
}

export default Navbar