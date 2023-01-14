import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ChatsScreen from "./src/screens/Whatsapp/ChatsScreen";
import StatusScreen from "./src/screens/Whatsapp/StatusScreen";
import CallsScreen from "./src/screens/Whatsapp/CallsScreen";
import { NavigationContainer } from "@react-navigation/native";
const App = () => {
  return (
    <NavigationContainer>
      <TopBar />
      <MyTabs />
    </NavigationContainer>
  );
};

export default App;

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
        },
      }}
    >
      <Tab.Screen name="Chats" component={ChatsScreen} />
      <Tab.Screen name="Status" component={StatusScreen} />
      <Tab.Screen name="Calls" component={CallsScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  topbar: {
    height: 120,
    backgroundColor: "#008068",
  },
  tb: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 60,
    marginHorizontal: 15,
  },
});

export function TopBar() {
  return (
    <SafeAreaView style={styles.topbar}>
      <View style={styles.tb}>
        <Text style={{ fontSize: 22, color: "white" }}>WhatsApp</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 150,
          }}
        >
          <MaterialCommunityIcons
            name="camera-outline"
            size={24}
            color="white"
          />
          <Fontisto name="search" size={24} color="white" />
          <Entypo name="dots-three-vertical" size={24} color="white" />
        </View>
      </View>
    </SafeAreaView>
  );
}
