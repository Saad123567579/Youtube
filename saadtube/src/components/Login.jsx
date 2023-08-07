import React from 'react'
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import {useSelector,useDispatch} from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import { loginUserAsync } from '../features/userSlice';
const Login = () => {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        
    } = useForm();

    const onSubmit = async (data) => {
        const d = await  dispatch(loginUserAsync(data));
        if(d.payload=="Invalid Email Or Password" ) {return toast.error("Invalid Email Or Password")}
        if(d.payload=="Internal Server Error") {return toast.error("Internal Server Error. Please try again")}
        return toast.success("Welcome Back");
    }
    return (

        <div className="m-auto w-2/4">
            <div className="flex justify-center items-center h-screen">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username or Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Email"
                            {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, minLength: 3 })}
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
                            className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                            value="Sign In" // Use `value` instead of children
                        />
                    </div>
                    <div className="mt-6 flex items-center">
                        <hr className="flex-grow border-gray-400" />
                        <span className="mx-4 text-gray-600 font-semibold">Or sign in with</span>
                        <hr className="flex-grow border-gray-400" />
                    </div>
                    <div className="flex items-center justify-center mt-4">
                        <a
                            href="#"
                            className="bg-red-600 text-white font-bold py-2 px-4 rounded flex items-center"
                        >
                            <svg className="w-6 h-6 pr-1 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 18 19">
                                <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd" />
                            </svg>

                            Sign in with Google
                        </a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login