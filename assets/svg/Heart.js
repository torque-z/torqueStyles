import { View, Text } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

export default function Heart(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      fill={props.fill}
      viewBox="0 0 512 512"
    >
      <Path d="M150 66.6c-11.2 1.6-17.7 3-25.2 5.5-41.7 13.5-72.7 49.3-80.3 92.7-1.9 11-1.9 33.2-.1 48.3 9.9 79.8 60.8 152.2 143.1 203.8 12.9 8 36.3 19.8 49 24.7 9 3.4 10.9 3.8 19.5 3.8s10.4-.4 19.5-3.8c20.8-8 47.3-22.6 68.8-37.9C423.6 347.2 469 268.5 469 187.5c0-21-3.4-36.9-11.5-53.9-21.5-45.1-70.4-72.4-119.4-66.7-28.2 3.3-50.8 14.4-71.4 35.2l-10.8 10.8-9.6-10C226.8 82.6 202.6 70.4 175 67c-8-1-19.6-1.1-25-.4z" />
    </Svg>
  );
}
