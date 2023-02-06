import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";

import CheckIcon from "react-native-vector-icons/Feather";
import LeftIcon from "react-native-vector-icons/AntDesign";

const GetStarted = ({ navigation }) => {
  //
  const [social, setSocial] = useState(false);
  const [dating, setDating] = useState(false);
  const [profesionall, setProfesionall] = useState(false);

  const handleSocial = () => {
    setSocial(!social);
  };

  const handleDating = () => {
    setDating(!dating);
  };

  const handleProfesional = () => {
    setProfesionall(!profesionall);
  };

  function navigateToSlide() {
    navigation.navigate("Slide");
  }

  function navigateToHome() {
    navigation.navigate("Home");
  }

  function navigateToInterested() {
    navigation.navigate("Interested");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: "80%",
          height: "20%",
          position: "absolute",
          top: 120,
        }}
      >
        <TouchableOpacity style={styles.backButton} onPress={navigateToHome}>
          <LeftIcon style={{}} name="left" size={19} color="#E94057" />
        </TouchableOpacity>

        <View style={{ position: "absolute", right: 20 }}>
          <TouchableOpacity onPress={navigateToSlide}>
            <Text style={{ fontSize: 16, fontWeight: "700", color: "#E94057" }}>
              Skip
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.lookingForContainer}>
        <View style={{}}>
          <Text style={{ fontSize: 25, fontWeight: "600" }}>
            I am looking for
          </Text>
        </View>
      </View>

      <View style={{ position: "absolute", left: 65 }}>
        <TouchableOpacity
          onPress={handleSocial}
          style={[social ? styles.selectedButton : styles.unSelectedButton]}
        >
          <View style={{ flexDirection: "row" }}>
            <Text
              style={[social ? styles.textSelected : styles.textUnSelected]}
            >
              Social
            </Text>
            <CheckIcon
              name="check"
              size={23}
              color="#ADAFBB"
              style={[
                social
                  ? styles.iconSelectedSocialAndDating
                  : styles.iconUnSelectedSocialAndDating,
              ]}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleDating}
          style={[dating ? styles.selectedButton : styles.unSelectedButton]}
        >
          <View style={{ flexDirection: "row" }}>
            <Text
              style={[dating ? styles.textSelected : styles.textUnSelected]}
            >
              Dating
            </Text>
            <CheckIcon
              name="check"
              size={23}
              color="#ADAFBB"
              style={[
                dating
                  ? styles.iconSelectedSocialAndDating
                  : styles.iconUnSelectedSocialAndDating,
              ]}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleProfesional}
          style={[
            profesionall ? styles.selectedButton : styles.unSelectedButton,
          ]}
        >
          <View style={{ flexDirection: "row" }}>
            <Text
              style={[
                profesionall ? styles.textSelected : styles.textUnSelected,
              ]}
            >
              Professional
            </Text>
            <CheckIcon
              name="check"
              size={23}
              color="#ADAFBB"
              style={[
                profesionall
                  ? styles.iconSelectedProf
                  : styles.iconUnSelectedProf,
              ]}
            />
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ position: "absolute", bottom: 180, right: 80 }}>
        <TouchableOpacity
          style={styles.continue}
          onPress={navigateToInterested}
        >
          <Text style={{ color: "#ffffff" }}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// !selected ? styles.selectedButton : styles.unSelectedButton

export default GetStarted;

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
    position: "relative",
  },
  backButton: {
    position: "absolute",
    top: -20,
    borderWidth: 2,
    borderColor: "#E8E6EA",
    padding: 20,
    borderRadius: 15,
  },
  selectedButton: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#E94057",
    backgroundColor: "#E94057",
    width: 250,
    paddingLeft: 20,
    paddingVertical: 15,
    borderRadius: 20,
  },
  unSelectedButton: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#E8E6EA",
    width: 250,
    paddingLeft: 20,
    paddingVertical: 15,
    borderRadius: 20,
  },
  textSelected: { color: "#ffffff", fontSize: 16, fontWeight: "600" },
  textUnSelected: { color: "#000000", fontSize: 16, fontWeight: "600" },

  iconSelectedProf: { right: -92, color: "#ffffff" },
  iconSelectedSocialAndDating: { right: -138, color: "#ffffff" },

  iconUnSelectedProf: { right: -92 },
  iconUnSelectedSocialAndDating: { right: -138 },
  continue: {
    borderWidth: 1,
    borderColor: "#E94057",
    backgroundColor: "#E94057",
    paddingVertical: 15,
    paddingHorizontal: 90,
    borderRadius: 20,
    fontWeight: 600,
  },
  lookingForContainer: {
    width: "80%",
    height: "55%",
    flexDirection: "column",
    alignContent: "center",
    textAlign: "center",
    justifyContent: "flex-start",
    paddingLeft: 12,
    position: "absolute",
    top: 230,
  },
});
