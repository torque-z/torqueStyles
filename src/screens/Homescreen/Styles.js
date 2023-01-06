import { StyleSheet, Text, View } from "react-native";
const styles = StyleSheet.create({
  //Top header styles
  locationContainer: {
    flexDirection: "column",
  },
  location: {
    flexDirection: "row",
    marginLeft: 15,
  },
  headerp2: {
    flexDirection: "row",
    marginRight: 10,
    marginTop: 30,
  },
  // Common Styles
  maincontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  txt: {
    fontFamily: "PublicSan",
  },
  batch: {
    width: 15,
    height: 15,
    backgroundColor: "#CC0001",
    borderRadius: 15 / 2,
    // left: 95,
    right: 65,
    position: "absolute",
    top: 25,
  },

  //Banner
  banner: {
    width: 350,
    height: 170,
    borderRadius: 20,
    backgroundColor: "#504FB3",
    marginHorizontal: 15,
    marginTop: 10,
    position: "absolute",
  },
  bannerTxt: {
    color: "white",
    fontFamily: "PublicSan",
    marginLeft: 40,
    top: 20,
  },
  bannerbtn: {
    width: 150,
    height: 35,
    backgroundColor: "white",
    marginLeft: 40,
    borderRadius: 20,
    marginTop: 35,
  },
  colortxt: {
    color: "#504FB3",
    fontFamily: "PublicSansRegular",
    fontSize: 16,
    fontWeight: "bold",
    left: 40,
    top: 8,
  },
  bannerimg: {
    marginLeft: 210,
    // bottom: 5,
  },

  //Categories
  iconsize: {
    width: 60,
    height: 60,
  },

  //Mens Cloth
  mensBanner: {
    flexDirection: "row",
  },
  mensban: {
    width: 150,
    height: 200,
    margin: 20,
  },
  pricecontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 12,
  },
  //dropdown
  dropdown1BtnStyle: {
    width: 140,
    height: 30,
    // backgroundColor: "#FFF",
    borderRadius: 8,
    // borderWidth: 1,
    // borderColor: "#444",
  },
  dropdown1BtnTxtStyle: { color: "#444", textAlign: "left", fontSize: 13 },
  dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown1RowTxtStyle: { color: "#444", textAlign: "left" },
});

export default styles;
