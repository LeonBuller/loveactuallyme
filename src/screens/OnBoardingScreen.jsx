import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    image: require("../../assets/woman.png"),
    title: "Welcome",
    subtitle:
      "Here will be the welcoming text of the first screen. Add what you like",
  },
  {
    id: "2",
    image: require("../../assets/woman.png"),
    title: "Welcome",
    subtitle:
      "Here will be the welcoming text of the first screen. Add what you like",
  },
  {
    id: "3",
    image: require("../../assets/woman.png"),
    title: "Welcome",
    subtitle:
      "Here will be the welcoming text of the first screen. Add what you like",
  },
];

const Slide = ({ item }) => {
  <View style={{ alignItems: "center" }}>
    <Image
      source={item.image}
      style={{ height: "75%", width, resizeMode: "contain" }}
    />
  </View>;
};
//

const OnBoardingScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={slides}
        contentContainerStyle={{ height: height * 0.75 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({ item }) => <Slide item={item} />}
      />
    </SafeAreaView>
  );
};

export default OnBoardingScreen;
