import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";

import Button from "../Button";
import Input from "../Input";
import Picker from "../Picker";

function Form({
  //Champs required
  handleInputChange,
  inputsArray,

  withButtonSubmit = true,

  //With Submit button
  handleFormSubmit,
  submitButtonTitle
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
          switch (item.type) {
            case "input":
              return (
                <Input
                  key={index}
                  onChange={text => handleInputChange(text, item.name)}
                  {...item}
                  placeholder={item.placeholder}
                />
              );
            case "picker":
              return (
                <Picker
                  key={index}
                  onChange={text => handleInputChange(text, item.selectedValue)}
                  {...item}
                />
              );

            default:
              return (
                <Input
                  key={index}
                  onChange={text => handleInputChange(text, item.name)}
                  {...item}
                  placeholder={item.placeholder}
                />
              );
          }
        })}
      </View>
    );
  }
}

Form.propTypes = {
  handleFormSubmit: PropTypes.func,
  handleInputChange: PropTypes.func.isRequired,
  inputsArray: PropTypes.array.isRequired,
  submitButtonTitle: PropTypes.string
};
export default Form;
