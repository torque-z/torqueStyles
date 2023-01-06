import styles from "./Styles";
import { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import Heart from "../../../assets/svg/Heart";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, addFav } from "../../features/Products";
export default function MensClothing(props) {
  const dispatch = useDispatch();
  const { menscloth, womencloth, watchdata, shoedata } = useSelector(
    (state) => state.product
  );

  const data = props;
  //console.log("data", data.item.category);

  let datas = data.item;

  if (data.item.category == "Men") {
    const a = [...menscloth];
    datas = a.find((i) => i.id == data.item.id);
  } else if (data.item.category == "Women") {
    const a = [...womencloth];
    datas = a.find((i) => i.id == data.item.id);
  } else if (data.item.category == "Watch") {
    const a = [...watchdata];
    datas = a.find((i) => i.id == data.item.id);
  } else if (data.item.category == "Shoe") {
    const a = [...shoedata];
    datas = a.find((i) => i.id == data.item.id);
  }

  const navigation = useNavigation();
  const addFavs = (data) => {
    dispatch(addFav(data));
  };

  return (
    <View style={styles.mensBanner} id={props.item.id}>
      <View style={{ bottom: 20 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("productdetail", datas)}
        >
          <Image style={styles.mensban} source={datas.img} />
        </TouchableOpacity>
        <Text style={[styles.txt, { marginLeft: 12 }]}>{datas.desc}</Text>
        {/* Price Container */}
        <View style={styles.pricecontainer}>
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
                right: 30,
                top: 5,
              },
            ]}
          >
            {props.item.price}
          </Text>

          <TouchableOpacity onPress={() => addFavs(datas)}>
            <Heart fill={props.item.isFav ? "#524DA9" : "#8B898C"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
