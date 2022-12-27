import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";
import pizza from "./assets/categories/pizza.jpeg";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 10, paddingTop: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard
        imgUrl="https://github.com/mustafiz-codes/delivery-app/blob/master/components/assets/categories/pizza.jpeg"
        title="Title 1"
      />
      <CategoryCard
        imgUrl="https://picsum.photos/200/300?random=16"
        title="testing 2"
      />
      <CategoryCard
        imgUrl="https://picsum.photos/200/300?random=20"
        title="testing 3"
      />
      <CategoryCard
        imgUrl="https://picsum.photos/200/300?random=13"
        title="testing 4"
      />
      <CategoryCard
        imgUrl="https://picsum.photos/200/300?random=16"
        title="testing 5"
      />
      <CategoryCard
        imgUrl="https://picsum.photos/200/300?random=20"
        title="testing 6"
      />
      <CategoryCard
        imgUrl="https://picsum.photos/200/300?random=13"
        title="testing 7"
      />
      <CategoryCard
        imgUrl="https://picsum.photos/200/300?random=16"
        title="testing 8"
      />
      <CategoryCard
        imgUrl="https://picsum.photos/200/300?random=20"
        title="testing 9"
      />
    </ScrollView>
  );
};

export default Categories;
