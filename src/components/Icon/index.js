import React from "react";
import { Platform } from "react-native";
import PropTypes from "prop-types";

import Icon from "react-native-vector-icons/Ionicons";

function IconComponent({
  additionalStyles,
  color = "black",
  name,
  size = 28,
  ...props
}) {
  return (
    <Icon
      name={Platform.OS === "ios" ? `ios-${name}` : `md-${name}`}
      size={size}
      color={color}
      style={[additionalStyles]}
      {...props}
    />
  );
}

IconComponent.propTypes = {
  additionalStyles: PropTypes.object,
  color: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.number
};
export default IconComponent;
