import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";

const CategoryCard = ({ imgUrl, title }) => {
  console.log("test ", imgUrl, typeof imgUrl);

  return (
    <TouchableOpacity className="mr-3 mb-2">
      <Image
        source={{ uri: imgUrl }}
        className="w-20 h-20 rounded bg-green-300"
      />
      <Text className="absolute align-center bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
