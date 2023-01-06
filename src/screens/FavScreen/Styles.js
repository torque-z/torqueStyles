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
    fontSize: 18,
  },
  txt1: {
    fontFamily: "PublicSan",
    fontSize: 18,
  },
  mensBanner: {
    flexDirection: "row",
  },
  mensban: {
    width: 150,
    height: 150,
    margin: 10,
    borderRadius: 10,
  },
  pricecontainer: {
    flexDirection: "column",
    marginTop: 10,
    // justifyContent: "space-between",
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
    marginHorizontal: 50,
    marginTop: "2%",
  },
});

export default styles;
