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

  const randomPicture = (type = null) => {
    let picUrl = "";
    if (type === "maleThumbnail") {
      picUrl =
        "https://randomuser.me/api/portraits/thumb/men/" +
        Math.floor(Math.random() * 100) +
        ".jpg";
    } else if (type === "femaleThumbnail") {
      picUrl =
        "https://randomuser.me/api/portraits/thumb/men/" +
        Math.floor(Math.random() * 100) +
        ".jpg";
    } else {
      picUrl =
        "https://picsum.photos/200/300?random=" +
        Math.floor(Math.random() * 100);
    }
    console.log("hi " + picUrl);
    return picUrl;
  };

  return (
    <SafeAreaView className="bg-zinc-900 px-4 flex-1">
      <View className="mt-8 w-full">
        {/* header */}
        <View className="flex pb-3 items-center space-x-2 flex-row">
          <View className="flex-none">
            <Image
              source={{
                uri: randomPicture(),
              }}
              className="h-7 w-7 bg-yellow-400 rounded-full"
            />
          </View>
          <View className="flex-1">
            <Text className="text-zinc-300 text-xs">Delivery Now!</Text>
            <Text className="font-bold text-white text-xl">
              Current Location
              <ChevronDownIcon size={25} color="#FDDA0D" />
            </Text>
          </View>
          <View className="flex-none">
            <Image
              source={{
                uri: randomPicture("maleThumbnail"),
              }}
              className="h-7 w-7 bg-yellow-400 rounded-full"
            />
          </View>
        </View>

        {/* search */}
        <View className="flex-row pb-2 items-center space-x-2">
          <View className="flex-row flex-1 items-center bg-gray-300 rounded-xl px-1">
            <MagnifyingGlassCircleIcon size={30} color="black" />
            <TextInput
              placeholder="Restaurants and cuisines"
              className="flex-1 px-2 py-2"
            />
          </View>
          <AdjustmentsVerticalIcon size={30} color="#FDDA0D" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
