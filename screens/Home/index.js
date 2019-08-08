import React from "react";
import { View } from "react-native";
import MyButton from "../../components/Button";

function Home({ navigation }) {
  function navigateTo(route) {
    navigation.navigate(route);
  }
  return (
    <View>
      <MyButton
        buttonColor="danger"
        buttonTitle="Connexion"
        onPress={() => navigateTo("SignIn")}
      />
      <MyButton
        buttonColor="danger"
        buttonTitle="Inscription"
        onPress={() => navigateTo("SignUp")}
      />
    </View>
  );
}

export default Home;
