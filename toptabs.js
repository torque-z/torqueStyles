import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import React from "react";
import Video from "react-native-video";
import Homepage from "./src/screens/Instagram/Homepage";
import HomeScreen from "./src/screens/Whatsapp/Homescreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import StatusScreen from "./src/screens/Whatsapp/StatusScreen";
import CallsScreen from "./src/screens/Whatsapp/CallsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
export default function App() {
  return (
    <NavigationContainer>
      <TopBar />

      <MyTabs />
    </NavigationContainer>
  );
}

function TopBar() {
  let [fontsLoaded] = useFonts({
    PublicSan: require("./assets/Whatsapp/fonts/Helvetica.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.topbarbg}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 15,
          marginTop: 60,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 22,
            fontFamily: "PublicSan",
          }}
        >
          Whatsapp
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 100,
          }}
        >
          <SimpleLineIcons name="camera" size={24} color="white" />
          <Ionicons name="search-sharp" size={24} color="white" />
          <Entypo name="dots-three-vertical" size={24} color="white" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topbarbg: {
    backgroundColor: "#008068",
    width: "100%",
    height: 100,
  },
});

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#008068",
        },
        tabBarIndicatorStyle: {
          backgroundColor: "white",
        },
        tabBarLabelStyle: {
          color: "white",
          fontSize: 15,
          fontFamily: "PublicSan",
        },
      }}
    >
      <Tab.Screen
        name="Chats"
        component={HomeScreen}
        options={{ tabBarLabel: "Chats" }}
      />
      <Tab.Screen
        name="Status"
        component={StatusScreen}
        options={{ tabBarLabel: "Status" }}
      />
      <Tab.Screen
        name="Calls"
        component={CallsScreen}
        options={{ tabBarLabel: "Calls" }}
      />
    </Tab.Navigator>
  );
}
