import React from 'react'
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import {useDispatch} from "react-redux";
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
        window.location.href="/";
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
                    
                </form>
            </div>
        </div>
    )
}

export default Login