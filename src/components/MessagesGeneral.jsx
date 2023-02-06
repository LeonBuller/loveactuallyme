import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

import image1 from "../../assets/matches/1.png";

const MessageGeneral = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Image width={60} height={60} source={image1} style={styles.image} />
          <View style={styles.leftSide}>
            <Text style={styles.leftText}>Lisa</Text>
            <Text style={styles.leftText}>Typing...</Text>
          </View>

          <View style={styles.col}>
            <Text style={styles.timeRecieved}>20 mins</Text>
            <View style={styles.redCircle}>
              <Text style={styles.circleInside}>2</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Image width={60} height={60} source={image1} style={styles.image} />
          <View style={styles.leftSide}>
            <Text style={styles.leftText}>Jane</Text>
            <Text style={styles.leftText}>I think ill be free tommorow</Text>
          </View>

          <View style={styles.col}>
            <Text style={styles.timeRecieved}>20 mins</Text>
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Image width={60} height={60} source={image1} style={styles.image} />
          <View style={styles.leftSide}>
            <Text style={styles.leftText}>Amelie</Text>
            <Text style={styles.leftText}>I am on my way.</Text>
          </View>

          <View style={styles.col}>
            <Text style={styles.timeRecieved}>20 mins</Text>
            <View style={styles.redCircle}>
              <Text style={styles.circleInside}>1</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Image width={60} height={60} source={image1} style={styles.image} />
          <View style={styles.leftSide}>
            <Text style={styles.leftText}>Amelie</Text>
            <Text style={styles.leftText}>I am on my way.</Text>
          </View>

          <View style={styles.col}>
            <Text style={styles.timeRecieved}>20 mins</Text>
            <View style={styles.redCircle}>
              <Text style={styles.circleInside}>1</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Image width={60} height={60} source={image1} style={styles.image} />
          <View style={styles.leftSide}>
            <Text style={styles.leftText}>Amelie</Text>
            <Text style={styles.leftText}>I am on my way.</Text>
          </View>

          <View style={styles.col}>
            <Text style={styles.timeRecieved}>20 mins</Text>
            <View style={styles.redCircle}>
              <Text style={styles.circleInside}>1</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Image width={60} height={60} source={image1} style={styles.image} />
          <View style={styles.leftSide}>
            <Text style={styles.leftText}>Amelie</Text>
            <Text style={styles.leftText}>I am on my way.</Text>
          </View>

          <View style={styles.col}>
            <Text style={styles.timeRecieved}>20 mins</Text>
            <View style={styles.redCircle}>
              <Text style={styles.circleInside}>1</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default MessageGeneral;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 36,
  },
  wrapper: { flexDirection: "row", position: "relative" },
  image: { resizeMode: "cover", marginLeft: 0 },
  leftSide: {
    flexDirection: "column",
    borderBottomWidth: 1,
    width: "75%",
    borderColor: "#D8D8D8",
    marginLeft: 8,
  },
  leftText: { marginBottom: 10, fontSize: 12 },
  col: { position: "absolute", right: 0, flexDirection: "column" },
  timeRecieved: { fontSize: 11, color: "#9F9F9F" },
  redCircle: {
    backgroundColor: "#D31F1F",
    width: 18,
    height: 18,
    borderRadius: 55,
    marginVertical: 8,
    marginLeft: 10,
  },
  circleInside: { color: "white", textAlign: "center" },
});
