import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BottomNavigator from "./src/components/BottomNavigator";
import ProductDetail from "./src/screens/Prod/ProductDetail";

import { NavigationContainer } from "@react-navigation/native"; // 1
import { createStackNavigator } from "@react-navigation/stack"; // 2
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import prodreducer from "./src/features/Products";
import PaymentMethods from "./src/screens/FavScreen/PaymentMethods";
const store = configureStore({
  reducer: {
    product: prodreducer,
  },
});

const stack = createStackNavigator(); // 3
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <stack.Navigator screenOptions={{ headerShown: false }}>
          <stack.Screen name="btn" component={BottomNavigator} />
          <stack.Screen name="productdetail" component={ProductDetail} />
          <stack.Screen name="paymentmethods" component={PaymentMethods} />
        </stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
  },
});
