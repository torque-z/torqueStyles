import Shirt from "../../../assets/svg/Shirt";
import Skirt from "../../../assets/svg/Skirt";
import Watch from "../../../assets/svg/Watch";
import Shoe from "../../../assets/svg/Shoe";

import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import styles from "./Styles";
import Men from "../../../assets/svg/Men";

const Categories = ({ setCategory }) => {
  const [hightlight1, setHighlight1] = useState("");

  const selectedCar = (text) => {
    if (text !== hightlight1) {
      setHighlight1(text);
    } else {
      setHighlight1("");
    }
    setCategory(text);
  };

  return (
    <View>
      <Text style={[styles.txt, { left: 20, bottom: 30 }]}>Categories</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 20,
          bottom: 20,
        }}
      >
        <TouchableOpacity
          style={[
            {
              backgroundColor: "#EBE9EC",
              justifyContent: "center",
              alignItems: "center",
            },
            styles.iconsize,
          ]}
          onPress={() => selectedCar("Men")}
        >
          <Men fill={hightlight1 == "Men" ? "#524DA9" : "#8B898C"} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.iconsize,
            {
              backgroundColor: "#EBE9EC",
              justifyContent: "center",
              alignItems: "center",
            },
          ]}
          onPress={() => selectedCar("Women")}
        >
          <Skirt
            border={hightlight1 == "Women" ? "#524DA9" : "#8B898C"} // grey and blue
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.iconsize,
            {
              backgroundColor: "#EBE9EC",
              justifyContent: "center",
              alignItems: "center",
            },
          ]}
          onPress={() => selectedCar("Watch")}
        >
          <Watch
            border={hightlight1 == "Watch" ? "#524DA9" : "#8B898C"} // grey and blue
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.iconsize,
            {
              backgroundColor: "#EBE9EC",
              justifyContent: "center",
              alignItems: "center",
            },
          ]}
          onPress={() => selectedCar("Shoe")}
        >
          <Shoe
            border={hightlight1 == "Shoe" ? "#524DA9" : "#8B898C"} // grey and blue
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Categories;

// (13k -15k)- with album 120 (30 printed pages) - premimum album

// Video + Photo 3min - 30k
