import React from "react";
import Image from "next/image";

const Comments = () => {
  return (
    <div>
      {/*Write*/}
      <div className=" flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/6957839/pexels-photo-6957839.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <div className=" flex-1 flex items-center justify-between bg-slate-100 rounded-xl test-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="Write a comment..."
            className="bg-transparent outline-none flex-1"
          ></input>
          <Image
            src="/emoji.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>
      {/*Comments */}
      <div className="">
        {/* Comment */}
        <div className="flex gap-4 justify-between mt-6">
          {/* Avatar */}
          <Image
            src="https://images.pexels.com/photos/46216/sunflower-flowers-bright-yellow-46216.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          {/* description */}
          <div className="flex-1 flex flex-col gap-2">
            <span className="font-medium"> Loulou Hallal</span>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel quos
              debitis laudantium vitae iure cumque porro accusamus unde aut
              nesciunt! Aut aspernatur est harum praesentium. Aspernatur soluta
              at voluptas architecto.
            </p>
            <div className="flex items-center gap-8 text-xs text-gray-500 mt-2 ">
              <div className="flex items-center gap-4">
                <Image
                  src="/like.png"
                  alt=""
                  width={12}
                  height={12}
                  className="cursor-pointer w-4 h-4"
                />
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">123 Likes</span>
                <div>Reply</div>
              </div>
            </div>
          </div>

          {/* icon */}
          <div>
            <Image
              src="/more.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer w-4 h-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
