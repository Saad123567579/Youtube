import React from 'react'
import '../App.css';
const Videoitem = () => {
    return (
        <div className="h-80 w-96 cursor-pointer hover:shadow-lg ">
            <div className="w-full h-full flex flex-col ">
                <img className="w-full h-2/3" alt="image" src="https://images.pexels.com/photos/17693898/pexels-photo-17693898/free-photo-of-peek-a-boo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
                <div className="flex flex-row  w-full h-full ">
                    <div ><img alt="img" src="https://images.pexels.com/photos/17693898/pexels-photo-17693898/free-photo-of-peek-a-boo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="rounded-full w-24 h-20 p-2" /></div>
                    <div className=" w-full h-full flex flex-col">
                        <h1 className="font-semibold text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio amet perferendis eligendi cupiditate quo! Eveniet.</h1>
                        <p>1000 views . 1 day ago</p>

                    </div>
                </div>


            </div>


        </div>
    )
}

export default Videoitem