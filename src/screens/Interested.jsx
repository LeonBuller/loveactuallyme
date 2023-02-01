import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";

import karaokered from "../../assets/interests/karaokered.png";
import karaokewhite from "../../assets/interests/karaokewhite.png";

const Interested = ({ navigation }) => {
  const [karaoke, setKaraoke] = useState(false);
  const [shopping, setShopping] = useState(false);
  const [photography, setPhotography] = useState(false);
  const [yoga, setYoga] = useState(false);
  const [cooking, setCooking] = useState(false);
  const [running, setRunning] = useState(false);
  const [tennis, setTennis] = useState(false);
  const [swimming, setSwimming] = useState(false);
  const [travelling, setTravelling] = useState(false);
  const [art, setArt] = useState(false);
  const [music, setMusic] = useState(false);
  const [drink, setDrink] = useState(false);
  const [extreme, setExtreme] = useState(false);
  const [gaming, setGaming] = useState(false);

  function navigateToUploadImages() {
    navigation.navigate("Upload");
  }
  const handleKaraoke = () => {
    setKaraoke(!karaoke);
  };
  const handleShopping = () => {
    setShopping(!shopping);
  };
  const handlePhotography = () => {
    setPhotography(!photography);
  };
  const handleYoga = () => {
    setYoga(!yoga);
  };
  const handleCooking = () => {
    setCooking(!cooking);
  };
  const handleRunning = () => {
    setRunning(!running);
  };
  const handleTennis = () => {
    setTennis(!tennis);
  };
  const handleSwimming = () => {
    setSwimming(!swimming);
  };
  const handleTraveling = () => {
    setTravelling(!travelling);
  };
  const handleArt = () => {
    setArt(!art);
  };
  const handleMusic = () => {
    setMusic(!music);
  };
  const handleDrink = () => {
    setDrink(!drink);
  };
  const handleExtreme = () => {
    setExtreme(!extreme);
  };
  const handleGaming = () => {
    setGaming(!gaming);
  };

  //

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "80%",
        marginLeft: 30,
      }}
    >
      <Text style={{ fontWeight: "700", fontSize: 30, marginLeft: 5 }}>
        Your Interests
      </Text>
      <View style={{ width: "70%", marginTop: 8, marginLeft: 12 }}>
        <Text style={{ fontSize: 13, lineHeight: 20 }}>
          Choose 5 interests so that you can match with like minded people
        </Text>
      </View>

      <View
        style={{
          height: "50%",
          width: "110%",
          justifyContent: "space-between",
          alignContent: "space-between",
          marginLeft: 120,
          marginTop: 30,
        }}
      >
        {/* Grid of 2 */}
        <View style={{ flexDirection: "column" }}>
          {/* One row - two interests */}
          <View style={{ flexDirection: "row", marginBottom: -10 }}>
            {/* One Interest */}

            {/* Karaoke*/}

            <View style={{ marginRight: 13 }}>
              <TouchableOpacity
                onPress={handleKaraoke}
                style={[
                  karaoke ? styles.selectedButton : styles.unSelectedButton,
                ]}
              >
                <Text
                  style={[
                    karaoke ? styles.selectedText : styles.unSelectedText,
                  ]}
                >
                  <Image source={karaoke ? karaokewhite : karaokered} />
                  Karaoke
                </Text>
              </TouchableOpacity>
            </View>

            {/* Shopping */}

            <View style={{ marginLeft: 13 }}>
              <TouchableOpacity
                onPress={handleShopping}
                style={[
                  shopping ? styles.selectedButton : styles.unSelectedButton,
                ]}
              >
                <Text
                  style={[
                    shopping ? styles.selectedText : styles.unSelectedText,
                  ]}
                >
                  Shopping
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ flexDirection: "row", marginBottom: -10 }}>
            {/*Photography */}
            <View style={{ marginRight: 13 }}>
              <TouchableOpacity
                onPress={handlePhotography}
                style={[
                  photography ? styles.selectedButton : styles.unSelectedButton,
                ]}
              >
                <Text
                  style={[
                    photography ? styles.selectedText : styles.unSelectedText,
                  ]}
                >
                  Photography
                </Text>
              </TouchableOpacity>
            </View>

            {/* Yoga */}

            <View style={{ marginLeft: 13 }}>
              <TouchableOpacity
                onPress={handleYoga}
                style={[yoga ? styles.selectedButton : styles.unSelectedButton]}
              >
                <Text
                  style={[yoga ? styles.selectedText : styles.unSelectedText]}
                >
                  Yoga
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Cooking */}

          <View style={{ flexDirection: "row", marginBottom: -10 }}>
            {/* One Interest */}
            <View style={{ marginRight: 13 }}>
              <TouchableOpacity
                onPress={handleCooking}
                style={[
                  cooking ? styles.selectedButton : styles.unSelectedButton,
                ]}
              >
                <Text
                  style={[
                    cooking ? styles.selectedText : styles.unSelectedText,
                  ]}
                >
                  Cooking
                </Text>
              </TouchableOpacity>
            </View>

            {/* Running */}

            <View style={{ marginLeft: 13 }}>
              <TouchableOpacity
                onPress={handleRunning}
                style={[
                  running ? styles.selectedButton : styles.unSelectedButton,
                ]}
              >
                <Text
                  style={[
                    running ? styles.selectedText : styles.unSelectedText,
                  ]}
                >
                  Running
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Tennis */}

          <View style={{ flexDirection: "row", marginBottom: -10 }}>
            {/* One Interest */}
            <View style={{ marginRight: 13 }}>
              <TouchableOpacity
                onPress={handleTennis}
                style={[
                  tennis ? styles.selectedButton : styles.unSelectedButton,
                ]}
              >
                <Text
                  style={[tennis ? styles.selectedText : styles.unSelectedText]}
                >
                  Tennis
                </Text>
              </TouchableOpacity>
            </View>

            {/* Swimming */}

            <View style={{ marginLeft: 13 }}>
              <TouchableOpacity
                onPress={handleSwimming}
                style={[
                  swimming ? styles.selectedButton : styles.unSelectedButton,
                ]}
              >
                <Text
                  style={[
                    swimming ? styles.selectedText : styles.unSelectedText,
                  ]}
                >
                  Swimming
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Travelling */}
          <View style={{ flexDirection: "row", marginBottom: -10 }}>
            {/* One Interest */}
            <View style={{ marginRight: 13 }}>
              <TouchableOpacity
                onPress={handleTraveling}
                style={[
                  travelling ? styles.selectedButton : styles.unSelectedButton,
                ]}
              >
                <Text
                  style={[
                    travelling ? styles.selectedText : styles.unSelectedText,
                  ]}
                >
                  Travelling
                </Text>
              </TouchableOpacity>
            </View>

            {/* Art */}

            <View style={{ marginLeft: 13 }}>
              <TouchableOpacity
                onPress={handleArt}
                style={[art ? styles.selectedButton : styles.unSelectedButton]}
              >
                <Text
                  style={[art ? styles.selectedText : styles.unSelectedText]}
                >
                  Art
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Music */}

          <View style={{ flexDirection: "row", marginBottom: -10 }}>
            {/* One Interest */}
            <View style={{ marginRight: 13 }}>
              <TouchableOpacity
                onPress={handleMusic}
                style={[
                  music ? styles.selectedButton : styles.unSelectedButton,
                ]}
              >
                <Text
                  style={[music ? styles.selectedText : styles.unSelectedText]}
                >
                  Music
                </Text>
              </TouchableOpacity>
            </View>

            {/* Drink */}

            <View style={{ marginLeft: 13 }}>
              <TouchableOpacity
                onPress={handleDrink}
                style={[
                  drink ? styles.selectedButton : styles.unSelectedButton,
                ]}
              >
                <Text
                  style={[drink ? styles.selectedText : styles.unSelectedText]}
                >
                  Drink
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Extreme */}

          <View style={{ flexDirection: "row" }}>
            {/* One Interest */}
            <View style={{ marginRight: 13 }}>
              <TouchableOpacity
                onPress={handleExtreme}
                style={[
                  extreme ? styles.selectedButton : styles.unSelectedButton,
                ]}
              >
                <Text
                  style={[
                    extreme ? styles.selectedText : styles.unSelectedText,
                  ]}
                >
                  Extreme
                </Text>
              </TouchableOpacity>
            </View>

            {/* Gaming */}

            <View style={{ marginLeft: 13 }}>
              <TouchableOpacity
                onPress={handleGaming}
                style={[
                  gaming ? styles.selectedButton : styles.unSelectedButton,
                ]}
              >
                <Text
                  style={[gaming ? styles.selectedText : styles.unSelectedText]}
                >
                  Gaming
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          marginTop: 20,
          marginLeft: 8,
        }}
      >
        <TouchableOpacity
          onPress={navigateToUploadImages}
          style={{
            borderWidth: 1,
            borderColor: "#E94057",
            backgroundColor: "#E94057",
            paddingVertical: 10,
            paddingHorizontal: 50,
            borderRadius: 17,
          }}
        >
          <Text style={{ color: "#ffffff", fontSize: 20 }}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Interested;

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
  unSelectedButton: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#D2D1D1",
    backgroundColor: "#ffffff",
    width: 100,
    paddingLeft: 10,
    paddingVertical: 13,
    borderRadius: 15,
  },
  selectedButton: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#E94057",
    backgroundColor: "#E94057",
    width: 100,
    paddingLeft: 10,
    paddingVertical: 13,
    borderRadius: 15,
  },
  selectedText: { color: "#ffffff" },
  unSelectedText: { color: "#000000" },
});
