import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";

import Button from "../Button";
import Input from "../Input";

function Form({
  handleFormSubmit,
  handleInputChange,
  inputsArray,
  submitButtonTitle
}) {
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
      <Button buttonTitle={submitButtonTitle} onPress={handleFormSubmit} />
    </View>
  );
}

Form.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  inputsArray: PropTypes.array.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  submitButtonTitle: PropTypes.string.isRequired
};
export default Form;
