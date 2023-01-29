import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const OnBoardingItem = ({ item }) => {
  return (
    <View style={[styles.container]}>
      <Image source={item.image} style={[styles.image]} />
      <View style={{ flex: 0.3 }}>
        <Text>{item.title} </Text>
        <Text>{item.subtitle} </Text>
      </View>
    </View>
  );
};

export default OnBoardingItem;

const styles = StyleSheet.create(
  {
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
  },
  { image: { flex: 0.7, justifyContent: "center" } }
);
