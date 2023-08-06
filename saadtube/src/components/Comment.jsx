import React, { useState } from 'react';
const Comment = () => {


  return (
    <div className="flex flex-col justify-start m-5">
      <div className="flex">
        <div className="flex-shrink-0">
          <img
            alt="img"
            src="https://images.pexels.com/photos/17693898/pexels-photo-17693898/free-photo-of-peek-a-boo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            className="rounded-full w-20 h-20 p-2"
          />
        </div>
        <input
          type="text"
          name=""
          id="commend"
          className="border-2 p-2 rounded-full flex-grow"
          placeholder="Add a comment..."

        />
        <button className="border-2 p-1 pl-5 pr-5 ml-2 border-black text-black hover:bg-black hover:text-white">
          Post
        </button>
      </div>
      <br />
      <div className="flex justify-start">
        <div className="flex-shrink-0">
          <img
            alt="img"
            src="https://images.pexels.com/photos/17693898/pexels-photo-17693898/free-photo-of-peek-a-boo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            className="rounded-full w-20 h-20 p-2"
          />
        </div>
        <div className="flex flex-col justify-start" style={{ width: 'calc(100% - 80px)' }}>
          {/* Fixed width of 80px to account for the image size */}
          <div className="flex flex-row">
            <h1 className="font-bold pr-3">John Doe</h1>
            <h1>3 days ago</h1>
          </div>
          <h1 className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure vitae rem cum corporis odio quaerat eveniet
            voluptatibus error consequuntur, cumque totam numquam quidem debitis voluptatem consectetur ut reiciendis
            laboriosam? Itaque maiores labore error velit ad quod doloribus aut fuga suscipit nam laborum, ipsam quam et
            magnam sit. Animi blanditiis tempora nihil ad consequuntur impedit at temporibus nisi debitis mollitia iusto
            illo sed cum consectetur natus eveniet ex, fugit ipsum sit quia obcaecati? Aut ea nulla labore sed commodi
            consequatur iusto nisi. Animi a inventore totam sint placeat vitae laboriosam! Expedita cumque qui quisquam
            consectetur tenetur ducimus aliquam eligendi quo at!
          </h1>
        </div>
      </div>
      <br />
      <div className="flex justify-start">
        <div className="flex-shrink-0">
          <img
            alt="img"
            src="https://images.pexels.com/photos/17693898/pexels-photo-17693898/free-photo-of-peek-a-boo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            className="rounded-full w-20 h-20 p-2"
          />
        </div>
        <div className="flex flex-col justify-start" style={{ width: 'calc(100% - 80px)' }}>
          {/* Fixed width of 80px to account for the image size */}
          <div className="flex flex-row">
            <h1 className="font-bold pr-3">John Doe</h1>
            <h1>3 days ago</h1>
          </div>
          <h1 className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure vitae rem cum corporis odio quaerat eveniet
            voluptatibus error consequuntur, cumque totam numquam quidem debitis voluptatem consectetur ut reiciendis
            laboriosam? Itaque maiores labore error velit ad quod doloribus aut fuga suscipit nam laborum, ipsam quam et
            magnam sit. Animi blanditiis tempora nihil ad consequuntur impedit at temporibus nisi debitis mollitia iusto
            illo sed cum consectetur natus eveniet ex, fugit ipsum sit quia obcaecati? Aut ea nulla labore sed commodi
            consequatur iusto nisi. Animi a inventore totam sint placeat vitae laboriosam! Expedita cumque qui quisquam
            consectetur tenetur ducimus aliquam eligendi quo at!
          </h1>
        </div>
      </div>
      <br />
      <div className="flex justify-start">
        <div className="flex-shrink-0">
          <img
            alt="img"
            src="https://images.pexels.com/photos/17693898/pexels-photo-17693898/free-photo-of-peek-a-boo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            className="rounded-full w-20 h-20 p-2"
          />
        </div>
        <div className="flex flex-col justify-start" style={{ width: 'calc(100% - 80px)' }}>
          {/* Fixed width of 80px to account for the image size */}
          <div className="flex flex-row">
            <h1 className="font-bold pr-3">John Doe</h1>
            <h1>3 days ago</h1>
          </div>
          <h1 className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure vitae rem cum corporis odio quaerat eveniet
            voluptatibus error consequuntur, cumque totam numquam quidem debitis voluptatem consectetur ut reiciendis
            laboriosam? Itaque maiores labore error velit ad quod doloribus aut fuga suscipit nam laborum, ipsam quam et
            magnam sit. Animi blanditiis tempora nihil ad consequuntur impedit at temporibus nisi debitis mollitia iusto
            illo sed cum consectetur natus eveniet ex, fugit ipsum sit quia obcaecati? Aut ea nulla labore sed commodi
            consequatur iusto nisi. Animi a inventore totam sint placeat vitae laboriosam! Expedita cumque qui quisquam
            consectetur tenetur ducimus aliquam eligendi quo at!
          </h1>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Comment;