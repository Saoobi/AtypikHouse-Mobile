import React from "react";
import { View, Text } from "react-native";

import Button from "../../components/Button";
import Logo from "../../components/Logo";
import styles from "./styles";

function Home({ navigation }) {
  function navigateTo(route) {
    navigation.navigate(route);
  }
  return (
    <View style={styles.containerMain}>
      <Logo />
      <View style={styles.containerButton}>
        <View>
          <Button
            additionalStyles={{ marginBottom: 15 }}
            buttonTitle="Connexion"
            onPress={() => navigateTo("SignIn")}
          />
          <Button
            buttonTitle="Inscription"
            onPress={() => navigateTo("SignUp")}
          />
        </View>
        <Button
          buttonType="transparent"
          buttonTitle="Continuer sans m'enregistrer"
          onPress={() => navigateTo("Lodgings")}
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
