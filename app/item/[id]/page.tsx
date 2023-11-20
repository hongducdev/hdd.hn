import { getStory, getStoryWithComments } from "@/apis";
import Comment from "@/components/Comment";
import { formatUnixTime } from "@/utils/functions";
import Link from "next/link";
import React from "react";

interface Params {
  id: number;
}

interface Comment {
  by: string;
  id: number;
  kids: number[];
  parent: number;
  text: string;
  time: number;
  type: string;
}

// generateMetadata is a function that returns a promise
export const generateMetadata = async ({ params }: { params: Params }) => {
  const { id } = params;
  const story = await getStory(id);
  return {
    title: story.title,
    description: story.text,
  };
};

const Page = async ({ params }: { params: Params }) => {
  const { id } = params;
  const story = await getStory(id);

  return (
    <div>
      <div className="flex flex-col gap-3 border-b border-zinc-800 bg-zinc-900 py-4 px-8">
        <p className="text-zinc-400 text-sm">{formatUnixTime(story.time)}</p>
        <h2 className="text-xl font-semibold">{story.title}</h2>
        <Link href={story.url || ""}>
          {story.url ? (
            <p className="text-zinc-400 text-sm">{story.url}</p>
          ) : (
            <p className="text-zinc-400 text-sm">No URL</p>
          )}
        </Link>
        <p className="text-sm text-zinc-400">
          by{" "}
          <span className="font-semibold">
            {story.by ? story.by : "No author"}
          </span>
        </p>
      </div>

      <section className="flex flex-col gap-4 px-8 shadow-md">
        {story.kids?.map((child: number) => (
          <Comment id={child} isParent={true} key={child} />
        ))}
      </section>
    </div>
  );
};

export default Page;
