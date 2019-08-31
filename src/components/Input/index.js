import React from "react";
import PropTypes from "prop-types";
import { TextInput, View, Text } from "react-native";

import styles from "./styles";

function Input({ additionalStyles, label, onChange, type = "text" }) {
  return (
    <View style={[styles.container, additionalStyles]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onChangeText={onChange}
        style={[styles.input]}
        secureTextEntry={type === "password"}
      />
    </View>
  );
}

Input.propTypes = {
  additionalStyles: PropTypes.object,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string
};
export default Input;
