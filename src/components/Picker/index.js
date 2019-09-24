import React from "react";
import PropTypes from "prop-types";
import { Picker, View, Text } from "react-native";

import styles from "./styles";

function PickerList({
  additionalStyles,
  label,
  listPicker,
  onChange,
  selectedValue,
  ...props
}) {
  return (
    <View style={[styles.container, additionalStyles]}>
      <Text style={styles.label}>{label}</Text>
      <Picker selectedValue={selectedValue} onValueChange={onChange} {...props}>
        {listPicker.map((item, index) => {
          return <Picker.Item key={index} label={item} value={item} />;
        })}
      </Picker>
    </View>
  );
}

PickerList.propTypes = {
  additionalStyles: PropTypes.object,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
export default PickerList;
