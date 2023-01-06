import { FlatList, Image, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import styles from "./Styles";
import { SafeAreaView } from "react-native-safe-area-context";
import mens_cloths from "../../datasource/mens_cloths";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";
import Heart from "../../../assets/svg/Heart";
import Plus from "../../../assets/svg/Plus";
import Minus from "../../../assets/svg/Minus";
import Happy from "../../../assets/svg/Happy";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const FavScreen = () => {
  const { menscloth, womencloth, watchdata, shoedata } = useSelector(
    (state) => state.product
  );

  const navigation = useNavigation();
  const allProducts = [...menscloth, ...womencloth, ...watchdata, ...shoedata];
  const all = allProducts.filter((i) => i.isFav);
  let [fontsLoaded] = useFonts({
    PublicSan: require("../../../assets/Fonts/PublicSans-Bold.ttf"),
    PublicSansRegular: require("../../../assets/Fonts/PublicSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle" size={30} color="black" />
        </TouchableOpacity>
        <Text style={[styles.txt, { color: "#252525" }]}>Favorites</Text>
        <Entypo name="dots-three-vertical" size={24} color="#252525" />
      </View>
      <View style={{ marginTop: "1%" }}>
        <FlatList
          data={all}
          renderItem={({ item }) => <FavItems item={item} />}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.img}

          // ItemSeparatorComponent={renderSep}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("paymentmethods")}>
        <View style={styles.btmIcon1}>
          <Happy />
          {/* <Ionicons name="cart-outline" size={24} color="white" /> */}
          <Text style={[styles.txt, { color: "white", left: 10 }]}>
            Proceed to Delivery
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default FavScreen;

export function FavItems(props) {
  const [fav, setfav] = useState(false);

  const agregarFavoritos = () => {
    setfav(!fav);
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <View>
        <Image style={styles.mensban} source={props.item.img} />
      </View>
      <View style={{ marginTop: 30 }}>
        <Text style={[styles.txt1]}>{props.item.desc}</Text>
        {/* Price Container */}
        <View style={styles.pricecontainer}>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.txt, { color: "#524DA9", fontSize: 20 }]}>
              {props.item.price}
            </Text>
            <Text
              style={[
                styles.txt,
                {
                  color: "#8B898C",
                  fontSize: 12,
                  textDecorationLine: "line-through",
                  top: 5,
                },
              ]}
            >
              {props.item.price}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              margin: 10,
              right: 7,
              width: 100,
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity onPress={() => agregarFavoritos()}>
              <Plus fill={"#524DA9"} />
            </TouchableOpacity>
            <View style={{ justifyContent: "center" }}>
              <Text>02</Text>
            </View>
            <TouchableOpacity onPress={() => agregarFavoritos()}>
              <Minus fill={"#524DA9"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
