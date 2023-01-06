import React from "react";
import Svg, { Path } from "react-native-svg";
export default function Adobe(props) {
  return (
    <Svg width={50} height={50} stroke={props.color} fill={props.color}>
      <Path d="M4 5a1 1 0 0 0-1 1v38a1 1 0 0 0 1.924.38l15.637-38A1 1 0 0 0 19.637 5H4zm26.363 0a1 1 0 0 0-.924 1.38l15.637 38A1 1 0 0 0 47 44V6a1 1 0 0 0-1-1H30.363zM5 7h13.143L5 38.943V7zm26.857 0H45v31.943L31.857 7zm-6.875 11.111a1 1 0 0 0-.908.621l-6.908 16.89A1 1 0 0 0 18.092 37h6.236l3.02 7.379a1 1 0 0 0 .925.621h6.909a1 1 0 0 0 .925-1.379L25.926 18.732a1 1 0 0 0-.944-.62zM25 21.754 33.691 43h-4.746l-3.02-7.379A1 1 0 0 0 25 35h-5.42L25 21.754z" />
    </Svg>
  );
}
