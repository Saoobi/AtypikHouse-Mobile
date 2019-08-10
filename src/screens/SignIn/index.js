import React, { Component, useState } from "react";
import { View } from "react-native";

import Button from "../../components/Button";
import Input from "../../components/Input";
import Logo from "../../components/Logo";
import styles from "./styles";

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

  handleSubmit = () => {
    const { email, password } = this.state;
    alert(`email: ${email} - password ${password}`);
  };

  render() {
    const { email, password } = this.state;

    return (
      <View style={styles.containerMain}>
        <Logo />
        <View style={styles.form}>
          <Input
            additionalStyles={{ marginBottom: 25 }}
            label="E-mail"
            onChange={text => this.handleInputChange(text, "email")}
            placeholder="email@examples.com"
            value={email}
          />
          <Input
            additionalStyles={{ marginBottom: 60 }}
            label="Mot de passe"
            onChange={text => this.handleInputChange(text, "password")}
            placeholder="*******"
            type="password"
            value={password}
          />
          <Button buttonTitle="Connexion" onPress={this.handleSubmit} />
        </View>
      </View>
    );
  }
}

/*return (
    <View>
      <Input />
      <Input />
    </View>
  );
}*/

export default SignIn;
