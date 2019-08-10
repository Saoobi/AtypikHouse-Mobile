import React from "react";
import { TextInput, View, Text } from "react-native";

import styles from "./styles";

function MyInput({
  additionalStyles,
  label,
  onChange,
  type = "text",
  placeholder,
  value
}) {
  return (
    <View style={[styles.container, additionalStyles]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onChangeText={onChange}
        style={[styles.input]}
        secureTextEntry={type === "password"}
        value={value}
      />
    </View>
  );
}

export default MyInput;
