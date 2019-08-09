import React from "react";
import PropTypes from "prop-types";
import { Text, TouchableOpacity } from "react-native";
import { baseStyles, styles } from "./styles";

function MyButton({
  additionalStyles,
  buttonColor = "primary",
  buttonTitle,
  buttonType = "contained",
  ...props
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        baseStyles.touchable,
        styles[buttonType][buttonColor].touchable,
        additionalStyles
      ]}
      {...props}
    >
      <Text style={[baseStyles.text, styles[buttonType][buttonColor].text]}>
        {buttonTitle}
      </Text>
    </TouchableOpacity>
  );
}

MyButton.propTypes = {
  additionalStyles: PropTypes.object,
  buttonColor: PropTypes.string,
  buttonTitle: PropTypes.string.isRequired,
  buttonType: PropTypes.string
};
export default MyButton;
