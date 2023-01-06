import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    alignItems: "center",
  },
  img: {
    width: 300,
    height: 300,
    marginHorizontal: 40,
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
  txt: {
    fontFamily: "PublicSan",
    fontSize: 18,
  },
});

export default styles;
