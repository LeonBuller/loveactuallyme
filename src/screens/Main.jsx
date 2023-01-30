import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";

import LeftIcon from "react-native-vector-icons/AntDesign";

const Main = () => {
  function navigateToHome() {
    navigation.navigate("Home");
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Main</Text>
    </SafeAreaView>
  );
};

export default Main;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    paddingTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});
