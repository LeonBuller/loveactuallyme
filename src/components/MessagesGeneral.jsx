import { View, Text, Image } from "react-native";
import React from "react";

import image1 from "../../assets/matches/1.png";

const MessageGeneral = () => {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingBottom: 25,
        }}
      >
        <View style={{ flexDirection: "row", position: "relative" }}>
          <Image
            width={60}
            height={60}
            source={image1}
            style={{ resizeMode: "cover", marginLeft: 0 }}
          />
          <View
            style={{
              flexDirection: "column",
              borderBottomWidth: 1,
              width: "75%",
              borderColor: "#D8D8D8",
              marginLeft: 8,
            }}
          >
            <Text style={{ marginBottom: 10, fontSize: 12 }}>Lisa</Text>
            <Text style={{ paddingBottom: 10, fontSize: 12 }}>Typing...</Text>
          </View>
          <View
            style={{ position: "absolute", right: 0, flexDirection: "column" }}
          >
            <Text style={{ fontSize: 11, color: "#9F9F9F" }}>20 mins</Text>
            <View
              style={{
                backgroundColor: "#D31F1F",
                width: 18,
                height: 18,
                borderRadius: 55,
                marginVertical: 8,
                marginLeft: 10,
              }}
            >
              <Text style={{ color: "white", textAlign: "center" }}>2</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingBottom: 25,
        }}
      >
        <View style={{ flexDirection: "row", position: "relative" }}>
          <Image
            width={60}
            height={60}
            source={image1}
            style={{ resizeMode: "cover", marginLeft: 0 }}
          />
          <View
            style={{
              flexDirection: "column",
              borderBottomWidth: 1,
              width: "75%",
              borderColor: "#D8D8D8",
              marginLeft: 8,
            }}
          >
            <Text style={{ marginBottom: 10, fontSize: 12 }}>Lindsey</Text>
            <Text style={{ paddingBottom: 10, fontSize: 12 }}>
              I think ill be free tommorow
            </Text>
          </View>
          <View
            style={{ position: "absolute", right: 0, flexDirection: "column" }}
          >
            <Text style={{ fontSize: 11, color: "#9F9F9F" }}>20 mins</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingBottom: 25,
        }}
      >
        <View style={{ flexDirection: "row", position: "relative" }}>
          <Image
            width={60}
            height={60}
            source={image1}
            style={{ resizeMode: "cover", marginLeft: 0 }}
          />
          <View
            style={{
              flexDirection: "column",
              borderBottomWidth: 1,
              width: "75%",
              borderColor: "#D8D8D8",
              marginLeft: 8,
            }}
          >
            <Text style={{ marginBottom: 10, fontSize: 12 }}>Amelie</Text>
            <Text style={{ paddingBottom: 10, fontSize: 12 }}>
              I am on my way.
            </Text>
          </View>
          <View
            style={{ position: "absolute", right: 0, flexDirection: "column" }}
          >
            <Text style={{ fontSize: 11, color: "#9F9F9F" }}>20 mins</Text>
            <View
              style={{
                backgroundColor: "#D31F1F",
                width: 18,
                height: 18,
                borderRadius: 55,
                marginVertical: 8,
                marginLeft: 10,
              }}
            >
              <Text style={{ color: "white", textAlign: "center" }}>1</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default MessageGeneral;
