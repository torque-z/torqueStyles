import { TouchableOpacity, View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import styles from "./Styles";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

const ChatScreen = () => {
  let [fontsLoaded] = useFonts({
    PublicSan: require("../../../assets/Fonts/PublicSans-Bold.ttf"),
    PublicSansRegular: require("../../../assets/Fonts/PublicSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle" size={30} color="black" />
        </TouchableOpacity>
        <Text style={[styles.txt, { color: "#252525" }]}>Support</Text>
        <Entypo name="dots-three-vertical" size={24} color="#252525" />
      </View>
      <View
        style={{
          marginTop: "20%",
        }}
      >
        <Image
          style={styles.img}
          source={require("../../../assets/images/suport1.png")}
        />
        <View
          style={{
            width: "80%",
            height: 100,
            flexDirection: "column",
            marginLeft: 35,
          }}
        >
          <Text
            style={{
              fontSize: 28,
              fontFamily: "PublicSan",
              textAlign: "center",
            }}
          >
            Welcome to Torc ! We're glad you're here.
          </Text>
        </View>
        <View style={styles.btmIcon1}>
          <Entypo name="chat" size={24} color="white" />
          {/* <Ionicons name="cart-outline" size={24} color="white" /> */}
          <Text
            style={[
              {
                color: "white",
                left: 10,
                fontSize: 20,
                fontFamily: "PublicSan",
              },
            ]}
          >
            Chat with Us
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;
