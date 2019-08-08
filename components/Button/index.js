import React from "react";
import { Button } from "react-native";
import styles from "./styles";

function MyButton({ buttonTitle, buttonColor, ...props }) {
  return (
    <Button color={styles[buttonColor].color} title={buttonTitle} {...props} />
  );
}

export default MyButton;
