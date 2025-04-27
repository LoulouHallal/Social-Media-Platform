import React from "react";
import RightMenu from "@/components/rightMenu/RightMenu";
import Image from "next/image";
import prisma from "@/lib/client";
import { notFound } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import LeftMenu from "@/components/leftMenu/LeftMenu";
import Feed from "@/components/feed/Feed";

const ProfilePage = async ({ params }: { params: { username: string } }) => {
  const username = params.username;
  const user = await prisma.user.findFirst({
    where: {
      username,
    },
    include: {
      _count: {
        select: {
          Follower_Follower_followerIdToUser: true,
          Follower_Follower_followingIdToUser: true,
          Post: true,
        },
      },
    },
  });

  if (!user) return notFound();

  const { userId: currentUserId } = await auth();

  let isBlocked;

  if (currentUserId) {
    const res = await prisma.block.findFirst({
      where: {
        blockerId: user.id,
        blockedId: currentUserId,
      },
    });

    if (res) isBlocked = true;
  } else {
    isBlocked = false;
  }

  if (isBlocked) return notFound();

  return (
    <div>
      <div className="flex gap-6 pt-6">
        <div className="hidden xl:block w-[20%]">
          <LeftMenu type="profile" />
        </div>
        <div className="w-full lg:w-[70%] xl:w-[50%]">
          <div className=" flex flex-col gap-6">
            <div className="flex flex-col items-center justify-center">
              <div className="w-full h-64 relative">
                <Image
                  src={user.cover || "/noCover.png"}
                  alt="background"
                  fill
                  className="rounded-md object-cover"
                />
                <Image
                  src={user.avatar || "/noAvatar.png"}
                  alt="background"
                  width={128}
                  height={128}
                  className="w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white object-cover "
                />
              </div>
              <h1 className="mt-20 mb-4 text-2xl font-medium">
                {user.name && user.surname
                  ? user.name + "" + user.surname
                  : user.username}
              </h1>
              <div className="flex items-center justify-center gap-12 mb-4">
                <div className="flex flex-col items-center">
                  <span className="font-medium">{user._count.Post}</span>
                  <span className="text-sm">Posts</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-medium">
                    {user._count.Follower_Follower_followerIdToUser}
                  </span>
                  <span className="text-sm">Followers</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-medium">
                    {user._count.Follower_Follower_followingIdToUser}
                  </span>
                  <span className="text-sm">Following</span>
                </div>
              </div>
            </div>
            <Feed />
          </div>
        </div>
        <div className="hidden lg:block w-[30%]">
          <RightMenu user={user} />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
