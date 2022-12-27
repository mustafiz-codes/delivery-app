import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

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
    <TouchableOpacity>
      <Text>RestaurantCard</Text>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
