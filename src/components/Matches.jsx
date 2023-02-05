import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

import image1 from "../../assets/matches/1.png";

const Matches = () => {
  return (
    <View style={{ paddingTop: 8 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Image
          width={60}
          height={60}
          source={image1}
          style={{ resizeMode: "cover", marginLeft: 10 }}
        />
        <Image
          width={60}
          height={60}
          source={image1}
          style={{ resizeMode: "cover", marginLeft: 10 }}
        />
        <Image
          width={60}
          height={60}
          source={image1}
          style={{ resizeMode: "cover", marginLeft: 10 }}
        />
        <Image
          width={60}
          height={60}
          source={image1}
          style={{ resizeMode: "cover", marginLeft: 10 }}
        />
        <Image
          width={60}
          height={60}
          source={image1}
          style={{ resizeMode: "cover", marginLeft: 10 }}
        />
        <Image
          width={60}
          height={60}
          source={image1}
          style={{ resizeMode: "cover", marginLeft: 10 }}
        />
      </ScrollView>
    </View>
  );
};

export default Matches;
