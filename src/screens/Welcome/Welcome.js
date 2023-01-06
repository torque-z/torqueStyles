import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import slidesData from "../../datasource/slides_data";
import { useFonts } from "expo-font";
import styles from "./Styles";
import Slides from "./Slides";
const Welcome = () => {
  let deviceWidth = Dimensions.get("window").width;
  let deviceHeight = Dimensions.get("window").height;

  let [fontsLoaded] = useFonts({
    PublicSan: require("../../../assets/Fonts/PublicSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View
      style={{
        width: deviceWidth,
        height: deviceHeight,
        backgroundColor: "black",
      }}
    >
      <FlatList
        data={slidesData}
        renderItem={({ item }) => <Slides item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
      />

      {/* Everything Needed container */}
      <View>
        <Text style={{ color: "white", fontFamily: "PublicSan" }}>
          Everything you need is here
        </Text>
      </View>

      {/* Get Started Container */}
      <View style={styles.bottomcontainer}>
        <TouchableOpacity style={styles.getstarted}>
          <Text
            style={{
              color: "white",
              fontFamily: "PublicSan",
              fontSize: 24,
            }}
          >
            Get Started
          </Text>
          <Image
            style={styles.icon}
            source={require("../../../assets/icons/rarrows.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.skip}>
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontFamily: "PublicSan",
              fontSize: 24,
            }}
          >
            Skip
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
