import React from "react";
import { View, Text, Image } from "react-native";
import MyButton from "../../components/Button";
import styles from "./styles";

function Home({ navigation }) {
  function navigateTo(route) {
    navigation.navigate(route);
  }
  return (
    <View style={styles.containerMain}>
      <View style={styles.containerLogo}>
        <Image source={require("../../img/logoBlanc.png")} />
      </View>
      <View style={styles.containerButton}>
        <View>
          <MyButton
            additionalStyles={{ marginBottom: 15 }}
            buttonTitle="Connexion"
            onPress={() => navigateTo("SignIn")}
          />
          <MyButton
            buttonTitle="Inscription"
            onPress={() => navigateTo("SignUp")}
          />
        </View>
        <MyButton
          buttonType="transparent"
          buttonTitle="Continuer sans m'enregistrer"
          onPress={() => navigateTo("SignUp")}
        />
      </View>
      <View style={styles.containerPrivacy}>
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
