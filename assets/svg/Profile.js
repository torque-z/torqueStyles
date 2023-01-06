import { View, Text } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

const Profile = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      fill={props.fill}
      viewBox="0 0 512 512"
    >
      <Path d="M238.3 42.5c-41.3 7.5-74 39.4-82.5 80.4-1.6 7.9-1.9 12.2-1.5 24.1.6 17.8 2.6 26.1 10.2 41.5 21.4 43.7 69.5 65.8 117.4 53.9 28.1-7.1 52.5-27.1 65.6-53.9 7.5-15.3 9.6-23.7 10.2-41.5.4-12 .1-16.2-1.5-24.1-9.9-48-52.3-82.3-101.1-81.8-5.3 0-12.8.7-16.8 1.4zM216.5 267.1c-96.4 9.8-170.4 87.5-175.2 184.1l-.6 12.7 3.5 3.5 3.6 3.6h207.1c227.7 0 211.3.5 214.6-6 1.8-3.4 1.9-11.2.4-24.8-7-64.3-44.2-120-100.9-151-16.9-9.2-41.4-17.4-62.5-20.8-11.7-1.9-75-2.8-90-1.3z" />
    </Svg>
  );
};

export default Profile;
