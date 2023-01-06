import { View, Text } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

export default function Men(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={50}
      fill={props.fill}
      viewBox="0 0 512 512"
    >
      <Path d="M126.3 45.5c-5.1 1.3-13.2 4.2-18 6.5-19.1 8.9-20.9 10.4-66.1 55.4L0 149.5l42.2 42.2C65.5 215 84.9 234 85.5 234c.5 0 5.6-4.6 11.2-10.2l10.3-10.3V469h298V213.5l10.3 10.3c5.6 5.6 10.7 10.2 11.2 10.2.6 0 20-19 43.3-42.3l42.2-42.2-42.2-42.1c-45.2-45-47-46.5-66.1-55.4-4.8-2.3-13.1-5.2-18.4-6.6-8.7-2.2-11.5-2.4-31.9-2.4h-22.3l-.5 3.2c-2.6 18.4-5.7 27.7-12.8 38.1-26.1 38.6-80.8 44-114.1 11.4-13.1-12.8-18.9-25.7-22.3-49.5l-.5-3.2h-22.7c-20.6.1-23.6.3-31.9 2.5z" />
    </Svg>
  );
}