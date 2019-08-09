import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

function MyButton({ buttonTitle, buttonType, additionalStyles, ...props }) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.touchable[buttonType], additionalStyles]}
      {...props}
    >
      <Text style={styles.text[buttonType]}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
}

export default MyButton;
