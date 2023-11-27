import { View, ScrollView, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PostItem from "../components/PostItem";
import { getStory, getTopStories } from "../apis";

const HomeScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const storyIds = await getTopStories();

        const stories = await Promise.all(
          storyIds.slice(0, 50).map(async (storyId) => {
            const story = await getStory(storyId);
            return story;
          })
        );
        setPosts(stories);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic" className="">
        <View className="flex flex-col mt-2">
          {loading ? (
            <View className="flex h-full flex-1 flex-col items-center justify-center">
              <ActivityIndicator size="large" color="#ccc" />
            </View>
          ) : (
            posts.map((post) => (
              <PostItem key={post.id} post={post} navigation={navigation} />
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
