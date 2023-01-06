import {
  Pressable,
  Image,
  Text,
  View,
  FlatList,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import React, { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import styles from "./Styles";
import { useFonts } from "expo-font";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import SelectDropdown from "react-native-select-dropdown";
import MensClothing from "./MenClothing";
import Categories from "./Categories";
import offer_slide from "../../datasource/offer_slide.js";

import { useSelector } from "react-redux";
const Homescreen = () => {
  const { menscloth, womencloth, watchdata, shoedata } = useSelector(
    (state) => state.product
  );

  const [selected, setSelected] = React.useState("");
  const [cat, setCat] = useState("");
  const [cate, setCate] = React.useState();

  useEffect(() => {
    if (cat == "Men") {
      setCate(menscloth);
    } else if (cat == "Women") {
      setCate(womencloth);
    } else if (cat == "Watch") {
      setCate(watchdata);
    } else if (cat == "Shoe") {
      setCate(shoedata);
    }
  }, [cat, menscloth, womencloth, watchdata, shoedata]);

  const renderSep = () => {
    return <View style={{ padding: 5, marginHorizontal: 2 }} />;
  };

  const data = [
    { key: "0", value: "Your Location  " },
    { key: "1", value: "Jammu & Kashmir" },
    { key: "2", value: "Gujrat" },
    { key: "3", value: "Maharashtra" },
    { key: "4", value: "Goa" },
  ];

  let [fontsLoaded] = useFonts({
    PublicSan: require("../../../assets/Fonts/PublicSans-Bold.ttf"),
    PublicSansRegular: require("../../../assets/Fonts/PublicSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const changeCat = (text) => {
    setCat(text);
  };

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.maincontainer}>
          <View style={styles.locationContainer}>
            {/* Dropdown Container */}
            <View style={{ alignItems: "center", left: 10 }}>
              <SelectDropdown
                data={data}
                // onSelect={(selectedItem, index) => {
                //   // this.setCategoryType(selectedItem);
                // }}
                defaultButtonText={"Select Location"}
                buttonStyle={styles.dropdown1BtnStyle}
                buttonTextStyle={styles.dropdown1BtnTxtStyle}
                renderDropdownIcon={(isOpened) => {
                  return (
                    <FontAwesome
                      name={isOpened ? "chevron-up" : "chevron-down"}
                      color={"#444"}
                      size={10}
                    />
                  );
                }}
                dropdownIconPosition={"right"}
                dropdownStyle={styles.dropdown1DropdownStyle}
              />
            </View>

            {/* Location Text */}
            <View style={styles.location}>
              <Ionicons name="location-sharp" size={24} color="black" />
              <Text style={styles.txt}>
                {selected != 0 ? selected : "Select Location"}
              </Text>
            </View>
            {/* Location Text */}
          </View>
          {/* Dropdown Container */}

          {/* Batch Icon */}
          <View style={styles.batch}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 8,
                fontWeight: "bold",
                color: "white",
              }}
            >
              1
            </Text>
          </View>
          {/* Batch Icon */}

          {/* Cart and Bell Icon */}
          <View style={styles.headerp2}>
            <View style={{ marginRight: 20 }}>
              <Feather name="shopping-cart" size={24} color="black" />
            </View>
            <View style={{ marginRight: 20 }}>
              <FontAwesome5 name="bell" size={24} color="black" />
            </View>
          </View>
          {/* Cart and Bell Icon */}
        </View>

        {/* Banner Slides */}
        <View>
          <View
            style={{
              height: 220,
              width: "100%",
              marginTop: 10,
              marginBottom: 20,
              // marginHorizontal: 20,
            }}
          >
            <SwiperFlatList
              autoplay={true}
              autoplayDelay={2}
              autoplayLoop={true}
              index={0}
              nestedScrollEnabled={true}
              showPagination
              paginationStyleItem={{ marginRight: 0 }}
              paginationStyleItemActive={{
                width: 30,
                backgroundColor: "#504FB3",
                height: 8,
              }}
              paginationStyleItemInactive={{
                backgroundColor: "gray",
                width: 8,
                height: 8,
              }}
            >
              {offer_slide.map((data, id) => {
                return <Banner key={id} data={data} />;
              })}
            </SwiperFlatList>
          </View>
        </View>
        <View>
          <Categories setCategory={changeCat} />
        </View>
        {/* 
        {cat == "Men" && (
          <FlatList
            data={cat_data}
            renderItem={({ item }) => <MensClothing item={item} />}
            numColumns={2}
            pagingEnabled
            bounces={false}
            keyExtractor={(item) => item.id}
            // ItemSeparatorComponent={renderSep}
          />
        )} */}
        <FlatList
          data={cate}
          renderItem={({ item }) => <MensClothing item={item} />}
          numColumns={2}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          // ItemSeparatorComponent={renderSep}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default Homescreen;

function Banner(props) {
  return (
    <View>
      <View style={styles.banner}>
        <Text style={styles.bannerTxt}>{props.data.desc}</Text>
        <Text style={[styles.bannerTxt, { fontSize: 40 }]}>
          {props.data.misc}
        </Text>
        <TouchableOpacity style={styles.bannerbtn}>
          <Text style={styles.colortxt}>Get Now</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bannerimg}>
        <Image
          style={{
            width: 190,
            height: 190,
            resizeMode: "contain",
          }}
          source={props.data.img}
          //source={require("../../../assets/images/3d60offer1.png")}
        />
      </View>
    </View>
  );
}
