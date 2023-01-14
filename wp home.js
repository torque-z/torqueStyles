import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const chats = [
  {
    id: 1,
    name: "Pink",
    message: "Okay",
    time: "12:00 am",
    img: require("../../../assets/Whatsapp/images/lady1.jpg"),
  },
  {
    id: 1,
    name: "Mars",
    message: "Okay",
    time: "12:00 am",
    img: require("../../../assets/Whatsapp/images/p2.jpg"),
  },

  {
    id: 2,
    name: "Rose",
    message: "Good Morning",
    time: "06:00 am",
    img: require("../../../assets/Whatsapp/images/p1.jpg"),
  },
  {
    id: 1,
    name: "Kilko",
    message: "Okay",
    time: "12:00 am",
    img: require("../../../assets/Whatsapp/images/p4.jpg"),
  },
];

const HomeScreen = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10,
        paddingTop: 10,
      }}
    >
      <Image
        style={{ width: 60, height: 60, borderRadius: 30 }}
        source={chats[0].img}
      />
      <View
        style={{ flexDirection: "column", alignItems: "center", marginTop: 5 }}
      >
        <View
          style={{
            marginRight: 160,
          }}
        >
          <Text style={{ fontSize: 21, fontFamily: "PublicSan" }}>
            {chats[0].name}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              right: 6,
            }}
          >
            <Image
              source={require("../../../assets/Whatsapp/icons/read.png")}
            />
            <Text
              style={{
                fontSize: 15,
                fontFamily: "PublicSan",
                color: "#8795A0",
              }}
            >
              {chats[0].message}
            </Text>
          </View>
        </View>
      </View>
      <Text style={{ fontSize: 12, fontFamily: "PublicSan", color: "#8795A0" }}>
        {chats[0].time}
      </Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
