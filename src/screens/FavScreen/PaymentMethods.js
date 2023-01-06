import {
  TouchableOpacity,
  Image,
  View,
  Text,
  SafeAreaView,
  FlatList,
} from "react-native";
import React from "react";
import styles from "./Styles";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const method = [
  {
    id: "1",
    img: require("../../../assets/images/visa.png"),
    title: "Debit / Credit Card",
  },
  {
    id: "2",
    img: require("../../../assets/images/upiw.png"),
    title: "UPI Payment",
  },
  {
    id: "3",
    img: require("../../../assets/images/money1.png"),
    title: "Debit / Credit Card",
  },
];
const PaymentMethods = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle" size={30} color="black" />
        </TouchableOpacity>
        <Text style={[styles.txt, { color: "#252525" }]}>Payment Methods</Text>
        <Entypo name="dots-three-vertical" size={24} color="#252525" />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text
          style={[
            styles.txt,
            {
              fontSize: 20,
              textAlign: "left",
              marginLeft: 20,
              marginTop: 10,
              textTransform: "uppercase",
              color: "#524DA9",
            },
          ]}
        >
          Select a Payment Method
        </Text>
      </View>
      <View style={{ marginTop: "5%" }}>
        <FlatList
          data={method}
          renderItem={({ item }) => <PaymentMethod item={item} />}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.img}

          // ItemSeparatorComponent={renderSep}
        />
      </View>
      <View
        style={{
          marginTop: "5%",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image source={require("../../../assets/images/enter4.png")} />
      </View>
    </SafeAreaView>
  );
};

function PaymentMethod(props) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 20,
      }}
    >
      <Image style={{ width: 80, height: 80 }} source={props.item.img} />
      <Text style={styles.txt}>{props.item.title}</Text>
      <SimpleLineIcons name="arrow-right" size={24} color="black" />
    </View>
  );
}
export default PaymentMethods;
