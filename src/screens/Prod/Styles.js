import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    alignItems: "center",
  },
  txt: {
    fontFamily: "PublicSan",
    fontSize: 19,
  },
  imgcon: {
    width: 350,
    height: 400,
    borderRadius: 20,
    marginHorizontal: 20,
    marginTop: 20,
  },
  pricedata: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginTop: 10,
  },

  //Sizes

  sizecontainer: {
    flexDirection: "row",
    marginLeft: 25,
    marginTop: 10,
    alignItems: "center",
  },
  sizes: {
    width: 25,
    height: 25,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderColor: "#C4C2C5",
    borderRadius: 5,
  },
  btmIcon: {
    width: 50,
    height: 50,
    borderColor: "#524DA9",
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  btmIcon1: {
    width: 280,
    height: 50,
    borderColor: "#524DA9",
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "#524DA9",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    right: 10,
  },
});

export default styles;
