import React, { Component } from "react";
import { View, KeyboardAvoidingView } from "react-native";

import Logo from "../../components/Logo";
import Form from "../../components/Form";
import styles from "./styles";

import { signUpUser } from "../../API";

class SignUp extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  };

  handleInputChange = (text, key) => {
    this.setState({
      [key]: text
    });
  };

  handleFormSubmit = () => {
    const { firstname, lastname, email, password } = this.state;
    signUpUser(email, lastname, firstname, password).then(data => {
      console.log("sqdsq" + data);
    });
  };

  render() {
    const FormInputs = [
      {
        label: "Nom",
        name: "lastname",
        type: "input"
      },
      {
        label: "Prenom",
        name: "firstname",
        type: "input"
      },
      {
        label: "E-mail",
        name: "email",
        type: "input"
      },
      {
        label: "Mot de passe",
        name: "password",
        type: "input"
      }
    ];

    return (
      <KeyboardAvoidingView style={styles.containerMain} behavior="position">
        <View style={styles.logo}>
          <Logo />
        </View>
        <View style={styles.form}>
          <Form
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            inputsArray={FormInputs}
            submitButtonTitle="Inscription"
          />
        </View>

        <View style={{ height: 100 }} />
      </KeyboardAvoidingView>
    );
  }
}

export default SignUp;
