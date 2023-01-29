import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

const Input = ({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  ...props
}) => {
  return (
    <View style={styles.container}>
      <Text style>{label}</Text>
      <TextInput style={styles.inputContainer}></TextInput>
    </View>
  );
};

export default Input;
const styles = StyleSheet.create({
  label: {},
  container: {
    marginBottom: 20,
  },
  inputContainer: {
    borderColor: "#EC5D70",
    height: "36",
    borderWidth: "1",
    backgroundColor: "#fff",
    flexDirection: "row",
    borderRadius: "20",
  },
});
