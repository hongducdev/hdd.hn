import { View, Text } from "react-native";
import React from "react";

const DetailScreen = ({ route }) => {
  const { id } = route.params;
  return (
    <View>
      <Text>DetailScreen</Text>
    </View>
  );
};

export default DetailScreen;
