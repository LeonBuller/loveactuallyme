import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import Matches from "../components/Matches";

import Search from "react-native-vector-icons/AntDesign";
import Filter from "react-native-vector-icons/Ionicons";

import mockdata from "../../mockdata";

import image1 from "../../assets/matches/1.png";
import MessageGeneral from "../components/MessagesGeneral";

const Messages = () => {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.titleAndFilter}>
        <Text style={styles.title}>Messages</Text>

        <View style={styles.filterBtnContainer}>
          <View style={styles.shadowCircle}>
            <TouchableOpacity style={styles.filterBtn}>
              <Filter
                size={27}
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
          color="#cfcfcf"
          style={styles.searchIconStyle}
        />
        <TextInput
          onChangeText={(newText) => setText(newText)}
          defaultValue={text}
          placeholder="Search"
          style={styles.inputStyle}
        ></TextInput>
      </View>

      {/* Matches  */}

      <View style={styles.matchesContainer}>
        <Text style={styles.messagesAndMatchesTitle}>Matches</Text>
        <ScrollView
          scrollEventThrottle={16}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <Matches />
        </ScrollView>
      </View>

      {/* Messages  */}

      <View style={styles.messagesContainer}>
        <Text style={styles.messagesAndMatchesTitle}>Messages</Text>
        <ScrollView
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ marginTop: 25 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {/* One Item */}
              <MessageGeneral />
            </ScrollView>
          </View>
        </ScrollView>
      </View>
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
    fontSize: 13,
    borderRadius: 22,
  },
  inputContainer: { marginTop: 25, flexDirection: "row", position: "relative" },
  searchIconStyle: {
    paddingLeft: 50,
    position: "absolute",
    left: -34,
    top: 15,
  },
  title: {
    fontSize: 30,
    marginLeft: 7,
    fontWeight: "700",
  },
  filterIconSearch: { position: "absolute", left: 8, top: 8 },
  filterBtn: {},
  shadowCircle: {
    width: 45,
    height: 45,
    backgroundColor: "white",
    borderRadius: 15,
    position: "relative",
    borderWidth: 1.2,
    borderColor: "#E8E6EA",
  },
  titleAndFilter: { flexDirection: "row", position: "relative" },
  filterBtnContainer: { position: "absolute", right: -135, top: -2 },
  matchesContainer: {
    height: "12%",
    width: "105%",
    marginBottom: 30,
    marginTop: 10,
  },
  messagesContainer: {
    height: "50%",
    width: "100%",
    marginBottom: 30,
  },
  messagesAndMatchesTitle: {
    fontSize: 17,
    fontWeight: "600",
    paddingVertical: 10,
  },
});
