import React from "react";
import { View, Text, Image } from "react-native";
import MyButton from "../../components/Button";
import styles from "./styles";

function Home({ navigation }) {
  function navigateTo(route) {
    navigation.navigate(route);
  }
  return (
    <View style={styles.container_main}>
      <View style={styles.container_logo}>
        <Image source={require("../../img/logoBlanc.png")} />
      </View>
      <View style={styles.container_button}>
        <View>
          <MyButton
            additionalStyles={{ marginBottom: 30 }}
            buttonType="default"
            buttonTitle="Connexion"
            onPress={() => navigateTo("SignIn")}
          />
          <MyButton
            buttonType="default"
            buttonTitle="Inscription"
            onPress={() => navigateTo("SignUp")}
          />
        </View>
        <MyButton
          buttonType="default"
          buttonTitle="Continuer sans m'enregistrer"
          onPress={() => navigateTo("SignUp")}
        />
      </View>
      <View style={styles.container_cgu}>
        <Text>
          En appuyant sur Connexion, Inscription ou Continuer sans
          m'enregistrer, j'accepte les Conditions générales d'utilisation et la
          Politique de confidentialité d'AtypikHouse
        </Text>
      </View>
    </View>
  );
}

export default Home;
