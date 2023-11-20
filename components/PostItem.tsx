import { formatUnixTime } from "@/utils/functions";
import Link from "next/link";
import React from "react";
import { RiArrowDropUpFill, RiChatSmile2Fill } from "react-icons/ri";

interface Story {
  id: number;
  title: string;
  score: number;
  time: number;
  author: string;
  url: string;
  descendants: number;
}

const PostItem = (story: Story) => {
  return (
    <li
      key={story.id}
      className=" bg-[#18181b] border border-[#27272a] p-4 rounded-md max-w-[600px] w-full mx-auto flex items-center gap-5 justify-between"
    >
      <div>
        <p className="text-sm text-gray-500 font-medium">
          {formatUnixTime(story.time)}
        </p>
        <Link href={story.url || ""}>
          <p className="text-xl font-medium my-3">{story.title}</p>
        </Link>
        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center">
            <RiArrowDropUpFill className="text-3xl" />
            <p className="text-gray-500 font-semibold">{story.score}</p>
          </div>
          <span className="font-bold">·</span>
          <div className="flex items-center gap-1">
            <p>by </p>
            <p className="text-gray-500 font-semibold">{story.author}</p>
          </div>
        </div>
      </div>
      {story.descendants >= 0 && (
        <Link href={`/item/${story.id}`}>
          <div className="flex items-center gap-2 bg-[#18181b] border border-[#27272a] py-2 px-4 rounded-md">
            <RiChatSmile2Fill className="text-2xl" />
            <span>{story.descendants}</span>
          </div>
        </Link>
      )}
    </li>
  );
};

export default PostItem;
