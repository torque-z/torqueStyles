import { View, Text } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

export default function Shirt(props) {
  return (
    <Svg
      id="Icons"
      xmlns="http://www.w3.org/2000/svg"
      x={0}
      y={0}
      viewBox="0 0 32 32"
    >
      <Path
        d="M25.3 7.3C23.8 5.8 21.8 5 19.7 5h-.2c-.7 1.2-2 2-3.4 2s-2.8-.8-3.4-2h-.2c-2.1 0-4.2.8-5.7 2.3L3 11l4 5 3-3v14h12V13l3 3 4-5-3.7-3.7z"
        style={{
          fill: props.border,
          stroke: props.border,
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
        }}
      />
      <Path
        style={{
          fill: "none",
        }}
        d="M-72-648h536V32H-72z"
      />
    </Svg>
  );
}
