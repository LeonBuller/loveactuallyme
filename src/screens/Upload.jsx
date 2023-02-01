import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Upload = () => {
  return (
    <View style={styles.container}>
      <View style={{}}>
        <Text style={{ fontSize: 20, fontWeight: "600" }}>
          Add Your Best Photos
        </Text>
        <Text style={{ marginTop: 15, fontSize: 12 }}>
          Add your best photos to boost your matches and engagement.
        </Text>
      </View>

      <View style={{ height: "60%", marginTop: 30, marginLeft: 20 }}>
        <View style={{ flexDirection: "column" }}>
          <View style={{ flexDirection: "row" }}>
            {/* 1st Item */}
            <View
              style={{
                height: 193,
                width: 139,
                backgroundColor: "#fff",
                marginRight: 10,
                borderWidth: 1,
                borderRadius: 12,
                borderColor: "#E94057",
                borderStyle: "dashed",
              }}
            ></View>
            <View
              style={{
                height: 193,
                width: 139,
                backgroundColor: "#fff",
                marginLeft: 10,
                borderWidth: 1,
                borderRadius: 12,
                borderColor: "#E94057",
                borderStyle: "dashed",
              }}
            ></View>
          </View>

          <View style={{ flexDirection: "row", marginTop: 40 }}>
            {/* 1st Item */}
            <View
              style={{
                height: 193,
                width: 139,
                backgroundColor: "#fff",
                marginRight: 10,
                borderWidth: 1,
                borderRadius: 12,
                borderColor: "#E94057",
                borderStyle: "dashed",
              }}
            ></View>
            <View
              style={{
                height: 193,
                width: 139,
                backgroundColor: "#fff",
                marginLeft: 10,
                borderWidth: 1,
                borderRadius: 12,
                borderColor: "#E94057",
                borderStyle: "dashed",
              }}
            ></View>
          </View>
        </View>
      </View>

      <View style={{ marginLeft: 20 }}>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderRadius: 17,
            borderColor: "#E94057",
            backgroundColor: "#E94057",
            paddingHorizontal: 60,
            paddingVertical: 10,
          }}
        >
          <Text style={{ fontSize: 15, color: "#ffffff" }}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Upload;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    width: "70%",
    marginHorizontal: 50,
  },
});
