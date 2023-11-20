import axios from "axios";

export const getTopStories = async () => {
  const response = await axios.get(
    "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
  );

  return response.data;
};

export const getNewStories = async () => {
  const response = await axios.get(
    "https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty"
  );

  return response.data;
};

export const getBestStories = async () => {
  const response = await axios.get(
    "https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty"
  );

  return response.data;
};

export const getAskStories = async () => {
  const response = await axios.get(
    "https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty"
  );

  return response.data;
};

export const getShowStories = async () => {
  const response = await axios.get(
    "https://hacker-news.firebaseio.com/v0/showstories.json?print=pretty"
  );

  return response.data;
};

export const getJobStories = async () => {
  const response = await axios.get(
    "https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty"
  );

  return response.data;
};

export const getStory = async (id: number) => {
  const response = await axios.get(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
  );

  return response.data;
};

export const getComment = async (id: number) => {
  const response = await axios.get(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
  );

  return response.data;
};

export const getStoryWithComments = async (storyId: number) => {
  const story = await getStory(storyId);

  if (story.kids) {
    story.comments = [];

    for (let commentId of story.kids) {
      const comment = await getComment(commentId);
      story.comments.push(comment);
    }
  }

  return story;
};
