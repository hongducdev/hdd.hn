import { View, Text } from "react-native";
import React from "react";
import { formatUnixTime } from "../utils/functions";
import Icon from "react-native-vector-icons/FontAwesome";

const PostItem = ({ post, navigation }) => {
  return (
    <View className=" border border-gray-300 dark:border-zinc-800 bg-neutral-100 dark:bg-zinc-900 p-4 rounded-md flex items-center flex-row justify-between mb-1 mx-1">
      <View>
        <Text className="text-xs text-zinc-800 dark:text-gray-500 font-medium">
          {formatUnixTime(post.time)}
        </Text>
        <Text
          className="text-base font-semibold my-1 max-w-[68vw] text-zinc-900 dark:text-gray-400"
          onPress={() => {
            navigation.navigate("Detail", {
              id: post.id,
            });
          }}
        >
          {post.title}
        </Text>
        <View className="flex items-center flex-row gap-2">
          <View className="flex flex-row items-center gap-2">
            <Icon name="caret-up" size={18} color="#ccc" />
            <Text className="text-gray-600 dark:text-gray-500 font-semibold">
              {post.score}
            </Text>
          </View>
          <Text className="font-bold">·</Text>
          <View className="flex items-center gap-1 flex-row">
            <Text>by </Text>
            <Text className="font-semibold text-gray-600 dark:text-gray-500">
              {post.by}
            </Text>
          </View>
        </View>
      </View>
      <View>
        {post.descendants >= 0 && (
          <View className="border border-gray-300 dark:border-zinc-800 bg-neutral-100 dark:bg-zinc-900 rounded-md flex justify-center items-center w-[18vw] h-10">
            <View className="flex flex-row gap-2 items-center">
              <Icon name="comment" size={16} color="#ccc" />
              <Text className="text-sm font-medium cursor-pointer">
                {post.descendants}
              </Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default PostItem;
