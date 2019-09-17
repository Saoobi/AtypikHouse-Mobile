import React from "react";
import { Image } from "react-native";

function Logo() {
  return (
    <Image
      source={require("../../img/logoBlanc.png")}
      style={{
        resizeMode: "stretch",
        flex: 1,
        width: undefined,
        height: "100%",
        aspectRatio: 1
      }}
    />
  );
}

export default Logo;
