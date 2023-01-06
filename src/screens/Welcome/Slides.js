import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import React from "react";

let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;
export default function Slides(props) {
  return (
    <View style={styles.backgroundstyle}>
      <Image source={props.item.img} style={styles.img} />
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: deviceWidth,
    height: 500,
    marginTop: 50,
  },
});
