import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { MapPinIcon, StarIcon } from "react-native-heroicons/solid";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity className="bg-black drop-shadow-sm mr-3">
      <Image source={{ uri: imgUrl }} className="w-64 h-36 rounded" />

      <View className="px-3 py-4">
        <Text className="text-white font-bold text-lg">{title}</Text>
        <View className="flex-row items-center space-x-2">
          <StarIcon size={20} color="#FDDA0D" opacity={0.8} />
          <Text className="text-gray-300">
            {rating} - {genre}
          </Text>
        </View>

        <View className="flex-row items-center space-x-2">
          <MapPinIcon size={20} color="#FDDA0D" opacity={0.8} />
          <Text className="text-gray-300">Nearby - {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
