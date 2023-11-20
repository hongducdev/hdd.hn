import { getNewStories, getStory } from "@/apis";
import PostItem from "@/components/PostItem";
import React from "react";

export const newStories = async () => {
  const storyIds = await getNewStories();

  const stories = await Promise.all(
    storyIds.slice(0, 30).map(async (id: number) => {
      const story = await getStory(id);
      return {
        id,
        title: story.title,
        score: story.score,
        time: story.time,
        author: story.by,
        url: story.url,
        descendants: story.descendants,
      };
    })
  );

  return {
    props: {
      stories,
    },
  };
};

const NewPage = async () => {
  const {
    props: { stories },
  } = await newStories();

  return (
    <div>
      <ul className="flex flex-col gap-4">
        {stories.map((story) => (
          <PostItem {...story} key={story.id} />
        ))}
      </ul>
    </div>
  );
};

export default NewPage;
