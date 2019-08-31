import React, { Component } from "react";
import { View, KeyboardAvoidingView } from "react-native";

import Logo from "../../components/Logo";
import Form from "../../components/Form";

class SignUp extends Component {
  state = {
    lastname: "",
    name: "",
    email: "",
    password: ""
  };

  handleInputChange = (text, key) => {
    this.setState({
      [key]: text
    });
  };

  handleFormSubmit = () => {
    const { lastname, name, email, password } = this.state;
    alert(
      `lastname : ${lastname} - name: ${name} - email: ${email} - password ${password}`
    );
  };

  render() {
    const FormInputs = [
      {
        label: "Nom",
        name: "lastname"
      },
      {
        label: "Prenom",
        name: "name"
      },
      {
        label: "E-mail",
        name: "email"
      },
      {
        label: "Mot de passe",
        name: "password"
      }
    ];

    return (
      <KeyboardAvoidingView behavior="position">
        <Logo />
        <View>
          <Form
            inputsArray={FormInputs}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            submitButtonTitle="Inscription"
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default SignUp;
