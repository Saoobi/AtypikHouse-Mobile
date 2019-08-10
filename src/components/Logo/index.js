import React from "react";
import { Image } from "react-native";

import styles from "./styles";

function Logo({ size = "medium" }) {
  return (
    <Image
      source={require("../../img/logoBlanc.png")}
      style={{ resizeMode: "stretch", ...styles[size] }}
    />
  );
}

export default Logo;
