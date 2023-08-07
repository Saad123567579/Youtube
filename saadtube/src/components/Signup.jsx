import React from 'react'
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch} from "react-redux";
import { signupUserAsync } from '../features/userSlice';
import { Link } from 'react-router-dom';
import {auth ,provider} from "../firebase";
import {signInWithPopup} from "firebase/auth"
const Signup = () => {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        
    } = useForm();

    const onSubmit = async (data) => {
        const d = await dispatch((signupUserAsync(data)));
        console.log(d);
        if(d.payload=="Sorry a user already exists with this email"){return toast.error("Email already in use. Try something else")}
        if(d.payload=="Internal Server Error" || d.payload=="unable to save user") {return toast.error("Internal Server Error. Please Try Again")};
        return toast.success("Congratulations on creating your account");
    }
    const signGoogle = async() => {console.log("Clicked");
        signInWithPopup(auth,provider).then((result)=>console.log(result)).catch((e)=>console.log(e));


    }
    return (
        <div className="m-auto w-2/4">
            <div className="flex justify-center items-center h-screen">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email"
                            {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, minLength: 3 })}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Username"
                            {...register("name", { required: true, minLength: 3 })}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Password"
                            {...register("password", { required: true, minLength: 3 })}
                        />
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <input
                            className="bg-blue-500 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                            value="Sign In" // Use `value` instead of children
                        />
                    </div>

                    <div className="mt-6 flex items-center">
                        <hr className="flex-grow border-gray-400" />
                        <span className="mx-4 text-gray-600 font-semibold">Already have an account? Sign in <Link to="/login">here</Link></span>
                        <hr className="flex-grow border-gray-400" />
                    </div>
                    <div className="flex items-center justify-center mt-4">
                        <button 
                            onClick={signGoogle}
                            href="#"
                            className="bg-red-600 text-white font-bold py-2 px-4 rounded flex items-center"
                        >
                            <svg className="w-6 h-6 pr-1 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 18 19">
                                <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd" />
                            </svg>

                            Sign in with Google
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup