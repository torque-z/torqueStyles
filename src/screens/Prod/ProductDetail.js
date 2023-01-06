import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { useFonts } from "expo-font";
import styles from "./Styles";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Heart from "../../../assets/svg/Heart";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";

import { decProduct, updateUsername } from "../../features/Products";

const ProductDetail = ({ route }) => {
  const { menscloth, womencloth, watchdata, shoedata } = useSelector(
    (state) => state.product
  );

  const data = route.params;
  console.log("data", data.category);
  // console.log("product");

  //const datas = data.item;
  let datas = data;

  if (data.category == "Men") {
    const a = [...menscloth];
    //  alert("PD");
    datas = a.find((i) => i.id == data.id);
  } else if (data.category == "Women") {
    const a = [...womencloth];
    datas = a.find((i) => i.id == data.id);
  } else if (data.category == "Watch") {
    const a = [...watchdata];
    datas = a.find((i) => i.id == data.id);
  } else if (data.category == "Shoe") {
    const a = [...shoedata];
    datas = a.find((i) => i.id == data.id);
  }

  const dispatch = useDispatch();
  let [fontsLoaded] = useFonts({
    PublicSan: require("../../../assets/Fonts/PublicSans-Bold.ttf"),
    PublicSansRegular: require("../../../assets/Fonts/PublicSans-Regular.ttf"),
    PublicSansExtraBold: require("../../../assets/Fonts/PublicSans-ExtraBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  const navigation = useNavigation();
  const incrementProduct = (data) => {
    dispatch(updateUsername({ data: data }));
  };

  const decrementProduct = (data) => {
    dispatch(decProduct({ data: data }));
  };

  return (
    <SafeAreaView style={{ marginTop: 15 }}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle" size={30} color="black" />
        </TouchableOpacity>

        <Text style={styles.txt}>Product</Text>
        <Entypo name="dots-three-vertical" size={24} color="black" />
      </View>
      {/* Image Space */}
      <View>
        <Image
          style={styles.imgcon}
          source={datas?.img}
          // source={require("../../../assets/images/colorshirt.jpg")}
        />
      </View>
      {/* Price Data */}
      <View style={styles.pricedata}>
        <Text style={[styles.txt, { left: 15 }]}>{datas?.desc}</Text>
        <Text
          style={{
            color: "#524DA9",
            fontSize: 19,
            fontFamily: "PublicSansExtraBold",
            left: 40,
          }}
        >
          {datas?.price}
        </Text>
        <Text
          style={{
            textDecorationLine: "line-through",
            fontFamily: "PublicSansRegular",
            fontSize: 14,
            right: 12,
            color: "#8B898C",
          }}
        >
          {datas?.price}
        </Text>
      </View>
      {/* Size of the clothes */}
      <View style={styles.sizecontainer}>
        <Text style={[styles.txt, { fontSize: 13 }]}>Item Size</Text>
        <View style={{ flexDirection: "row", marginLeft: 10 }}>
          <TouchableOpacity style={styles.sizes}>
            <Text style={{ fontFamily: "PublicSan", fontSize: 12 }}>S</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sizes}>
            <Text style={{ fontFamily: "PublicSan", fontSize: 12 }}>M</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sizes}>
            <Text style={{ fontFamily: "PublicSan", fontSize: 12 }}>L</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sizes}>
            <Text style={{ fontFamily: "PublicSan", fontSize: 12 }}>XL</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Description and Review */}
      <View>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 25,
            marginTop: 10,
          }}
        >
          <Text
            style={[
              styles.txt,
              {
                color: "#524DA9",
                textDecorationLine: "underline",
                fontSize: 15,
              },
            ]}
          >
            Description
          </Text>
          <Text
            style={[
              styles.txt,
              { color: "#524DA9", marginLeft: 20, fontSize: 15 },
            ]}
          >
            Review
          </Text>
        </View>
        {/* Review */}
        <ScrollView style={{ height: 35, marginHorizontal: 10, marginTop: 10 }}>
          <Text style={{ textAlign: "center", fontSize: 14 }}>
            Est eu mollit magna ullamco occaecat cillum ullamco proident elit.
            Nostrud pariatur exercitation excepteur culpa adipisicing culpa.
            Duis voluptate in nisi nisi. Nisi dolor ipsum consectetur non
            consectetur esse ullamco laboris voluptate enim. Minim officia est
            consectetur et eiusmod sit minim minim cillum ullamco exercitation.
            Aliquip ad velit eiusmod incididunt id velit aute commodo. Esse
            dolor pariatur dolore enim officia minim enim velit occaecat duis
            reprehenderit nisi.
          </Text>
        </ScrollView>
        {/* Description and Review */}
      </View>
      {/* Quantity */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 10,
          marginTop: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: 100,
            height: 50,
            marginLeft: 15,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#524DA9",
              width: 30,
              borderRadius: 15,
              height: 30,
            }}
            onPress={() => decrementProduct(data)}
          >
            <Text
              style={{
                fontSize: 36,
                color: "black",
                bottom: 8,
                left: 8,
                color: "white",
                fontFamily: "PublicSansRegular",
              }}
            >
              -
            </Text>
          </TouchableOpacity>
          <Text style={{ fontFamily: "PublicSan" }}>{datas?.count}</Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#C6C4C7",
              width: 30,
              borderRadius: 15,
              height: 30,
            }}
            onPress={() => incrementProduct(data)}
          >
            <Text
              style={{
                fontSize: 30,
                color: "black",
                bottom: 4,
                left: 6,
                color: "white",
                fontFamily: "PublicSansRegular",
              }}
            >
              +
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={[
              {
                fontSize: 18,
                top: 12,
                right: 15,
                fontFamily: "PublicSansExtraBold",
              },
            ]}
          >
            Total : $90
          </Text>
        </View>
      </View>
      {/* Quantity */}

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 20,
          marginLeft: 15,
        }}
      >
        <TouchableOpacity style={styles.btmIcon}>
          <Heart fill={datas.isFav ? "#8B898C" : "#524DA9"} />
        </TouchableOpacity>
        <View style={styles.btmIcon1}>
          <Ionicons name="cart-outline" size={24} color="white" />
          <Text style={[styles.txt, { color: "white", left: 10 }]}>
            Add to Cart
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetail;
