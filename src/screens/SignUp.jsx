import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Button,
  Image,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";

import colors from "../../assets/colors";
import Input from "../components/Input";
import fb from "../../assets/logos/fb.png";
import gm from "../../assets/logos/gm.png";

const SignUp = ({ navigation }) => {
  //
  const [button, setButton] = useState(false);

  function navigateToLogin() {
    navigation.navigate("Login");
  }

  function navigatetoGetStarted() {
    navigation.navigate("Getstarted");
  }

  const handleBtn = () => {
    setButton(!button);
  };
  //

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <View style={{ marginVertical: 20, width: "65%" }}>
        <View
          style={{
            flexDirection: "row",
            position: "relative",
            justifyContent: "flex-start",
          }}
        >
          <Text
            style={{
              paddingBottom: 10,
              fontWeight: "200",
              color: "#414141",
              paddingLeft: 20,
              fontSize: 12,
            }}
          >
            Email
          </Text>
          <Text
            style={{ color: colors.register, paddingLeft: 2, fontSize: 12 }}
          >
            *
          </Text>
        </View>
        <View style={styles.formView}>
          <TextInput style={styles.textInput} />
        </View>
      </View>

      <View style={{ marginVertical: 20, width: "65%" }}>
        <View
          style={{
            flexDirection: "row",
            position: "relative",
            justifyContent: "flex-start",
          }}
        >
          <Text
            style={{
              paddingBottom: 10,
              fontWeight: "200",
              color: "#414141",
              paddingLeft: 20,
              fontSize: 12,
            }}
          >
            Password
          </Text>
          <Text
            style={{ color: colors.register, paddingLeft: 2, fontSize: 12 }}
          >
            *
          </Text>
        </View>
        <View style={styles.formView}>
          <TextInput style={styles.textInput} secureTextEntry />
        </View>
      </View>

      <TouchableOpacity
        onPress={handleBtn}
        style={{
          marginVertical: 10,
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingLeft: 90,
          position: "relative",
        }}
      >
        <View style={[!button ? styles.rememberMe : styles.rememerMeTrue]}>
          <Icon
            style={{ position: "absolute", bottom: -2, right: 0.5 }}
            name="check"
            size={14}
            color="#ffffff"
          />
        </View>
        <Text style={{ color: "#4B4B4B" }}>Remember me</Text>
      </TouchableOpacity>

      <View style={{ marginVertical: 30, width: "65%" }}>
        <TouchableOpacity
          onPress={navigatetoGetStarted}
          style={{
            backgroundColor: "#E94057",
            borderRadius: 20,
            borderWidth: 1,
            alignItems: "center",
            paddingVertical: 13,
            borderColor: "#E94057",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 13 }}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 20, alignItems: "center", marginBottom: 40 }}>
        <Text style={{ color: "#4B4B4B" }}>Or continue with</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: 20,
        }}
      >
        <View style={{ width: "30%", marginRight: 15, position: "relative" }}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "#D9D9D9",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 15,
              paddingVertical: 7,
              borderRadius: 10,
            }}
          >
            <Image
              source={fb}
              style={{ width: 50, height: 32, marginRight: 60 }}
            />
            <Text style={{ fontSize: 12, position: "absolute", right: 13 }}>
              Facebook
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ width: "30%", marginLeft: 15 }}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "#D9D9D9",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 15,
              paddingVertical: 7,
              borderRadius: 10,
              paddingBottom: 14,
            }}
          >
            <Image source={gm} style={{ width: 30, height: 25 }} />
            <Text style={{ fontSize: 12, paddingTop: 6 }}>Gmail</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flexDirection: "row", marginTop: 40 }}>
        <Text>Have an account already?</Text>
        <TouchableOpacity onPress={navigateToLogin}>
          <Text style={{ color: "#EC5D70", paddingLeft: 2 }}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  title: {
    fontSize: "25",
    fontWeight: "600",
    marginBottom: 20,
  },
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  textInput: {
    borderWidth: "1",
    borderColor: "#D9D9D9",
    borderRadius: "20px",
    height: 36,
  },
  formView: { width: "100%" },
  rememberMe: {
    width: 14,
    height: 13,
    backgroundColor: "#EC5D70",
    marginRight: 4,
    borderWidth: 1,
    borderColor: "#EC5D70",
  },
  rememerMeTrue: {
    backgroundColor: "#ffffff",
    width: 14,
    height: 13,
    marginRight: 4,
    borderWidth: 1,
    borderColor: "#EC5D70",
  },
});
