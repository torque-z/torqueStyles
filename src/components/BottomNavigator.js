import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Compass from "../../assets/svg/Compass";
import Heart from "../../assets/svg/Heart";
import Message from "../../assets/svg/Message";
import Profile from "../../assets/svg/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../screens/ProfileScreen";
import Homescreen from "../screens/Homescreen/Homescreen";
import ProductDetail from "../screens/Prod/ProductDetail";
import FavScreen from "../screens/FavScreen/FavScreen";
import ChatScreen from "../screens/ChatScreen/ChatScreen";

const tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#524DA9",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <tab.Screen
        name="home"
        component={Homescreen}
        screenOptions={{
          headerShown: false,
        }}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => <Compass color={color} />,
        }}
      />
      <tab.Screen
        name="fav"
        component={FavScreen}
        screenOptions={{ headerShown: false }}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => <Heart fill={color} />,
        }}
      />
      <tab.Screen
        name="pd"
        component={ChatScreen}
        screenOptions={{ headerShown: false }}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => <Message fill={color} />,
        }}
      />
      <tab.Screen
        name="profile"
        component={ProfileScreen}
        screenOptions={{ headerShown: false }}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => <Profile fill={color} />,
        }}
      />
    </tab.Navigator>
    // <View style={styles.container}>
    //   <Compass color="#524DA9" />
    //   <Heart fill="#8B898C" />
    //   <Message fill="#8B898C" />
    //   <Profile fill="#8B898C" />
    // </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 70,
  },
});
