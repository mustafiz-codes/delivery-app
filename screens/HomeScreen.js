import { View, Text, Image, SafeAreaView, TextInput } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassCircleIcon,
} from "react-native-heroicons/solid";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-black pt-5 px-4">
      <Text className="mt-8">
        {/* header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2 w-full">
          <View className="">
            <Image
              source={{
                uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngall.com%2Fdelivery-png%2Fdownload%2F101209&psig=AOvVaw3cB7QCkAfqN49XOko2V3nU&ust=1671969725203000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCOjd7d2akvwCFQAAAAAdAAAAABAZ",
              }}
              className="h-7 w-7 bg-yellow-400 rounded-full"
            />
          </View>
          <View className="flex-1 w-auto">
            <Text className="text-gray-200 text-xs">Delivery Now!</Text>
            <Text className="font-bold text-white text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#FDDA0D" />
            </Text>
          </View>
          <View className="">
            <UserIcon size={35} color="#FDDA0D" />
          </View>
        </View>

        {/* search */}
        <View className="flex-row items-center pb-2 w-full">
          <View className="flex-row items-center bg-gray-300 rounded-xl px-1">
            <MagnifyingGlassCircleIcon size={20} color="#FDDA0D" />
            <TextInput
              placeholder="Restaurant or cuisines"
              className="flex-1 px-2"
            />
          </View>
          <AdjustmentsVerticalIcon color="#FDDA0D" />
        </View>
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
