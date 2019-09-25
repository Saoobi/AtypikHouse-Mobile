import React, { Component } from "react";
import { AsyncStorage, View, KeyboardAvoidingView } from "react-native";
import NotificationPopup from "react-native-push-notification-popup";

import Form from "../../components/Form";
import Logo from "../../components/Logo";
import Popup from "../../components/Popup";
import styles from "./styles";
import NavigationService from "../../components/NavigationService";

import { getUserToken, getUser } from "../../API";

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
    getUserToken(email, password).then(data => {
      if (data) {
        getUser().then(data => {
          try {
            AsyncStorage.setItem("USER_FIRSTNAME", data.user.firstname);
            AsyncStorage.setItem("USER_LASTNAME", data.user.lastname);
          } catch (error) {
            console.log(error.message);
          }

          NavigationService.navigate("Lodgings");
        });
      } else {
        this.popup.show({
          appIconSource: "close-circle",
          appTitle: "Erreur",
          title: "Erreur de connexion",
          body: "Identifiant ou mot de passe incorrect",
          slideOutTime: 2000
        });
      }
    });
  };

  render() {
    const FormInputs = [
      {
        label: "E-mail",
        name: "email",
        type: "input"
      },
      {
        label: "Mot de passe",
        name: "password",
        type: "password"
      }
    ];

    const renderCustomPopup = ({ appIconSource, appTitle, title, body }) => (
      <Popup
        appIconSource={appIconSource}
        appTitle={appTitle}
        title={title}
        body={body}
      />
    );

    return (
      <View style={styles.container_global}>
        <View style={styles.popupContainer}>
          <NotificationPopup
            ref={ref => (this.popup = ref)}
            renderPopupContent={renderCustomPopup}
          />
        </View>

        <KeyboardAvoidingView style={styles.container_main} behavior="position">
          <View style={styles.logo}>
            <Logo />
          </View>
          <View style={styles.form}>
            <Form
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
              inputsArray={FormInputs}
              submitButtonTitle="Connexion"
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default SignIn;
