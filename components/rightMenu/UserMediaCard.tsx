import React from "react";
import Link from "next/link";
import Image from "next/image";
import { User } from "@clerk/nextjs/server";

const UserMediaCard = ({ user }: { user: User }) => {
  // Use the prop to avoid the warning

  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Media </span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>

      <div className="flex gap-4 justify-between flex-wrap">
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/31451218/pexels-photo-31451218/free-photo-of-young-woman-with-red-hair-looking-out-train-window.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/31546996/pexels-photo-31546996/free-photo-of-vibrant-cocktail-glass-with-citrus-slice.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/2386141/pexels-photo-2386141.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/8807333/pexels-photo-8807333.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/31001252/pexels-photo-31001252/free-photo-of-night-scene-in-japan-with-neon-lights.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/31563478/pexels-photo-31563478/free-photo-of-man-relaxing-on-rooftop-with-ocean-view-in-vietnam.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/31225680/pexels-photo-31225680/free-photo-of-outdoor-basketball-hoop-under-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/30548780/pexels-photo-30548780/free-photo-of-artist-painting-with-vibrant-colors-in-studio.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default UserMediaCard;
