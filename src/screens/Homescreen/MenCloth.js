import styles from "./Styles";
import { useSelector, useDispatch } from "react-redux";

//import { addFav, decProduct, updateUsername } from "../../features/Products";
export default function MensCloth() {
  const [fav, setfav] = useState(false);
  const dispatch = useDispatch();
  const addFav = (data) => {
    alert("hi");
    //  dispatch(addFav(data));
  };
  return (
    <View style={styles.mensBanner}>
      {mens_cloths.map((i) => (
        <View>
          <Image style={styles.mensban} source={i.img} />
          <Text style={[styles.txt, { marginLeft: 12 }]}>{i.desc}</Text>
          {/* Price Container */}
          <View style={styles.pricecontainer}>
            <Text style={[styles.txt, { color: "#524DA9", fontSize: 20 }]}>
              {i.price}
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
              {i.price}
            </Text>
            <TouchableOpacity onPress={() => alert("hio")}>
              <Heart fill={i.isFav ? "#8B898C" : "#524DA9"} />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
}
