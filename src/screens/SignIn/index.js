import React, { Component } from "react";
import { View, KeyboardAvoidingView } from "react-native";

import Form from "../../components/Form";
import Logo from "../../components/Logo";
import styles from "./styles";

import { signInUser } from "../../API";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleInputChange = (text, key) => {
    this.setState({
      [key]: text
    });
  };

  handleFormSubmit = () => {
    const { email, password } = this.state;
    signInUser(email, password).then(data => {
      console.log(data);
    });

    alert(`email: ${email} - password ${password}`);
  };

  render() {
    const FormInputs = [
      {
        additionalStyles: { marginBottom: 25 },
        label: "E-mail",
        name: "email"
      },
      {
        additionalStyles: { marginBottom: 60 },
        label: "Mot de passe",
        name: "password"
      }
    ];

    return (
      <KeyboardAvoidingView style={styles.containerMain} behavior="position">
        <Logo />
        <View style={styles.form}>
          <Form
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            inputsArray={FormInputs}
            submitButtonTitle="Connexion"
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default SignIn;
