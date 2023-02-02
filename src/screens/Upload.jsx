import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

import Plus from "react-native-vector-icons/Entypo";

const Upload = ({ navigation }) => {
  function navigateToSuccess() {
    navigation.navigate("RegisterSuccess");
  }

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

      <View style={styles.imageContainer}>
        <View style={{ flexDirection: "column" }}>
          <View style={{ flexDirection: "row" }}>
            {/* 1st Item */}
            <TouchableOpacity>
              <View style={styles.image}>
                <View style={styles.imageFlexCenter}>
                  <View style={styles.circleBG}>
                    <Plus
                      size={30}
                      name="plus"
                      color="#ffffff"
                      style={styles.plusButton}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            {/* 2nd Item */}
            <TouchableOpacity>
              <View style={styles.image}>
                <View style={styles.imageFlexCenter}>
                  <View style={styles.circleBG}>
                    <Plus
                      size={30}
                      name="plus"
                      color="#ffffff"
                      style={styles.plusButton}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row", marginTop: 40 }}>
            {/* 3rd Item */}
            <TouchableOpacity>
              <View style={styles.image}>
                <View style={styles.imageFlexCenter}>
                  <View style={styles.circleBG}>
                    <Plus
                      size={30}
                      name="plus"
                      color="#ffffff"
                      style={styles.plusButton}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            {/* 4th Item */}
            <TouchableOpacity>
              <View style={styles.image}>
                <View style={styles.imageFlexCenter}>
                  <View style={styles.circleBG}>
                    <Plus
                      size={30}
                      name="plus"
                      color="#ffffff"
                      style={styles.plusButton}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{ marginLeft: 20 }}>
        <TouchableOpacity style={styles.button} onPress={navigateToSuccess}>
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
  button: {
    borderWidth: 1,
    borderRadius: 17,
    borderColor: "#E94057",
    backgroundColor: "#E94057",
    paddingHorizontal: 60,
    paddingVertical: 10,
  },
  image: {
    height: 193,
    width: 139,
    backgroundColor: "#fff",
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "#E94057",
    borderStyle: "dashed",
  },
  imageContainer: { height: "60%", marginTop: 30, marginLeft: 20 },
  imageFlexCenter: {
    justifyContent: "center",
    flex: 1,
    alignContent: "center",
    alignItems: "center",
  },
  circleBG: {
    borderWidth: 1,
    borderColor: "#E94057",
    backgroundColor: "#E94057",
    borderRadius: 50,
    width: 40,
    height: 40,
    position: "relative",
  },
  plusButton: { position: "absolute", left: 4, top: 4 },
});
