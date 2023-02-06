import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import fb from "../../assets/logos/fb.png";
import gm from "../../assets/logos/gm.png";
import apple from "../../assets/logos/apple.png";
import Icon from "../../assets/Icon.jsx";
const Home = ({ navigation }) => {
  function navigate() {
    navigation.navigate("Signup");
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <View
        style={{
          flexDirection: "col",
          justifyContent: "center",
          marginBottom: 20,
        }}
      >
        <View style={{ width: 247, marginVertical: 17, position: "relative" }}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "#9E9D9D",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 15,
              paddingVertical: 7,
              borderRadius: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={fb} style={{ marginRight: 30 }} />
              <Text style={{ fontSize: 12, position: "absolute", right: -21 }}>
                Facebook
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ width: 247, marginVertical: 17, position: "relative" }}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "#9E9D9D",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 15,
              paddingVertical: 7,
              borderRadius: 20,
              paddingBottom: 14,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={gm} style={{ marginRight: 30 }} />
              <Text style={{ fontSize: 12, position: "absolute", right: -5 }}>
                Gmail
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ width: 247, marginTop: 17, position: "relative" }}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "#9E9D9D",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 15,
              paddingVertical: 7,
              borderRadius: 20,
              paddingBottom: 14,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={apple} style={{ marginRight: 30 }} />
              <Text style={{ fontSize: 12, position: "absolute", right: -10 }}>
                Apple
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <Text
        style={{
          fontSize: 20,
          fontWeight: "600",
          marginTop: 10,
          marginBottom: 30,
        }}
      >
        Or
      </Text>

      <TouchableOpacity onPress={navigate} style={styles.button}>
        <Text style={{ color: "#ffffff" }}>Login with Password</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row", paddingTop: 90 }}>
        <Text>Don’t have an account?</Text>
        <TouchableOpacity onPress={navigate}>
          <Text style={{ color: "#EC5D70", paddingLeft: 2 }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
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
  title: {
    fontSize: "25",
    fontWeight: "600",
    marginBottom: 40,
    textAlign: "center",
  },
  button: {
    borderWidth: 1,
    borderColor: "#E94057",
    backgroundColor: "#E94057",
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: 247,
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    paddingLeft: 55,
    marginLeft: 64,
    marginRight: 64,
    borderRadius: 20,
  },
});
