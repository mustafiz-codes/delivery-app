import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ title, description }) => {
  return (
    <View className="px-4 mt-4">
      <View className="flex-row items-center justify-between ">
        <Text className="text-white text-lg">{title}</Text>
        <ArrowRightIcon color="#FDDA0D" />
      </View>
      <Text className="text-zinc-400 py-1">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 0 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        <RestaurantCard
          id={111}
          imgUrl="https://picsum.photos/200/300?random=16"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="111 Main St. London"
          short_description="This is a test description"
          dishes={[]}
          long={2}
          lat={1}
        />

        <RestaurantCard
          id={111}
          imgUrl="https://picsum.photos/200/300?random=16"
          title="Pizza Con"
          rating={4.5}
          genre="Italian"
          address="111 Main St. London"
          short_description="This is a test description"
          dishes={[]}
          long={2}
          lat={1}
        />

        <RestaurantCard
          id={111}
          imgUrl="https://picsum.photos/200/300?random=16"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="111 Main St. London"
          short_description="This is a test description"
          dishes={[]}
          long={2}
          lat={1}
        />

        <RestaurantCard
          id={111}
          imgUrl="https://picsum.photos/200/300?random=16"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="111 Main St. London"
          short_description="This is a test description"
          dishes={[]}
          long={2}
          lat={1}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
