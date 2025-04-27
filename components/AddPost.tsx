import React from "react";
import Image from "next/image";
import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";

const AddPost = async () => {
  const { userId } = await auth();

  console.log(userId); // Replace with actual user ID from context or props

  /* const testAction = async (formdata: FormData) => {
    "use server";
    if (!userId) return;
    const desc = formdata.get("description") as string;
    try {
      const response = await prisma.post.create({
        data: {
          userId: userId,
          desc: desc,
          updatedAt: new Date(),
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }; */

  return (
    <div className="p-4 bg-white flex gap-4 justify-between text-sm">
      <Image
        src="https://images.pexels.com/photos/6957839/pexels-photo-6957839.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt=""
        className="w-12 h-12 object-cover rounded-full"
        width={48}
        height={48}
      ></Image>
      <div className=" flex-1">
        <form action="" className=" flex gap-4 ">
          <textarea
            placeholder="What's on your mind ?"
            id=""
            className=" bg-slate-100
            rounded-lg
            flex-1 p-2"
            name="description"
          ></textarea>
          <Image
            src="/emoji.png"
            alt=""
            className="w-5 h-5 cursor-pointer self-end"
            width={20}
            height={20}
          ></Image>
          <button>Send</button>
        </form>

        {/* options */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addimage.png" alt="" width={20} height={20}></Image>
            Image
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addVideo.png" alt="" width={20} height={20}></Image>
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" alt="" width={20} height={20}></Image>
            Poll
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addevent.png" alt="" width={20} height={20}></Image>
            Event
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
