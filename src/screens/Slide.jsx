import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

import Close from "react-native-vector-icons/Ionicons";
import Chat from "react-native-vector-icons/Ionicons";
import Heart from "react-native-vector-icons/Fontisto";

const Slide = ({ navigation }) => {
  function navigateToMessages() {
    navigation.navigate("Messages");
  }
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Discover</Text>
        <View style={styles.circle}></View>
      </View>
      <View style={styles.imageContainer}>
        <View style={styles.imageBox}></View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            position: "absolute",
            bottom: 65,
          }}
        >
          <TouchableOpacity>
            <View style={styles.leftBtn}>
              <Close
                size={30}
                name="close"
                color="#FF3131"
                style={styles.closeIcon}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.midBtn}>
              <Heart
                size={25}
                name="heart"
                color="white"
                style={styles.heartIcon}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.rightBtn}>
              <Chat
                size={25}
                name="ios-chatbox-ellipses-sharp"
                color="blue"
                style={styles.chatIcon}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={navigateToMessages}>
          <Text>Go To Messages</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Slide;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    width: "70%",
    marginHorizontal: 50,
    position: "relative",
  },
  title: { fontWeight: "600", fontSize: 25 },
  circle: {
    width: 42,
    height: 42,
    backgroundColor: "#FFFFFF",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
    borderRadius: 55,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginBottom: 50,
  },
  imageContainer: {
    width: 291,
    height: 406,
    backgroundColor: "#ffffff",
    borderRadius: 7,
    marginBottom: 50,
    marginLeft: 10,
    position: "relative",
    shadowColor: "#000000",
  },
  imageBox: {
    width: 257,
    height: 295,
    backgroundColor: "#000",
    borderRadius: 7,
    marginBottom: 50,
    position: "absolute",
    left: 16,
    top: 23,
  },
  leftBtn: {
    width: 49,
    height: 49,
    backgroundColor: "#ffffff",
    shadowColor: "#000000",
    borderRadius: 55,
    left: 20,
    position: "absolute",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
  },
  midBtn: {
    width: 49,
    height: 49,
    backgroundColor: "#DF3DED",
    shadowColor: "#000000",
    left: 115,
    borderRadius: 55,
    position: "absolute",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  rightBtn: {
    width: 49,
    height: 49,
    backgroundColor: "gray",
    shadowColor: "#000000",
    borderRadius: 55,
    left: 215,
    position: "absolute",
    backgroundColor: "#FFFFFF",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  closeIcon: {
    position: "absolute",
    left: 9.5,
    top: 8,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  chatIcon: {
    position: "absolute",
    left: 12,
    top: 12,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  heartIcon: {
    position: "absolute",
    left: 10,
    top: 12,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
});
