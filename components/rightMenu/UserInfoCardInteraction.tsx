"use client";
import React from "react";

const UserInfoCardInteraction = ({
  userId,
  currentUserId,
  isUserBlocked,
  isFollowing,
  isFollowingSent,
}: {
  userId: string;
  currentUserId: string;
  isUserBlocked: boolean;
  isFollowing: boolean;
  isFollowingSent: boolean;
}) => {
  return (
    <>
      <form action="">
        {" "}
        <button className=" w-full bg-blue-500 text-white text-sm rounded-md p-2 cursor-pointer">
          {isFollowing
            ? "Following"
            : isFollowingSent
            ? "Friend Request Sent"
            : "Follow"}
        </button>
      </form>

      <form action="" className="self-end">
        <span className="text-red-400  text-xs cursor-pointer">
          {isUserBlocked ? "Unblock user" : "Block user"}
        </span>
      </form>
    </>
  );
};

export default UserInfoCardInteraction;
