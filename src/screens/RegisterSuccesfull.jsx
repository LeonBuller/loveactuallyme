import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const RegisterSuccesfull = ({ navigation }) => {
  function navigateToSlide() {
    navigation.navigate("Slide");
  }
  return (
    <View style={styles.container}>
      <Text>You can start sliding now!</Text>
      <View style={{ marginTop: 20 }}>
        <TouchableOpacity style={styles.button} onPress={navigateToSlide}>
          <Text style={{ color: "#ffffff" }}>Start Sliding</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterSuccesfull;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    width: "70%",
    marginHorizontal: 50,
  },
  button: {
    borderWidth: 1,
    borderRadius: 17,
    borderColor: "#E94057",
    backgroundColor: "#E94057",
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
});
