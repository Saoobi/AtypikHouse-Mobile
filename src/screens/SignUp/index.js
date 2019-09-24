import React, { Component } from "react";
import { View, KeyboardAvoidingView } from "react-native";

import Logo from "../../components/Logo";
import Form from "../../components/Form";
import styles from "./styles";

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
        name: "lastname",
        type: "input"
      },
      {
        label: "Prenom",
        name: "name",
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
