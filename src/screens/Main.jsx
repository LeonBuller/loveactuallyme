import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: "80%", height: "75%", position: "relative" }}>
        <TouchableOpacity style={styles.backButton} onPress={navigateToHome}>
          <Icon style={{}} name="left" size={19} color="#E94057" />
        </TouchableOpacity>
        <View style={{ position: "absolute", right: 20 }}>
          <TouchableOpacity onPress={navigateToMain}>
            <Text style={{ fontSize: 16, fontWeight: "700", color: "#E94057" }}>
              Skip
            </Text>
          </TouchableOpacity>
        </View>
        <Text>Main</Text>
      </View>
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
