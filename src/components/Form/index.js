import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";

import Button from "../Button";
import Input from "../Input";
import { Item } from "native-base";

function Form({
  handleFormSubmit,
  handleInputChange,
  inputsArray,
  submitButtonTitle,
  withButtonSubmit = true
}) {
  if (withButtonSubmit) {
    return (
      <View>
        {inputsArray.map((item, index) => {
          return (
            <Input
              key={index}
              onChange={text => handleInputChange(text, item.name)}
              {...item}
            />
          );
        })}
        <Button
          additionalStyles={{ marginTop: 15 }}
          buttonTitle={submitButtonTitle}
          onPress={handleFormSubmit}
        />
      </View>
    );
  } else {
    return (
      <View>
        {inputsArray.map((item, index) => {
          return (
            <Input
              key={index}
              onChange={text => handleInputChange(text, item.name)}
              {...item}
              placeholder={item.placeholder}
            />
          );
        })}
      </View>
    );
  }
}

Form.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  inputsArray: PropTypes.array.isRequired,
  submitButtonTitle: PropTypes.string.isRequired
};
export default Form;
