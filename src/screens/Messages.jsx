import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

import Search from "react-native-vector-icons/AntDesign";
import Filter from "react-native-vector-icons/Ionicons";

const Messages = () => {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", position: "relative" }}>
        <Text style={styles.title}>Messages</Text>

        <View style={{ position: "absolute", right: -160, top: 5 }}>
          <View style={styles.shadowCircle}>
            <TouchableOpacity style={styles.filterBtn}>
              <Filter
                size={18.5}
                name="md-filter-outline"
                color="#E94057"
                style={styles.filterIconSearch}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Search
          size={18.5}
          name="search1"
          color="#99999A"
          style={styles.searchIconStyle}
        />
        <TextInput placeholder="Search" style={styles.inputStyle}></TextInput>
      </View>

      {/* Search Results */}

      <View style={{ height: "55%" }}></View>
    </View>
  );
};

export default Messages;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "flex-start",
    alignItems: "flex-start",
    marginHorizontal: 50,
    position: "relative",
  },
  inputStyle: {
    width: 300,
    borderWidth: 1,
    borderRadius: 15,
    paddingVertical: 15,
    paddingLeft: 43,
    borderColor: "#E8E6EA",
  },
  inputContainer: { marginTop: 25, flexDirection: "row", position: "relative" },
  searchIconStyle: {
    paddingLeft: 50,
    position: "absolute",
    left: -34,
    top: 15,
  },
  title: {
    fontSize: 26,
    marginLeft: 7,
  },
  filterIconSearch: { position: "absolute", left: 3.5, top: 3.5 },
  filterBtn: {},
  shadowCircle: {
    width: 26,
    height: 26,
    backgroundColor: "white",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
    borderRadius: 55,
    position: "relative",
  },
});
